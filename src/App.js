// import './App.css';

// function App() {
//   return (
//     <div className="App">
    
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from
 
'react';
import axios from
 
'axios';
import { BrowserRouter, Route, Routes, Link } from
 
'react-router-dom';

import TrainSearch from './components/TrainSearch';
import BookingDetails from './components/BookingDetails';
import TicketsList from './components/TicketsList';

const App = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('/api/trains')
      .then(response => setTrains(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Railway Reservation System</h1>

      <nav>
        <Link to="/">Search Trains</Link>
        <Link to="/booking">Booking Details</Link>
        <Link to="/tickets">Tickets</Link>
      </nav>

      <Routes>
        <Route path="/" exact element={<TrainSearch trains={trains} />} />
        <Route path="/booking" exact element={<BookingDetails />} />
        <Route path="/tickets" exact element={<TicketsList />} />
      </Routes>
    </div>
  );
};

export default App;