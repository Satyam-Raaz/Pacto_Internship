import { useState } from "react";
import { useNavigate } from "react-router"



function Header({token,onLogout,role}) {
    const navigate=useNavigate();
    const [showProfile,setShowProfile]=useState(false);

    return (
        <div className="flex flex-col ">
            <header className="bg-gradient-to-r  from-blue-500 to-purple-500 text-white">
            <div className="flex  w-full h-15 justify-between items-center gap-50">
                <div className=" w-350 ">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Practo_New_Logo.png" 
                  className="w-25 h-10 mt-1 ml-5" 
                  alt="Logo" />
                </div>
                 <div className="mx-auto container flex gap-10 ml-10 ">
                    {role==="USER" ?(
                        <div className="mx-auto container flex gap-10 ml-10">
                    <div ><button className="hover:text-black  hover:underline font-semibold text-lg " onClick={()=>navigate("/home")}>Home</button></div>
                    <div ><button className="hover:text-black  hover:underline font-semibold text-lg " onClick={()=>navigate("/diagnostics")}>Book Tests</button></div>
                    <div ><button className="hover:text-black  hover:underline font-semibold text-lg" onClick={()=>navigate("/clinics")}>Find Doctors</button></div>
                    <div><button className="hover:text-black hover:underline font-semibold text-lg" onClick={()=>navigate("/about")}>About Us</button></div>
                        </div>
                    ):role==="admin"?(
                     <div className="mx-auto container flex gap-10 ml-10">
                    <div ><button className="hover:text-black  hover:underline font-semibold text-lg " onClick={()=>navigate("/home")}>Home</button></div>
                    <div ><button className="hover:text-black  hover:underline font-semibold text-lg " onClick={()=>navigate("/addTest")}>Add Test</button></div>
                    <div ><button className="hover:text-black  hover:underline font-semibold text-lg" onClick={()=>navigate("/addDoctor")}>Add Doctors</button></div>
                    <div><button className="hover:text-black hover:underline font-semibold text-lg" onClick={()=>navigate("/about")}>About Us</button></div>
                        </div>
                    ):(
                     <div className="mx-auto container flex gap-10 ml-10">
                    <div ><button className="hover:text-black  hover:underline font-semibold text-lg " onClick={()=>navigate("/home")}>Home</button></div>
                    <div ><button className="hover:text-black  hover:underline font-semibold text-lg " onClick={()=>navigate("/diagnostics")}>Book Tests</button></div>
                    <div ><button className="hover:text-black  hover:underline font-semibold text-lg" onClick={()=>navigate("/clinics")}>Find Doctors</button></div>
                    <div><button className="hover:text-black hover:underline font-semibold text-lg" onClick={()=>navigate("/about")}>About Us</button></div>
                        </div>

                    )}
                 </div>

                {!token && (
                    <div className= "flex-1 text-right  mr-6  ">
                    <button
                    className="border border-black w-28 hover:text-blue-400 h-8 rounded text-semibold " onClick={()=>navigate('/login')}>Login/Signup</button>
                </div>
                )}

                {token && (
                 <div className="mr-10 mt-2 ">
                    <button onClick={()=>setShowProfile(true)}>
                        <img 
                        src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" 
                        className="w-26 h-8 rounded-full border object-cover mx-auto md:mx-0  md:mb-0" 
                        alt="profile" />
                    </button>
                 </div>
                )}

            </div>
            </header>

                        {showProfile &&(
              <div className="fixed inset-0  bg-opacity-40 flex flex-row-reverse items-center mb-105  z-50">
                <div className="rounded-xl p-8 w-full max-w-md relative">
                    <div className="flex flex-col bg-white h-49 w-70 mx-34 rounded-lg">
                        <div className="p-5 border rounded font-semibold hover:bg-gray-200">
                            <button onClick={()=> navigate("/profile")}>
                                Profile
                            </button>
                        </div>
                        <div className="p-5 border rounded font-semibold hover:bg-gray-200">
                            {role==="USER"?(
                            <button onClick={()=>navigate("/bookinglist")}>
                                Booking Details
                            </button>
                            ):(
                            <button onClick={()=>navigate("/editContent")}>
                                Edit Your Content
                            </button>
                            )}
                        </div >
                        <div className="p-5 border rounded font-semibold hover:bg-gray-200">
                            <button  onClick={onLogout} >
                                Logout
                            </button>
                        </div>
                    </div>
                  <button className='absolute top-2 right-2 text-gray-900 bg-white rounded-full w-8 h-8 flex items-center justify-center text-2xl'
                    onClick={()=>setShowProfile(false)}>X
                  </button>
                </div>
              </div>
            )}


        </div>
    )
}
export default Header