import { useState,useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import { apiRequest } from "../api";
import { useNavigate } from "react-router";


function AddTest({token,onLogout,role,id,edit}){
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [userId,setUserId]=useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [address,setAddress]=useState("");
    const [testName,setTestName]=useState("");
    const [seats,setSeats]=useState("");
    const [tests,setTests]=useState([]);

    

    const navigate=useNavigate();

        useEffect(()=>{
            setUserId(id);
        },[]);

    


    
    const handleSubmit = async (e) => {
        e.preventDefault();
          try {
            console.log(userId);
            console.log(id);
            console.log(tests);
              await apiRequest("/diagnostic/admin/addCenter", "POST", {name,address,tests,userId}, token);  
              console.log("Add SuccessFully");  
              navigate("/home");
            } catch (err) {
                console.log(err.message);
            setError("Failed " + err.message);
          }
    };

    return(
        <div className="flex flex-col bg-gray-200 justify-center h-full items-center rounded-lg">
            <div className="w-full">
                <Header token={token} onLogout={onLogout} role={role} />
            </div>
            <div className=" flex flex-col  bg-white h-full w-190 text-center">
               <div className="">
                <div className= " flex h-30 bg-gray-500">
                <div className="flex w-full p-9 h-30 bg-yellow-50 font-bold font-serif text-2xl">
                    <div>
                        <img src="https://tse4.mm.bing.net/th/id/OIP.Wgdzy418e5uURfhncc3GLgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
                         className="h-15 mr-34" 
                         alt="" />
                    </div>
                    <div>Fill Diagnostic Center Details</div>

                </div>
                </div>
          <div className="">
              <div>

                <div className="flex flex-col gap-2">
                     <div className="w-full bg-purple-50 rounded-lg shadow h-20 hover: bg-purple-100">
                    <label  className="block text-xl font-semibold">Diagnostic Center Name:</label>
                        <input 
                         className= "h-10 text-center w-full" 
                         type="text" 
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         placeholder="Enter Doctor's name" />             
                </div>

                <div className="bg-blue-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Address:</label>
                        <input 
                         className= "h-10 text-center  w-full" 
                         type="text" 
                         value={address}
                         onChange={(e) => setAddress(e.target.value)}
                         placeholder="Enter Specialization Degree" />
                </div>

                <div className="rounded-lg shadow bg-gray-200 w-full ">

                    <div className="flex  w-full">
                    <div className="bg-blue-50 rounded-lg shadow h-20 w-1/3">
                    <label  className="block text-xl font-semibold">Test Name:</label>
                        <input 
                         className= "h-10 text-center  w-full" 
                         type="text" 
                         value={testName}
                         onChange={(e) => setTestName(e.target.value)}
                         placeholder="Enter Specialization Degree" />
                </div>

                <div className="bg-green-50 rounded-lg shadow h-20 w-1/3">
                    <label  className="block text-xl font-semibold">Fees:</label>
                        <input 
                         className= "h-10 text-center w-full" 
                         type="number" 
                         value={price}
                         onChange={(e) => setPrice(e.target.value)}
                         placeholder="Prescription Charge" />
                </div>

                <div className="bg-green-50 rounded-lg shadow h-20 w-1/3">
                    <label  className="block text-xl font-semibold">Available Seats:</label>
                        <input 
                         className= "h-10 text-center w-full" 
                         type="number" 
                         value={seats}
                         onChange={(e) => setSeats(e.target.value)}
                         placeholder="Prescription Charge" />
                </div>
                </div>


                {tests.map((s)=>(
                <div className="flex gap-30" >
                    <div className="ml-10">{s.testName}</div>
                    <div>{s.price}</div>
                    <div>{s.seats}</div>
                </div>
                ))}

                <div className="w-2/3 ml-28 bg-blue-500 h-10  rounded-lg  hover:bg-blue-700">
                    <button className="mt-4 "  onClick={()=>setTests([{testName,price,seats}])}>ADD</button>
                </div>

                
                </div>


                   {error && <div className="text-red-500">{error}</div>}
                   {success && <div className="text-green-600">{success}</div>}

                   {edit===false ?(
                    <div className="w-full bg-blue-500 h-15 hover:bg-blue-700">
                    <button className="mt-4" type="submit" onClick={()=>setTests([{testName,price,seats}])}>Submit</button>
                    </div>
                   ):(
                    <div className="flex w-full" >
                     <div className="bg-green-500 h-15 w-full hover:bg-green-700">
                     <button className="mt-4" type="submit">Save</button>
                     </div>

                    </div>
                   )}

                </div>
              </div>
          </div>
               </div>
            </div>
            <div className="w-full">
                <Footer/>
            </div>
        </div>
    )
}

export default AddTest