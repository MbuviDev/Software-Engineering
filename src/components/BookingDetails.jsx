import React, { useState, useContext } from 'react';
import { AppContext } from '../App';

const BookingDetails = () => {
  const trains = useContext(AppContext);

  const [passengers, setPassengers] = useState([]); // Define passengers state variable

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPassenger = {
      name: 'Passenger Name',
      age: 'Passenger Age',
      gender: 'Passenger Gender',
    };

    setPassengers([...passengers, newPassenger]); // Use setPassengers to update state

    // Process payment and generate e-ticket
  };

  const handleCancel = (passengerIndex) => {
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
 
onClick={() => handleCancel}>Cancel</button>
        <button type="submit">Book Ticket</button>
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
          {trains.map((train) => (
            <tr key={train.id}>
              <td>{train.name}</td>
              <td>{train.sourceStation}</td>
              <td>{train.destinationStation}</td>
              <td>{train.departureTime}</td>
              <td>{train.arrivalTime}</td>
              <td>{train.fare}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDetails;