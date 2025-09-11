import Header from "./Header"
import Footer from "./Footer";
import { useState,useEffect } from "react";
import { apiRequest } from "../api.jsx";


function BookingList({token,onLogout,id}){
      const [bookinglist, setBookinglist] = useState([]);
      const [list, setList] = useState([]);


      const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");    

      const fetchBookingDetails = async () => {
        setLoading(true);
        setError("");
        try {
          const data2  = await apiRequest(`/diagnostic/user/getBookingDetails/${id}`, "GET", null, token);
          setList(data2);
          console.log(data2);
        } catch (err) {
          setError("Failed " + err.message);
        }
        setLoading(false);
      };
      useEffect(() => {
        fetchBookingDetails();
      },[]);


    return(
        <div>
            <Header token={token} onLogout={onLogout}/>
                  <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-700">
        <span>🕓</span> Booking List
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl shadow-lg border border-gray-100">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-4 py-3 text-left">Test Name</th>
              <th className="px-4 py-3 text-left">Lab</th>
              <th className="px-4 py-3 text-left">Slot</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">Username</th>
            </tr>
          </thead>
          <tbody>
            {list.map((booking, idx) => (
              <tr
                key={booking.id}
                className={`border-t transition hover:bg-blue-50 ${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-3 font-semibold">
                  <span className="inline-flex items-center gap-2">
                    <span className="text-blue-500">{booking.testName}</span>{" "}
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold">
                  <span className="inline-flex items-center gap-2">
                    <span className="text-green-500">{booking.centerName}</span>{" "}
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold text-yellow-700">
                  {booking.slot}
                </td>
                <td className="px-4 py-3">
                  <span
                  >
                    {booking.address}
                  </span>
                </td>
                <td className="px-4 py-3 flex items-center gap-2 text-purple-500 font-bold text-xl">
                  <span>{booking.username}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

        </div>
    )
}

export default BookingList