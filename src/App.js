import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import TrainSearch from './components/TrainSearch';
import BookingDetails from './components/BookingDetails';
import TicketsList from './components/TicketsList';

export const AppContext = React.createContext();

export default function App () {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('/api/trains')
      .then(response => setTrains(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="bg-gray-200 h-screen p-8 rounded-lg"> 
    <AppContext.Provider value={trains}>
      <Router>
        <div className='bg-white p-8'>
          <h1 className='font-sans text-3xl flex '>Railway Reservation System</h1> <br></br>

          <nav className=' gap-20 flex justify-center text-xl text-blue-500 content-center' >
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
    </div>
  );
};

