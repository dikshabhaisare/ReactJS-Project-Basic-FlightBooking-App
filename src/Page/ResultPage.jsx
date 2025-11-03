import React, { useState } from 'react';
import data2 from '../Utils/database.json';

const ResultPage = () => {
  const flightDataa = data2.flights || [];
  const [price, setPrice] = useState('');
  const [flightData,setFlightData] = useState(flightDataa)
  const handleSubmit = (e) => {
        e.preventDefault()
        if(price === ""){
          setFlightData(flightData);
        }else{
          const filtered = flightData.filter((item) => 
             item.price <= parseInt(price)
        );
        setFlightData(filtered)
      }
    }
  return (
    <div className="m-6">
      <form action="" onSubmit={handleSubmit}>
        <input className='border-b-black border-2 rounded' type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter Price'/>
        <button type='submit' className='ml-10'>Filter Price</button>
      </form>
      <h2 className="text-2xl font-bold mb-4">Available Flights</h2>
      {flightData.length === 0 ? (
        <p>No flights found.</p>
      ) : (
        flightData.map((item, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg mb-4 shadow-md bg-white hover:shadow-lg transition-shadow"
          >
            <h2 className="font-semibold text-xl">{item.name}</h2>
            <p>From: {item.from}</p>
            <p>To: {item.to}</p>
            <p>Departure: {item.departure}</p>
            <p>Arrival: {item.arrival}</p>
            <p>Price: ₹{item.price}</p>
            <p>Stops: {item.stops}</p>
            <p>Rating: {item.rating}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ResultPage;
