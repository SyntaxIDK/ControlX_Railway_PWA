import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Railway Booking</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/trains">Trains</a></li>
          <li><a href="/bookings">Bookings</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;