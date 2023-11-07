import React, { useState, useEffect } from
 
'react';
import axios from
 
'axios';
import { BrowserRouter as Router, Routes, Route, Link } from
 
'react-router-dom';

import TrainSearch from './components/TrainSearch';
import BookingDetails from './components/BookingDetails';
import TicketsList from './components/TicketsList';

export const AppContext = React.createContext();

const App = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('/api/trains')
      .then(response => setTrains(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <AppContext.Provider value={trains}>
      <Router>
        <div>
          <h1>Railway Reservation System</h1>

          <nav>
            <Link to="/">Search Trains</Link>
            <Link to="/booking">Booking Details</Link>
            <Link to="/tickets">Tickets</Link>
          </nav>

          <Routes>
            <Route path="/" exact element={<TrainSearch />} />
            <Route path="/booking" exact element={<BookingDetails />} />
            <Route path="/tickets" exact element={<TicketsList />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;