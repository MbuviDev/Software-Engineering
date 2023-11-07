import React, { useContext } from 'react';
import { AppContext } from '../App';

const TrainSearch = () => {
  const trains = useContext(AppContext);

  const trainNames = ['Rajdhani Express', 'Shatabdi Express', 'Duronto Express', 'Vande Bharat Express', 'Tejas Express'];
  const sourceStations = ['Nairobi Railway Station', 'Machakos Railway Station', 'Kiambu Railway Station', 'Wajir Railway Station', 'Mombasa Railway Station'];
  const destinationStations = ['Nairobi Railway Station', 'Machakos Railway Station', 'Kiambu Railway Station', 'Wajir Railway Station', 'Mombasa Railway Station'];

  return (
    <div className='p-6 bg-blue-100 rounded-lg grid'>
      <h2 className='font-serif text-2xl '>Search Trains</h2><br></br>

      <form className='text-xl font-serif gap-4'> 
        <label>Train Name:</label>
        <select>
          <option value="">Select Train</option>
          {trainNames.map((trainName) => (
            <option key={trainName} value={trainName}>{trainName}</option>
          ))}
        </select>

        <label>Source Station:</label>
        <select>
          <option value="">Select Source Station</option>
          {sourceStations.map((sourceStation) => (
            <option key={sourceStation} value={sourceStation}>{sourceStation}</option>
          ))}
        </select>

        <label>Destination Station:</label>
        <select>
          <option value="">Select Destination Station</option>
          {destinationStations.map((destinationStation) => (
            <option key={destinationStation} value={destinationStation}>{destinationStation}</option>
          ))}
        </select>

        <label>Journey Date:</label>
        <input type="date" />

        <button type="submit" className='bg-blue-400 rounded-lg px-2' >Submit</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Source Station</th>
            <th>Destination Station</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Fare</th>
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

export default TrainSearch;
