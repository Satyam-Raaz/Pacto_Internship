import { useEffect, useState } from "react"
import Header from "./Header"
import { apiRequest } from "../api";
import React from "react";
import Footer from "./Footer"
import { Navigate, useNavigate } from "react-router";


function Diagnostic({token,onLogout,role,edit}){
    const [center,setCenter]=useState([]);
    const navigate = useNavigate();
    const [del,setDelId]=useState("");

    const deleteDiagnostic=async()=>{
    
            try{
                console.log(del);
                console.log("delete process");
                await apiRequest(`/diagnostic/admin/deleteDiagnostic/${del}`,"DELETE",null,token);
                navigate("/clinics");
            }
            catch(err){
                console.log("error in  fetch messaage not");
            }
    };
    


    useEffect(()=>{
        fetchCenter();
    },[token]);

    const fetchCenter=async()=>{
        try{
            const res=await apiRequest("/diagnostic/user/getAllCenter","GET",null,token);
            setCenter(res);
            console.log(res);
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

                {center.map((s)=>(
                <div key={s.id} className="">
                    <div className="bg-white flex  rounded mb-1 w-full h-80 relative">
                        <div className="flex  h-full ">

                        <div className="bg-white ">
                            <img src="https://picsum.dev/image/15/view"
                             alt="preview" 
                             className="h-75 ml-5 mt-3 w-75 mr-5 p-2 rounded-full object-cover"
                             />
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex flex-col mt-10 p-5">
                                <span className="text-blue-800   font-semibold font-serif text-4xl">{s.name}</span>
                                <span className="font-mono mt-2 text-xl">{s.address}</span>
                            </div>
                            <div className="flex flex-col ml-5 ">
                                {s.tests.map((t)=>(
                                <div key={t.id} className="">
                                    <span className="font-semibold">{t.name} :</span> <span className="text-green-500">₹{t.price}</span>
                                </div> 

                                ))}

    
                            </div>

                            {role==="USER"?(
                                <div>
                            <div className="absolute right-0 bottom-0 mb-15 mr-4 p-2 ml-5 mt-10 justify-end ">
                               <button className=" bg-green-400 transition   ease-in-out hover:-translate-y-1 rounded hover:bg-green-500 text-white w-50 h-11 px-4 py-2 " onClick={() =>navigate(`/bookings/${s.id}`)}>
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
                               <button className=" bg-green-400 transition   ease-in-out hover:-translate-y-1 rounded hover:bg-green-500 text-white w-50 h-11 px-4 py-2 " onClick={() =>navigate(`/editDiagnostic/${s.id}`)}>
                                Edit Now 
                                </button>
                            </div>
                            <div className="absolute right-0 bottom-0 mr-4 p-2 ml-5 mt-2 " >
                                <button className="w-50 h-11" onClick={()=>setDelId(s.id)} >
                                        <button onClick={deleteDiagnostic} className="bg-red-500 transition   ease-in-out hover:-translate-y-1  text-white hover:bg-red-600 rounded w-50 h-11 ">Delete</button>
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
            <Footer/>
        </div>
    )
}

export default Diagnostic