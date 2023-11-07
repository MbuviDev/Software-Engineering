import React, { useContext } from 'react';
import { AppContext } from '../App';

const TrainSearch = () => {
  const trains = useContext(AppContext);

  return (
    <div>
      <h2>Search Trains</h2>

      <form>
        <label>Train Name:</label>
        <input type="text" />

        <label>Source Station:</label>
        <input type="text" />

        <label>Destination Station:</label>
        <input type="text" />

        <label>Journey Date:</label>
        <input type="date" />

        <button type="submit">Search</button>
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