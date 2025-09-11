import Header from "./Header"
import rapidoBg from "../assets/rapidobg.png";
import React, { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import { apiRequest } from "../api";
import { useNavigate, useParams } from "react-router"; 




function Booking({token,onLogout,id}) {
    const [paymentMode, setPaymentMode] = useState("Cash");
    const {centerId}=useParams();
    const [testName, setTestName] = useState("Select Test");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [center,setCenter]=useState([]);
    const fileInputRef = useRef(null);
    const [imageUrl,setImageUrl]=useState(null);
    const [centerName, setCenterName] = useState("Uinque Clinic");
    const navigate=useNavigate();



    useEffect(()=>{
        fetchCenter();
        fetchcCenterName();
    },[token]);

    const fetchCenter=async()=>{
        try{
            const res=await apiRequest(`/diagnostic/user/getTest/${centerId}`,"GET",null,token);
            setCenter(res);
            console.log(res);
        }
        catch(err){
            console.log("error in  fetch messaage not");
        }
    };

     const fetchcCenterName=async()=>{
        try{
            const res=await apiRequest(`/diagnostic/user/getCentername/${centerId}`,"GET",null,token);
            setCenterName(res);
            console.log(res);
            console.log(id);
            console.log(localStorage.getItem("id"));
        }
        catch(err){
            console.log("error in  fetch messaage not");
        }
    };



    const handleImageChange = (file) => {
    if (file && file.type.startsWith('image/')) {
      setImageUrl(URL.createObjectURL(file));
      setError('');
    } else {
      setError('Please select a valid image file');
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) handleImageChange(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageUrl) {
      setError("Please select an image");
      return;
    }
    setSuccess("");
      try {
          await apiRequest(`/diagnostic/user/booking/${id}`, "POST", {testName,centerName,imageUrl}, token);    
          navigate("/diagnostics");
        } catch (err) {
        setError("Failed " + err.message);
      }
  };
    return (
        <div>
          <Header token={token} onLogout={onLogout}/>
        <section
      className="relative flex flex-col items-center justify-center min-h-[70vh] w-full"
      style={{
        backgroundImage: `url(${rapidoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl mx-auto p-8 rounded-xl shadow-lg bg-white/90">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 text-center">
          HealthCare Booking Tests
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Fast, safe, and easy booking tests at your fingertips.
        </p>
        {/* Safety Tips Banner */}
        <div className="w-full mb-4">
          <div className="flex items-center gap-3 bg-blue-50 border-l-4 border-blue-400 rounded-lg p-3 shadow">
            <span className="text-blue-500 text-2xl">🦺</span>
            <span className="text-gray-800 font-medium">
              Safety First: Always secure tests and affordable prices.
            </span>
          </div>
        </div>
        {/* Promo/Offers Section */}
        <div className="w-full mb-4">
          <div className="flex items-center gap-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-3 shadow animate-pulse">
            <span className="text-yellow-500 text-2xl">🎁</span>
            <span className="text-gray-800 font-medium">
              Special Offer: Get 20% off on your first Booking! Use code{" "}
              <span className="font-bold text-yellow-700">HEALTHCARE20</span>
            </span>
          </div>
        </div>
        {/* Feature Highlights Section */}
        <div className="w-full mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center bg-green-50 rounded-lg p-4 shadow">
              <span className="text-green-600 text-3xl mb-2">⚡</span>
              <span className="font-semibold text-gray-800 mb-1">
                Instant Booking
              </span>
              <span className="text-gray-600 text-sm text-center">
                Book Tests in seconds with real-time.
              </span>
            </div>
            <div className="flex flex-col items-center bg-blue-50 rounded-lg p-4 shadow">
              <span className="text-blue-600 text-3xl mb-2">🛡️</span>
              <span className="font-semibold text-center text-gray-800 mb-1">
                Verified Diagnostic Test Centers
              </span>
              <span className="text-gray-600 text-sm text-center">
                All diagnostic centers are background-checked for your safety.
              </span>
            </div>
            <div className="flex flex-col items-center bg-purple-50 rounded-lg p-4 shadow">
              <span className="text-purple-600 text-3xl mb-2">💳</span>
              <span className="font-semibold text-gray-800 mb-1">
                Multiple Payment Options
              </span>
              <span className="text-gray-600 text-sm text-center">
                Pay with cash, card, or wallet—your choice, every time.
              </span>
            </div>
          </div>
        </div>
        {/* Frequent/Recent Locations */}
        <form  onSubmit={handleSubmit} className="space-y-4 w-full">
            <div>
                <label className="block font-semibold mb-1">Available Tests</label>
                <div className=" h-15 border-orange-50 rounded-lg shadow bg-orange-50">
                  <select name="Tests Name"
                    className="w-full h-full p-3"
                    value={testName}
                    onChange={(e) => setTestName(e.target.value)}
                  >
                      {center.map((f)=>(
                        <option key={f.id} value={f.name}>
                         {f.name}
                        </option>
                      ))}
                  </select>
                </div>
            </div>

          <div>
            <label className="block font-semibold mb-1">Please Upload Doctor Prescription</label>
            <div className=" h-15 border-orange-50 rounded-lg shadow bg-orange-50">
                  <button onClick={()=>fileInputRef.current?.click()}
                    className="bg-purple-50 text-black px-4 py-2 rounded font-semibold hover:bg-purple-100 transition w-full h-full">
                    Select from Browser
                  </button>
                  <input 
                  ref={fileInputRef} 
                  type="file"
                  accept="image/*"
                  onChange={handleFileInput} 
                  className="hidden"/>
            </div>
          </div>  
          
          {/* Payment Options as Cards */}
          <div>
            <label className="block font-semibold mb-1">Payment Mode</label>
            <div className="flex gap-4">
              {[
                {
                  mode: "Cash",
                  icon: "💵",
                  color: "bg-green-50 border-green-200",
                  selected: paymentMode === "Cash",
                },
                {
                  mode: "Card",
                  icon: "💳",
                  color: "bg-blue-50 border-blue-200",
                  selected: paymentMode === "Card",
                },
                {
                  mode: "Wallet",
                  icon: "👛",
                  color: "bg-purple-50 border-purple-200",
                  selected: paymentMode === "Wallet",
                },
              ].map((opt) => (
                <button
                  type="button"
                  key={opt.mode}
                  className={`flex-1 border rounded-lg px-3 py-2 font-semibold flex flex-col items-center gap-1 hover:shadow transition focus:outline-none ${
                    opt.color
                  } ${opt.selected ? "ring-2 ring-blue-400" : ""}`}
                  onClick={() => setPaymentMode(opt.mode)}
                >
                  <span className="text-2xl">{opt.icon}</span>
                  <span>{opt.mode}</span>
                </button>
              ))}
            </div>
          </div>
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-600">{success}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition-all duration-200 shadow-lg"
          >
            Book Test
          </button>
        </form>
      </div>
    </section>
    <Footer/>

        </div>
    )
}
export default Booking