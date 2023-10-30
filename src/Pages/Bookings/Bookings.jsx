import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, {withCredentials: true})
    .then(res=> {
      setBookings(res.data)
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url]);

  
  const handleDelete = id =>{
    const proceed = confirm('are you sure you want to delete?')
    if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('successfull')
                const remaining = bookings.filter(booking => booking._id !== id)
                setBookings(remaining)
            }
        })
    }
}

const handleBookingConfirm = id =>{
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: "PATCH",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            // update state
            const remainig = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking=> booking._id === id);
            updated.status= 'confirm'
            const newBooking =[updated, ...remainig];
            setBookings(newBooking)
        }
    })
}
  return (
    <div>
      <h2 className="text-5xl">Your Booking: {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {
            bookings.map(booking=> <BookingsRow key={booking._id} booking={booking} handleDelete={handleDelete}handleBookingConfirm={handleBookingConfirm}></BookingsRow>)
          }
           
         
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
