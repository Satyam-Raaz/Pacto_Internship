import { useState } from "react"
import Clinic from "./Clinic"
import Header from "./Header"
import { useNavigate } from "react-router"
import Diagnostic from "./Diagnostic";

function  EditContent({token,onLogout,role,id,edit}){
    const navigate=useNavigate();
    const [showDoctor,setShowDoctor]=useState(true);
    const [showdiagnostic,setShowDiagnostic]=useState(false);
    return(
        <div className="flex flex-col">
            <Header token={token} onLogout={onLogout} role={role}/>
            <div className="flex justify-center h-15 gap-15 mt-10 ">
                <div className={` border rounded-lg shadow w-50  ${showDoctor===true? "bg-purple-200 hover:bg-purple-400" :"bg-gray-200 hover:bg-gray-400"}`}>
                    <button onClick={()=>setShowDoctor(true)} className="w-full h-full text-center">Edit Doctor Profile</button>
                </div>
                <div className={` border rounded-lg shadow w-50  ${showDoctor===false? "bg-purple-200 hover:bg-purple-400" :"bg-gray-200 hover:bg-gray-400"}`}>
                    <button onClick={()=>setShowDoctor(false)} className="w-full h-full text-center">Edit Diagnostic Center</button>
                </div>
            </div>
            <hr className="my-3  mt-10 text-purple-500 " />
            <div>
                {showDoctor===true&&(
                    <Clinic token={token} onLogout={onLogout} role={role} id={id} edit={edit}/>
                )}

                {showDoctor===false&&(
                    <Diagnostic token={token} onLogout={onLogout} role={role}  edit={edit}/>
                )}



            </div>


        </div>
    )
}

export default EditContent