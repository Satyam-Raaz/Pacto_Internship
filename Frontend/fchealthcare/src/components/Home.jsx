import { useNavigate } from "react-router"
import Header from "./Header";
import Footer from "./Footer";

function Home({token,onLogout,role}){
    const navigate=useNavigate();
    return(
        <div className="flex flex-col">
            <Header token={token} onLogout={onLogout} role={role}/>
            {/* Home Section */}
            <main>

                        <div className="flex p-5  justify-center h-20 shadow bg-purple-50">
                            <div className="h-full w-35 bg-white">
                                <select name="Location" id="" className="border h-full w-full  ">
                                    <option className="" value="Patna">Patna</option>
                                </select>
                            </div>
                            <div className="h-full w-120 bg-white">
                                <input type="text" className="border w-full h-full text-center" placeholder="Search doctors,clinics,hospitals,etc" />
                            </div>
                            <div className="h-full w-20 bg-white">
                                <button className="bg-blue-500 w-full h-full">search</button>
                            </div>
                        </div>          

                    

                <div className="flex flex-col mt-2 gap-10 p-5">   
                    <div className="flex gap-8 justify-center">

                        <div className="flex flex-col w-60 h-auto bg-purple-100 shadow rounded-lg transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                            <div className="p-2 ">
                                <img
                                 src="https://i.pinimg.com/736x/2f/63/5c/2f635cf35219c2607cd7a084da8999a7.jpg"
                                 className="w-full h-50 rounded-lg "
                                alt="" />
                            </div>
                            <div className="p-2 ">
                                <div className="text-center font-bold font-serif text-xl">Find Doctor Near You</div>
                                <div className="text-center font-semibold text-sm">
                                    <span>Confirmed appointments</span>
                              
                                </div>
                                <div className="mt-3">
                                    <p  className=" text-pretty text-center"></p>
                                </div>
                            </div>
                        </div>

                          <div className="flex flex-col w-60 h-auto bg-purple-100 shadow rounded-lg transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                            <div className="p-2 ">
                                <img
                                 src="https://arthdiagnostics.com/wp-content/uploads/2024/02/Arth-Diagnostics-Best-Diagnostics-Centre-in-Udaipur.jpg"
                                 className="w-full h-50 rounded-lg "
                                alt="" />
                            </div>
                            <div className="p-2">
                                <div className="text-center font-bold font-serif text-xl">CheckUp Your Health</div>
                                <div className="text-center font-semibold text-sm">
                                    <span>From best DiagnosticCenter</span>
                               
                                </div>
                                <div className="mt-3">
                                    <p  className=" text-pretty text-center"> </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-60 h-auto bg-purple-100 shadow rounded-lg transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                            <div className="p-2 ">
                                <img
                                 src="https://c8.alamy.com/comp/2C7A6FP/book-your-medical-appointment-online-using-a-mobile-app-doctor-sitting-at-desk-in-the-background-and-wearing-a-face-mask-2C7A6FP.jpg"
                                 className="w-full h-50 rounded-lg "
                                alt="" />
                            </div>
                            <div className="p-2">
                                <div className="text-center font-bold font-serif text-xl">Easy And Instant Booking</div>
                                <div className="text-center font-semibold text-sm">
                                    <span>In minimum cost and fastest booking</span>
                                    
                                </div>
                                <div className="mt-3">
                                    <p  className=" text-pretty text-center"></p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-60 h-auto bg-purple-100 shadow rounded-lg transition delay-150 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                            <div className="p-2 ">
                                <img
                                 src="https://cdn2.vectorstock.com/i/1000x1000/85/51/doctor-video-call-consultation-vector-27278551.jpg"
                                 className="w-full h-50 rounded-lg "
                                alt="" />
                            </div>
                            <div className="p-2">
                                <div className="text-center font-bold font-serif text-xl">Instant Video Consultation</div>
                                <div className="text-center font-semibold text-sm">
                                    <span>connect with in 60sec</span>
                                  
                                </div>
                                <div className="mt-3">
                                    <p  className=" text-pretty text-center"></p>
                                </div>
                            </div>
                        </div>


                    </div>  

                    <div className="flex ">
                        <div className="text-left md:text-center p-4 ">
                            <p className="mt-32 font-serif">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit odio doloribus sunt ut omnis nulla ab odit, ipsum aliquid? Obcaecati dolor fugiat voluptate recusandae facilis temporibus quas aut laboriosam optio.</p>
                        </div>
                        <div className="shadow">
                            <img src="https://www.remedieslabs.com/blog/wp-content/uploads/2022/06/10-things-to-know-before-selecting-a-diagnostic-center.jpg" 
                            className="rounded-lg h-100 w-300 p-4 shadow "
                            alt="img" />
                        </div>
                    </div>

                    <div className="flex ">
                        <div className="rounded-lg shadow">
                            <img src="https://assets.thehansindia.com/h-upload/2021/05/14/1076291-test.webp" 
                            className="rounded-lg h-100 w-300 p-4 shadow"
                            alt="img" />
                        </div>
                            <div className="text-right md:text-center p-4 ">
                                <p className="mt-32 font-serif ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit neque molestiae natus quae. Eaque suscipit quas sed officia? Eius iste labore dolores molestiae cupiditate voluptas ipsum excepturi eaque quaerat?</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 p-4 ">
                        <div >
                            <span className="text-4xl font-bold ">Consult top doctors online for any health concern</span> <br />
                            <span className="text-md font-semibold">Private online consultations with verified doctors in all specialists</span>
                        </div>

                        <div className="flex gap-2 mt-12 justify-center">
                            <div className="flex flex-col ">
                                <div>
                                <img 
                                src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" 
                                className="h-35  "
                                alt="" />
                                </div>

                                <div className="font-semibold text-center w-full ">
                                    <p className="text-center w-2/3">Periode doubt or Pregnancy</p>
                                </div>
                            
                            </div>

                            <div>
                               <div>
                                <img 
                                src="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png" 
                                className="h-35"
                                alt="" />
                                </div>

                                <div className="font-semibold w-full">
                                    <p className="text-center w-2/3">Acne ,Pimple or Skin Issue</p>
                                </div>
                            </div>

                            <div>
                              <div>
                                <img 
                                src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg" 
                                className="h-35"
                                alt="" />
                                </div>

                                <div className="font-semibold w-full">
                                    <p className="text-center w-2/3">Performance issues in bed</p>
                                </div>
                            </div>

                            <div>
                              <div>
                                <img 
                                src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png" 
                                className="h-35"
                                alt="" />
                                </div>

                                <div className="font-semibold w-full ">
                                    <p className="text-center w-2/3">Cold,cough or fever</p>
                                </div>
                            </div>

                            <div className="ml-12">
                             <div >
                                <img 
                                src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg" 
                                className="h-35"
                                alt="" />
                                </div>

                                <div className="font-semibold w-full ">
                                    <p className="text-center w-2/3">Child not feeling well</p>
                                </div>
                            </div>

                            <div className="ml-12"> 
                              <div >
                                <img 
                                src="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png" 
                                className="h-35"
                                alt="" />
                                </div>

                                <div className="font-semibold w-full">
                                    <p className="text-center w-2/3">Depression or anxiety</p>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center h-50 w-150 ml-110 mt-12 shadow">
                        <div className="text-4xl font-serif font-bold text-center">What our users have to say</div>
                        <div className="mt-5">
                            <p className="font-semibold text-xl text-center">Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.</p>
                        </div>

                    </div>

                </div>
                
                <div className=" flex bg-gradient-to-r  from-blue-500 to-purple-500 text-white h-100 w-full p-5 justify-center gap-20">
                    <div className="flex flex-col gap-1  ">
                        <div className="font-bold text-2xl mb-2"> Practo</div>
                        <div>About Us</div>
                        <div>Service</div>
                        <div>Contact Us</div>
                    </div> 

                    <div className="flex flex-col gap-1  " >
                        <div className="font-bold text-2xl mb-2">For Patients</div>
                        <div>Search For Doctors</div>
                        <div>Search For Clinics</div>
                        <div>Search For Diagnostic Center</div>
                        <div>Read Health Article</div>
                    </div> 
                    
                    <div className="flex flex-col gap-1  ">
                        <div className="font-bold text-2xl mb-2">More</div>
                        <div>Help</div>
                        <div>Developers</div>
                        <div>Privacy Policy</div>
                        <div>Terms & Conditions</div>
                        <div>HealthCare Directory</div>
                    </div> 

                    <div className="flex flex-col gap-1  ">
                        <div className="font-bold text-2xl mb-2">Social Media</div>
                        <div>WhatsApp</div>
                        <div>Facebook</div>
                        <div>Instagram</div>
                        <div>Youtube</div>
                        <div>GitHub</div>
                    </div> 
                 </div>

                
            </main>

            <Footer/>





        </div>
    )
}

export default Home