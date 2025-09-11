import { useState,useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import { apiRequest } from "../api";
import { useNavigate, useParams } from "react-router";


function AddDoctor({token,onLogout,role,id,edit}){
    const [imageUrl,setImageUrl]=useState(null);
    const [name,setName]=useState("");
    const [experience,setExperience]=useState("");
    const [fees,setFees]=useState("");
    const [location,setLocation]=useState("");
    const [specialist,setSpecialist]=useState("");
    const [userId,setUserId]=useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const {docId}=useParams();
    const [doctor,setDoctor]=useState("");

    

    const navigate=useNavigate();

        useEffect(()=>{
            setUserId(id);
            fetchDoctor();
        },[token]);

    
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
          try {
            console.log(userId);
            console.log(id);
              await apiRequest("/diagnostic/admin/addClinic", "POST", {name,location,specialist,experience,fees,imageUrl,userId}, token);  
              console.log("Add SuccessFully");  
              navigate("/home");
            } catch (err) {
                console.log(err.message);
            setError("Failed " + err.message);
          }
    };

    const updateDoctor = async (e) => {
        e.preventDefault();
          try {
              await apiRequest(`/diagnostic/admin/updateDoctor/${docId}`, "PUT", {name,location,specialist,experience,fees,imageUrl,userId}, token);  
              console.log("Add SuccessFully");  
              navigate("/home");
            } catch (err) {
                console.log(err.message);
            setError("Failed " + err.message);
          }
    };


    const fetchDoctor=async()=>{
            try{
                console.log(docId);
                const res=await apiRequest(`/diagnostic/admin/getDoctorById/${docId}`,"GET",null,token);
                setDoctor(res);
                console.log(res);
                console.log(doctor);
                setName(res.name);
                setExperience(res.experience);
                setFees(res.fees);
                setLocation(res.location);
                setSpecialist(res.specialist);
                setImageUrl(imageUrl);
                console.log(name);
            }
            catch(err){
                console.log("error in  fetch messaage not");
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
                         className="h-15 mr-50" 
                         alt="" />
                    </div>
                    <div>Doctor Details</div>

                </div>
                </div>
          <div className="">
              <form onSubmit={edit===false?handleSubmit:updateDoctor} >

                <div className="flex flex-col gap-2">
                     <div className="w-full bg-purple-50 rounded-lg shadow h-20 hover: bg-purple-100">
                    <label  className="block text-xl font-semibold">Doctor's Name:</label>
                    {edit===false?(
                        <input 
                         className= "h-10 text-center w-full" 
                         type="text" 
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         placeholder="Enter Doctor's Name"
                         />
                    ):(
                        <input 
                         className= "h-10 text-center w-full" 
                         type="text" 
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         />
                    )}             
                </div>

                <div className="bg-blue-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Specialist:</label>
                    {edit===false?(
                        <input 
                         className= "h-10 text-center  w-full" 
                         type="text" 
                         value={specialist}
                         onChange={(e) => setSpecialist(e.target.value)}
                         placeholder="Enter Specialization Degree" />
                    ):(
                        <input 
                         className= "h-10 text-center  w-full" 
                         type="text" 
                         value={specialist}
                         onChange={(e) => setSpecialist(e.target.value)} />
                    )}
                </div>

                <div className="bg-orange-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Experience:</label>
                    {edit===false?(
                        <input 
                         className= "h-10 text-center w-full" 
                         type="text"
                         value={experience}
                         onChange={(e) => setExperience(e.target.value)} 
                         placeholder="Doctor's Exeperience" />
                    ):(
                       <input 
                         className= "h-10 text-center w-full" 
                         type="text"
                         value={experience}
                         onChange={(e) => setExperience(e.target.value)} />
                    )}
                </div>

                <div className="bg-green-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Fees:</label>
                    {edit===false?(
                        <input 
                         className= "h-10 text-center w-full" 
                         type="number" 
                         value={fees}
                         onChange={(e) => setFees(e.target.value)}
                         placeholder="Prescription Charge" />
                    ):(
                        <input 
                         className= "h-10 text-center w-full" 
                         type="number" 
                         value={fees}
                         onChange={(e) => setFees(e.target.value)} />
                    )}
                </div>

                 <div className="bg-purple-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Doctor's Image:</label>
                        <input 
                         className= "h-10 text-center w-full ml-70" 
                         type="file" 
                         accept="image/*"
                         onChange={handleFileInput} 
                         placeholder="Choose Your Picture" />
                </div>


                 <div className="bg-red-50 rounded-lg shadow h-20">
                    <label  className="block text-xl font-semibold">Address:</label>
                    {edit===false?(
                        <input 
                         className= "h-10 text-center w-full " 
                         type="text" 
                         value={location}
                         onChange={(e) => setLocation(e.target.value)}
                         placeholder="Enter Address" />
                    ):(
                        <input 
                         className= "h-10 text-center w-full " 
                         type="text" 
                         value={location}
                         onChange={(e) => setLocation(e.target.value)}/>
                    )}
                </div>

                   {error && <div className="text-red-500">{error}</div>}
                   {success && <div className="text-green-600">{success}</div>}

                   {edit===false ?(
                    <div className="w-full bg-blue-500 h-15 hover:bg-blue-700">
                    <button className="mt-4" type="submit">Submit</button>
                </div>
                   ):(
                    <div className="flex w-full" >
                     <div className="bg-green-500 h-15 w-full hover:bg-green-700">
                     <button className="mt-4" type="submit">Save</button>
                     </div>

                    </div>
                   )}

                </div>
              </form>
          </div>
               </div>
            </div>
            <div className="w-full">
                <Footer/>
            </div>
        </div>
    )
}

export default AddDoctor