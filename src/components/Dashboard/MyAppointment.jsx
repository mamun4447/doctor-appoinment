import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthPrvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings);
  return (
    <div>
      <h1 className="text-4xl mb-8">My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table w-full mb-10">
          <thead>
            <tr>
              <th></th>
              <th>Treatment</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id} className="hover">
                {/* {console.log(booking)} */}
                <th>{i + 1}</th>
                <td>{booking.treatment}</td>
                <td>{booking.slot}</td>
                <td>{booking.appointmentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
