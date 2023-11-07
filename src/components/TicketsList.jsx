import React, { useContext } from 'react';
import { AppContext } from '../App';

const TicketsList = () => {
  const trains = useContext(AppContext);

  return (
    <div className="ticket-list bg-blue-100 grid rounded-lg p-8">
      <h2>Ticket List</h2>

      <table>
        <thead>
          <tr>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure Date</th>
            <th>Arrival Date</th>
            <th>Price</th>
            <th>Airline</th>
          </tr>
        </thead>

        <tbody>
          {trains.map((train) => (
            <tr key={train.id}>
              <td>{train.sourceStation}</td>
              <td>{train.destinationStation}</td>
              <td>{train.departureTime}</td>
              <td>{train.arrivalTime}</td>
              <td>{train.fare}</td>
              <td>Indian Railways</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsList;