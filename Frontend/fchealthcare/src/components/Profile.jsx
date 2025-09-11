import Header from "./Header"
import rapidoBg from "../assets/rapidobg.png";
import { useState,useEffect } from "react";
import { apiRequest } from "../api";
import { useNavigate } from "react-router";




function Profile({token,onLogout,role,id}) {
    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [contactNo,setContactNo]=useState("");
    const [edit,setEdit]=useState(false);
    const[error,setError] = useState("");
    const navigate=useNavigate();

        useEffect(()=>{
            fetchProfile();
        },[token]);

    const fetchProfile=async()=>{
        try{
            const res=await apiRequest(`/diagnostic/user/getUser/${id}`,"GET",null,token);
            setUserName(res.username);
            setAddress(res.address);
            setEmail(res.email);
            setContactNo(res.contactNo);
            console.log(res);
        }
        catch(err){
            console.log("error in  fetch messaage not");
        }
    };

        
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await apiRequest(`/diagnostic/user/updateUser/${id}`, "PUT",{username,email,address,contactNo}, token);
        navigate("/home");
    } catch (err) {
      setError("Failed to create post");
    }
    };

    return(
        <div>
            <Header token={token} onLogout={onLogout} role={role}/>
            <div
             className="flex  flex-col w-full h-full justify-center items-center  "
              style={{
                backgroundImage: `url(${rapidoBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",}} >

                <div className="w-270 bg-purple-200 ">
                    <div className="flex flex-col ">
                        <div className="h-20 ml-5 mt-10 text-2xl font-bold">My Profile </div>
                        <div className="flex w-full">
                            <div className="bg-green-50 w-1/3">
                              <div className="p-5 ml-15">
                                  <img 
                                    src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" 
                                    className="w-50 h-50 rounded-full border object-cover mx-auto md:mx-0  md:mb-0" 
                                    alt="profile" />
                              </div>
                              <div className="ml-27  text-2xl font-semibold ">
                                {username}
                              </div>
                              <div className="p-5 flex flex-col text-lg font-semibold gap-4 ">
                                <div >
                                    {email}
                                </div>
                                <hr className=" my-2"/>
                                <div>
                                    {contactNo}
                                </div>
                                <hr className="my-2" />
                                <div>
                                    {address}
                                </div>
                              </div>
                            </div>
                            <div className="w-2/3 bg-orange-50 ">
                               <div className="flex ">
                                    <div className=" p-5 font-bold text-2xl ">Personal Details</div>
                                        {edit ? (
                                            <div className="ml-76 mt-5">
                                            <div className="flex gap-2 ">
                                                <button  onClick={handleSubmit} className="border bg-purple-400 rounded w-20 h-8 hover:bg-purple-500">Save</button>
                                                <button  onClick={()=>setEdit(false)} className="border bg-purple-400 rounded w-20 h-8 hover:bg-purple-500">Cancel</button>
                                            </div>
                                            </div>
                                        ):(
                                        <div className="ml-98 mt-5">
                                        <button onClick={()=>setEdit(true)} className="border bg-purple-400 rounded w-20 h-8 hover:bg-purple-500 ">
                                            Edit
                                        </button>
                                        </div>
                                        )}
                               </div>
                            <hr className="h-2"/>
                            <form>
                             <div className="flex flex-col gap-5 p-5 ">
                                <div className="flex ">
                                    <div className="font-semibold text-lg">Username</div>
                                    <div className="ml-5">:</div>
                                    <input 
                                     type="text" 
                                     value={username} 
                                     onChange={(e) => setUserName(e.target.value)}
                                     className="text-lg ml-2  border bg-gray-100 text-center w-140 " />                               
                                </div>
                                <div className="flex  ">
                                    <div className="font-semibold text-lg">Email</div>
                                    <div className=" ml-14">:</div>
                                    <input
                                     type="text" 
                                     value={email}
                                     onChange={(e) => setEmail(e.target.value)} 
                                     className="text-lg ml-2  border bg-gray-100 text-center w-140" />                               
                                </div>
                                <div className="flex ">
                                    <div  className="font-semibold text-lg">Address</div>
                                    <div className="ml-9">:</div>
                                    <input 
                                     type="text" 
                                     value={address}
                                     onChange={(e) => setAddress(e.target.value)} 
                                     className="text-lg ml-2  border bg-gray-100 text-center w-140" />                               
                                </div>
                                <div className="flex gap-2">
                                    <div  className="font-semibold text-lg">Contact No</div>
                                    <div>:</div>
                                    <input 
                                     type="text" 
                                     value={contactNo}
                                     onChange={(e) => setContactNo(e.target.value)} 
                                     className="text-lg   border bg-gray-100 text-center w-140" />                               
                                </div>
                                <div className="text-red-500">
                                    {error}
                                </div>
                            </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile