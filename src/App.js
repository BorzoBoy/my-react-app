import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [airFryerCost, setAirFryerCost] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, phoneNumber, email, airFryerCost, pin });
  };

  return (
    <div className="App">
      <div className="form-container">
        <h2 className="contact-heading">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="label">First Name</div>
            <input
              className="input"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <div className="label">Last Name</div>
            <input
              className="input"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <div className="label">Phone Number</div>
            <input
              className="input"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <div className="label">Email Address</div>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <div className="label">Guess the Air Fryer's Cost</div>
            <input
              className="input"
              type="number"
              placeholder="$"
              value={airFryerCost}
              onChange={(e) => setAirFryerCost(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <div className="label">Enter 16-digit Spidr PIN</div>
            <input
              className="input"
              type="text"
              placeholder="####-####-####-####"
              pattern="\d{4}-\d{4}-\d{4}-\d{4}"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </div>
          <div className="button-container">
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;