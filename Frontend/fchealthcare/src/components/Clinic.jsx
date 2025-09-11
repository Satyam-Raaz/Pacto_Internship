import { useEffect, useState } from "react"
import Header from "./Header"
import { apiRequest } from "../api";
import React from "react";
import Footer from "./Footer"
import { Navigate, useNavigate } from "react-router";

function Clinic({token,onLogout,role,id,edit}){
    const [doctor,setDoctor]=useState([]);
    const navigate = useNavigate();
    const [del,setDelId]=useState("");
    const [auth,setAuth]=useState(false);
    const [doctorLength,setDoctorLength]=useState("");
    const [page,setPage]=useState(0);
    const [totalPages,setTotalPages]=useState("");


    useEffect(()=>{
       if(role=="USER"){
         fetchDoctorByPage();
       }
       else fetchDoctorByUsaerId();
    },[token]);

    

    const fetchDoctor=async()=>{
        try{
            const res=await apiRequest("/diagnostic/user/getAllDoctors","GET",null,token);
            setDoctor(res);
            setDoctorLength(doctor.length);
            console.log(doctorLength);
            console.log(res);
        }
        catch(err){
            console.log("error in  fetch messaage not");
        }
    };

    const fetchDoctorByPage = async () => {
    try {
      const res = await apiRequest(`/diagnostic/user/getAllClinicPage?page=${page}&size=10`,"GET",null,token);
      setDoctor(res.content);
      setTotalPages(res.totalPages);
      console.log(res.content)
      console.log(page);
      console.log(res);
    } catch (err) {
      //
    }
   };

    const fetchDoctorByUsaerId=async()=>{
        try{
            const res=await apiRequest(`/diagnostic/admin/getDoctors/${id}`,"GET",null,token);
            setDoctor(res);
            console.log(res);

        }
        catch(err){
            console.log("error in  fetch messaage not");
        }
    };

    const deleteclinic=async()=>{

        try{
            console.log(del);
            console.log("delete process");
            await apiRequest(`/diagnostic/admin/deleteClinic/${del}`,"DELETE",null,token);
            navigate("/clinics");
        }
        catch(err){
            console.log("error in  fetch messaage not");
        }
    };

    


    return(

        <div >
            {edit===false&&(
                <Header token={token} onLogout={onLogout} role={role}/>
            )}
            <main className="bg-gradient-to-r from-blue-500 to-purple-500  ">

                {doctor.map((s)=>(
                <div key={s.id} className="">
                    <div className="bg-white flex  rounded mb-1 w-full h-80 relative">
                        <div className="flex  h-full ">
                        <div className="bg-white ">
                            <img src={s.imageUrl}
                             alt="preview" 
                             className="h-75 ml-5 mt-3 w-75 mr-5 p-2 rounded-full object-cover"
                             />
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex flex-col mt-10 p-5">
                                <span className="text-blue-800   font-semibold font-serif text-4xl">{s.name}</span>
                                <div className="flex gap-2">
                                    <span className="font-semibold">Experience : {del}</span>
                                    <span className="text-purple-700 font-semibold">{s.experience}</span>
                                    <span className="font-semibold">, </span>
                                    <span className="font-semibold">Specialist :</span>
                                    <span className="text-red-400">{s.specialist}</span>
                                </div>
                                <span className="font-mono mt-2 text-xl font-sans">{s.location}</span>
                            </div>
                            <div className="flex flex-col ml-5 ">
                                <div className="flex gap-1">
                                    <span className="font-semibold">Consultant Fees : </span>
                                    <span className="text-green-500">₹{s.fees}</span>
                                </div> 
                            </div>

                            {role==="USER"?(
                                <div>
                            <div className="absolute right-0 bottom-0 mb-15 mr-4 p-2 ml-5 mt-10 justify-end ">
                               <button className=" bg-green-400 transition   ease-in-out hover:-translate-y-1 rounded hover:bg-green-500 text-white w-50 h-11 px-4 py-2 " onClick={() =>navigate(`/bookingDoctor/${s.id}`)}>
                                Book Now
                                </button>
                            </div>
                            <div className="absolute right-0 bottom-0 mr-4 p-2 ml-5 mt-2">
                               <button className="bg-cyan-500 transition   ease-in-out hover:-translate-y-1  text-white hover:bg-cyan-400 rounded w-50 h-11 ">Contact Center</button>
                            </div>
                                </div>
                            ):(
                                <div>
                                <div className="absolute right-0 bottom-0 mb-15 mr-4 p-2 ml-5 mt-10 justify-end ">
                               <button className=" bg-green-400 transition   ease-in-out hover:-translate-y-1 rounded hover:bg-green-500 text-white w-50 h-11 px-4 py-2 " onClick={() =>navigate(`/editDoctor/${s.id}`)}>
                                Edit Now 
                                </button>
                            </div>
                            <div className="absolute right-0 bottom-0 mr-4 p-2 ml-5 mt-2 " >
                                <button className="w-50 h-11" onClick={()=>setDelId(s.id)}>
                                        <button onClick={deleteclinic}  className="bg-red-500 transition   ease-in-out hover:-translate-y-1  text-white hover:bg-red-600 rounded w-50 h-11 ">Delete</button>
                                </button>
                            </div>
                                </div>
                            )}
                            

                        </div>

                    </div>
                    </div>   

                    
   
                </div>

              ))}

            </main>

            <section>
                <div className="flex justify-center h-10">
                    <div className="">
                        <button className="border h-10 w-10 bg-blue-700">{"<"}</button>
                    </div>

                    {doctor.map((s)=>(
                        <div key={s.id}>
                        {s.id<=totalPages &&(
                        <div>
                            <button className="h-10 w-10" onClick={fetchDoctorByPage}>
                                <button className="border h-full w-full " onClick={()=>setPage(s.id)}  >{s.id}</button>
                            </button>
                        </div>                        
                        )}
                        </div>
                    ))}

                    <div>
                        <button className="border h-10 w-10 bg-blue-700">{">"}</button>
                    </div>
                </div>
            </section>



            <Footer/>
        </div>



    )
}

export default Clinic