import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import data from '../Utils/database.json'
import 'react-datepicker/dist/react-datepicker.css';
const SearchPage = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [selectOption, setSelectOptions] = useState(null);
  const options = data.cities.map(city => ({
      value : city.code,
      label : city.city
  }))
  return (
    <div className='m-8'>
      <div className='flex  gap-40'>
        <div>
        <label className="block mb-1 font-semibold">Check-in Date</label>
        <Select className='w-120'
        value = {selectOption}
        onChange={setSelectOptions}
        options={options}
      />
        </div>
     <div>
        <label className="block mb-1 font-semibold">Check-in Date</label>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date)}
          className="border p-2 rounded-md"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Check-out Date</label>
        <DatePicker selected={checkOut} onChange={(date) => setCheckOut(date)}  className="border p-2 rounded-md"/>
      </div>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
        onClick={() => navigate('/result')}
      >
        Search
      </button>
    </div>
  )
}

export default SearchPage
