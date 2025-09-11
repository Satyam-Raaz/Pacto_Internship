import { BrowserRouter as Router,Route,Routes,Navigate } from "react-router"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { useState,useEffect } from "react"
import Home from "./components/Home";
import About from "./components/About";
import Clinic from "./components/Clinic";
import Diagnostic from "./components/Diagnostic";
import Booking from "./components/Booking";
import BookingList from "./components/BookingList";
import AddTest from "./components/AddTest";
import AddDoctor from "./components/AddDoctor";
import Profile from "./components/Profile";
import EditContent from "./components/EditContent";
import BookingDoctors from "./components/BookingDoctors";

function App() {

  const [token,setToken]=useState("");
  const [id,setId]=useState("");
  const [role,setRole]=useState(null);
  const [edit,setEdit]=useState(true);

  useEffect(()=>{
    setToken(localStorage.getItem("token"));
    setId(localStorage.getItem("id"));
    setRole(localStorage.getItem("role"));

  },[]);

  const handleLogout=()=>{
    localStorage.removeItem("token");
    setToken(null);
    localStorage.removeItem("role");
    setRole(null);
  }  




  return (
    <>
    <Router>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} setId={setId} setRole={setRole}/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={token ? <Home token={token} onLogout={handleLogout} role={role}/> : <Navigate to="/" />}/>
      <Route path="/about" element={token ? <About token={token} onLogout={handleLogout}/> : <Navigate to="/" />}/>
      <Route path="/clinics" element={token ? <Clinic token={token} onLogout={handleLogout} role={role} id={id} edit={false} /> : <Navigate to="/" />}/>
      <Route path="/diagnostics" element={token ? <Diagnostic token={token} onLogout={handleLogout} role={role} edit={false} /> : <Navigate to="/" />}/>
      <Route path="/bookinglist" element={token ? <BookingList token={token} onLogout={handleLogout} id={id}/> : <Navigate to="/" />}/>
      <Route path="/bookings/:centerId" element={token ? <Booking token={token} onLogout={handleLogout} id={id}/> : <Navigate to="/" />}/>
      <Route path="/addTest" element={token ? <AddTest token={token} onLogout={handleLogout} role={role} id={id} edit={false}/> : <Navigate to="/" />}/>
      <Route path="/addDoctor" element={token ? <AddDoctor token={token} onLogout={handleLogout} role={role} id={id} edit={false}/> : <Navigate to="/" />}/>
      <Route path="/profile" element={token ? <Profile token={token} onLogout={handleLogout} role={role} id={id}/> : <Navigate to="/" />}/>
      <Route path="/editContent" element={token ? <EditContent token={token} onLogout={handleLogout} role={role} id={id} edit={edit}/> : <Navigate to="/"/>}/>
      <Route path="/bookingDoctor/:centerId" element={token ? <BookingDoctors token={token} onLogout={handleLogout} role={role} id={id}/> : <Navigate to="/" />}/>
      <Route path="/editDoctor/:docId" element={token ? <AddDoctor token={token} onLogout={handleLogout} role={role} id={id} edit={edit}/> : <Navigate to="/" />}/>
      /**Delete */
      <Route path="/addDoctor/:bool" element={token ? <AddDoctor token={token} onLogout={handleLogout} role={role} id={id}/> : <Navigate to="/" />}/>
      <Route path="/editDiagnostic/:docId" element={token ? <AddTest token={token} onLogout={handleLogout} role={role} id={id} edit={edit}/> : <Navigate to="/" />}/>





    </Routes>

    </Router>
    </>

  )
}

export default App
