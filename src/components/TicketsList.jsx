import React from 'react';

const TicketsList = ({ tickets }) => {
  return (
    <div className="ticket-list">
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
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.origin}</td>
              <td>{ticket.destination}</td>
              <td>{ticket.departureDate}</td>
              <td>{ticket.arrivalDate}</td>
              <td>{ticket.price}</td>
              <td>{ticket.airline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsList;