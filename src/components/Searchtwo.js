import React, { useState, useEffect } from 'react';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

const Searchtwo = () => {
  const navigate = useNavigate();
  const [provinceOptions, setProvinceOptions] = useState([]);
  const countries = [
    {
      name: "Canada",
      provinces: ["Alberta", "British Columbia", "Ontario", "Quebec", "Manitoba", "Saskatchewan"],
    },
    {
      name: "USA",
      provinces: ["California", "Texas", "New York", "Florida", "Illinois", "Pennsylvania"],
    },
    {
      name: "UK",
      provinces: ["England", "Scotland", "Wales", "Northern Ireland"],
    },
    {
      name: "Australia",
      provinces: ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania"],
    },
    {
      name: "Germany",
      provinces: ["Bavaria", "North Rhine-Westphalia", "Baden-Württemberg", "Lower Saxony", "Hesse", "Saxony"],
    },
  ];
  useEffect(() => {
    // Fetch province options from your backend when the component mounts
    fetch('http://localhost:5000/provinces') // Assuming your backend is running on localhost:5000
      .then((response) => response.json())
      .then((data) => setProvinceOptions(data.provinces))
      .catch((error) => console.error('Error fetching provinces:', error));
  }, []);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedProvince('');
  };

  const handleProvinceChange = (selectedOption) => {
    setSelectedProvince(selectedOption);
  };

  const handleSubmit = () => {
    if (selectedProvince) {
      navigate(`/connection/peopledetails?province=${selectedProvince}`);
    } else {
      alert('Please select a province.');
    }
  };
  return (
    <div>
      <br />
      <div className="container mt-5">
        <h2 className='text-center'>Find Connections of your choice : </h2>
        <div className="mt-4 p-5 bg-primary rounded">
          <div className="app-container text-center">
            <Search
              label="Country"
              options={countries.map((country) => country.name)}
              onSubmit={handleCountryChange}
            />
            <Search
              label="Province"
              options={selectedCountry ? countries.find((country) => country.name === selectedCountry)?.provinces || [] : []}
              onSubmit={handleProvinceChange}
            />
            <button className="btn btn-dark" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchtwo;
