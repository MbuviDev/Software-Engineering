import React, { useState } from 'react';

const BookingDetails = () => {
  const [passengers, setPassengers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPassenger = {
      name: 'Passenger Name',
      age: 'Passenger Age',
      gender: 'Passenger Gender',
    };

    setPassengers([...passengers, newPassenger]);

    // Process payment and generate e-ticket
  };

  const handleCancel = (passengerIndex) => { // Pass passenger index as argument
    const updatedPassengers = [...passengers];
    updatedPassengers.splice(passengerIndex, 1);
    setPassengers(updatedPassengers);
  };

  return (
    <div>
      <h2>Booking Details</h2>

      <form onSubmit={handleSubmit}>
        <label>Passenger Name:</label>
        <input type="text" />

        <label>Passenger Age:</label>
        <input type="number" />

        <label>Passenger Gender:</label>

        
<select>

          
<option
 
value="male">Male</option>

          
<option
 
value="female">Female</option>

          
<option
 
value="other">Other</option>

        
</select>


        
<button
 
type="button"
 
onClick={() => handleCancel(index)}>Cancel</button>  <button type="submit">Book Ticket</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {passengers.map((passenger, index) => (
            <tr key={passenger.id}>
              <td>{passenger.name}</td>
              <td>{passenger.age}</td>
              <td>{passenger.gender}</td>
              <td>
                <button type="button" onClick={() => handleCancel(index)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDetails;