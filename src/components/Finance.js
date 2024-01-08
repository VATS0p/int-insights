import React, { useState } from 'react';
import './Finance.css'; // Make sure you have an App.css file for styling

const countriesData = [
  {
    name: 'United Kingdom',
    livingExpense: '$2,500 per month',
    otherCost: '$1,000 per month',
    flag: '/photos/uk-flag.png', // Replace with the actual file path for the UK flag
  },
  {
    name: 'United States',
    livingExpense: '$3,000 per month',
    otherCost: '$1,200 per month',
    flag: '/photos/usa-flag.png', // Replace with the actual file path for the USA flag
  },
  {
    name: 'Australia',
    livingExpense: '$2,800 per month',
    otherCost: '$1,100 per month',
    flag: '/photos/australia-flag.png', // Replace with the actual file path for the Australia flag
  },
  {
    name: 'Germany',
    livingExpense: '$2,200 per month',
    otherCost: '$900 per month',
    flag: '/photos/germany-flag.png', // Replace with the actual file path for the Germany flag
  },
  {
    name: 'Canada',
    livingExpense: '$2,600 per month',
    otherCost: '$1,050 per month',
    flag: '/photos/canada-flag.png', // Replace with the actual file path for the Canada flag
  },
];

const citiesData = {
  canada: [
    {
      name: 'Toronto',
      population: '2.8 million',
      description: 'Canada\'s largest city with a diverse cultural scene.',
      averageRent: '$2,200 per month for a one-bedroom apartment',
      groceries: 'Approximately $300 to $400 per month',
      transportation: '$150 per month (public transit)',
      utilities: '$100 to $150 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/toronto.jpg',
    },
    {
      name: 'Vancouver',
      population: '631,486',
      description: 'Located on the west coast with stunning natural beauty.',
      averageRent: '$2,500 per month for a one-bedroom apartment',
      groceries: 'Approximately $300 to $400 per month',
      transportation: '$98 per month (public transit)',
      utilities: '$120 to $150 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/vancouver.jpg',},
    {
      name: 'Montreal',
      population: '1.7 million',
      description: 'Known for its French influence and vibrant arts scene.',
      averageRent: '$1,200 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $300 per month',
      transportation: '$85 per month (public transit)',
      utilities: '$80 to $100 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/montreal.jpg',},
    {
      name: 'Calgary',
      population: '1.2 million',
      description: 'Famous for the Calgary Stampede and its cowboy culture.',
      averageRent: '$1,300 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $300 per month',
      transportation: '$97 per month (public transit)',
      utilities: '$100 to $150 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/calgary.jpg',},
    {
      name: 'Ottawa',
      population: '934,243',
      description: 'The capital of Canada known for its historic architecture.',
      averageRent: '$1,400 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $300 per month',
      transportation: '$96 per month (public transit)',
      utilities: '$100 to $140 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/ottawa.jpg',},
    {
      name: 'Edmonton',
      population: '981,280',
      description: 'Alberta\'s capital with a strong economy.',
      averageRent: '$1,200 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $300 per month',
      transportation: '$97 per month (public transit)',
      utilities: '$90 to $120 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/edmonton.jpg',},
    {
      name: 'Winnipeg',
      population: '749,534',
      description: 'Known for its cultural festivals and historic sites.',
      averageRent: '$1,000 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $300 per month',
      transportation: '$81 per month (public transit)',
      utilities: '$90 to $120 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/winnipeg.jpg',},
    {
      name: 'Quebec City',
      population: '541,902',
      description: 'The capital of Quebec with a rich history.',
      averageRent: '$900 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $300 per month',
      transportation: '$86 per month (public transit)',
      utilities: '$80 to $110 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/quebec.jpg',},
  ],
  australia: [
    {
      name: 'Sydney',
      population: '5.3 million',
      description: 'Australia\'s largest city with iconic landmarks.',
      averageRent: '$2,000 per month for a one-bedroom apartment',
      groceries: 'Approximately $300 to $500 per month',
      transportation: '$100 per month (public transit)',
      utilities: '$100 to $150 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/sydney.jpg',},
    {
      name: 'Melbourne',
      population: '5.1 million',
      description: 'Known for its art, culture, and diverse cuisine.',
      averageRent: '$1,800 per month for a one-bedroom apartment',
      groceries: 'Approximately $250 to $450 per month',
      transportation: '$90 per month (public transit)',
      utilities: '$80 to $120 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/melbourne.jpg', },
    {
      name: 'Brisbane',
      population: '2.2 million',
      description: 'A vibrant city in Queensland with a subtropical climate.',
      averageRent: '$1,500 per month for a one-bedroom apartment',
      groceries: 'Approximately $250 to $400 per month',
      transportation: '$100 per month (public transit)',
      utilities: '$80 to $120 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/brisbane.jpg',},
    {
      name: 'Perth',
      population: '2.1 million',
      description: 'Located on the west coast of Australia with beautiful beaches.',
      averageRent: '$1,400 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $350 per month',
      transportation: '$80 per month (public transit)',
      utilities: '$70 to $110 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/perth.jpg',},
    {
      name: 'Adelaide',
      population: '1.3 million',
      description: 'Known for its wine regions and Mediterranean climate.',
      averageRent: '$1,200 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $350 per month',
      transportation: '$60 per month (public transit)',
      utilities: '$70 to $100 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/adelaide.jpg',},
    {
      name: 'Canberra',
      population: '431,380',
      description: 'The capital of Australia located between Sydney and Melbourne.',
      averageRent: '$1,300 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $350 per month',
      transportation: '$50 per month (public transit)',
      utilities: '$70 to $100 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/canberra.jpg',},
    {
      name: 'Hobart',
      population: '239,199',
      description: 'Tasmania\'s capital with stunning natural landscapes.',
      averageRent: '$1,100 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $350 per month',
      transportation: '$40 per month (public transit)',
      utilities: '$60 to $90 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/hobart.jpg',},
    {
      name: 'Darwin',
      population: '147,255',
      description: 'The capital of the Northern Territory with a tropical climate.',
      averageRent: '$1,200 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $350 per month',
      transportation: '$50 per month (public transit)',
      utilities: '$70 to $100 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/darwin.jpg',},

  ],
  usa: [
    {
      name: 'New York City',
      population: '8.4 million',
      description: 'The city that never sleeps with a rich cultural scene.',
      averageRent: '$3,000 per month for a one-bedroom apartment',
      groceries: 'Approximately $400 to $600 per month',
      transportation: '$130 per month (public transit)',
      utilities: '$150 to $200 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/new york.jpg',},
    {
      name: 'Los Angeles',
      population: '3.9 million',
      description: 'Famous for the entertainment industry and beautiful beaches.',
      averageRent: '$2,400 per month for a one-bedroom apartment',
      groceries: 'Approximately $300 to $500 per month',
      transportation: '$100 per month (public transit)',
      utilities: '$100 to $150 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/los angeles.jpg',},
    {
      name: 'Chicago',
      population: '2.7 million',
      description: 'Known for its architecture and vibrant music scene.',
      averageRent: '$1,800 per month for a one-bedroom apartment',
      groceries: 'Approximately $250 to $450 per month',
      transportation: '$100 per month (public transit)',
      utilities: '$80 to $120 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/chicago.jpg',},
    {
      name: 'Houston',
      population: '2.3 million',
      description: 'The largest city in Texas with a strong economy.',
      averageRent: '$1,300 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $350 per month',
      transportation: '$80 per month (public transit)',
      utilities: '$80 to $120 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/houston.jpg',},
    {
      name: 'Philadelphia',
      population: '1.6 million',
      description: 'Historically significant city with a rich colonial heritage.',
      averageRent: '$1,400 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $350 per month',
      transportation: '$90 per month (public transit)',
      utilities: '$80 to $120 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/philadelphia.jpg',},
    {
      name: 'Phoenix',
      population: '1.7 million',
      description: 'Arizona\'s capital with a desert climate.',
      averageRent: '$1,200 per month for a one-bedroom apartment',
      groceries: 'Approximately $200 to $350 per month',
      transportation: '$70 per month (public transit)',
      utilities: '$70 to $100 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/phoenix.jpg',},
    {
      name: 'San Francisco',
      population: '883,305',
      description: 'Known for the Golden Gate Bridge and tech industry.',
      averageRent: '$2,800 per month for a one-bedroom apartment',
      groceries: 'Approximately $300 to $500 per month',
      transportation: '$100 per month (public transit)',
      utilities: '$80 to $120 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/san francisco.jpg', },
    {
      name: 'Boston',
      population: '694,583',
      description: 'A historic city with prestigious universities.',
      averageRent: '$2,300 per month for a one-bedroom apartment',
      groceries: 'Approximately $250 to $450 per month',
      transportation: '$90 per month (public transit)',
      utilities: '$80 to $120 per month (electricity, heating, cooling, water, and garbage)',
      photo: '/photos/boston.jpg',},
],
uk: [
  {
    name: 'London',
    population: '8.9 million',
    description: 'The capital of the United Kingdom with a rich history.',
    averageRent: '£1,600 per month for a one-bedroom apartment',
    groceries: 'Approximately £200 to £400 per month',
    transportation: '£140 per month (public transit)',
    utilities: '£120 to £180 per month (electricity, heating, cooling, water, and garbage)',
    photo: '/photos/london.jpg',},
  {
    name: 'Manchester',
    population: '547,627',
    description: 'A city in northern England with a strong industrial heritage.',
    averageRent: '£900 per month for a one-bedroom apartment',
    groceries: 'Approximately £150 to £300 per month',
    transportation: '£70 per month (public transit)',
    utilities: '£80 to £120 per month (electricity, heating, cooling, water, and garbage)',
    photo: '/photos/manchester.jpg',},
  {
    name: 'Birmingham',
    population: '1.1 million',
    description: 'The second-largest city in the UK known for its diverse culture.',
    averageRent: '£850 per month for a one-bedroom apartment',
    groceries: 'Approximately £150 to £300 per month',
    transportation: '£60 per month (public transit)',
    utilities: '£70 to £110 per month (electricity, heating, cooling, water, and garbage)',
    photo: '/photos/birmingham.jpg',},
  {
    name: 'Glasgow',
    population: '621,020',
    description: 'Scotland\'s largest city with a vibrant arts scene.',
    averageRent: '£750 per month for a one-bedroom apartment',
    groceries: 'Approximately £150 to £300 per month',
    transportation: '£60 per month (public transit)',
    utilities: '£70 to £110 per month (electricity, heating, cooling, water, and garbage)',
    photo: '/photos/glasgow.jpg',},
  // Add more cities in the UK here
],
germany: [
  {
    name: 'Berlin',
    population: '3.6 million',
    description: 'Germany\'s capital known for its history and arts.',
    averageRent: '€1,200 per month for a one-bedroom apartment',
    groceries: 'Approximately €200 to €400 per month',
    transportation: '€80 per month (public transit)',
    utilities: '€150 to €200 per month (electricity, heating, cooling, water, and garbage)',
    photo: '/photos/berlin.jpg',},
  {
    name: 'Munich',
    population: '1.5 million',
    description: 'Known for its beer gardens and Bavarian culture.',
    averageRent: '€1,500 per month for a one-bedroom apartment',
    groceries: 'Approximately €200 to €350 per month',
    transportation: '€70 per month (public transit)',
    utilities: '€120 to €160 per month (electricity, heating, cooling, water, and garbage)',
    photo: '/photos/munich.jpg',},
  {
    name: 'Hamburg',
    population: '1.8 million',
    description: 'A major port city with a maritime history.',
    averageRent: '€1,200 per month for a one-bedroom apartment',
    groceries: 'Approximately €200 to €350 per month',
    transportation: '€80 per month (public transit)',
    utilities: '€100 to €150 per month (electricity, heating, cooling, water, and garbage)',
    photo: '/photos/hamburg.jpg',},
  {
    name: 'Cologne',
    population: '1.1 million',
    description: 'Famous for its cathedral and historic architecture.',
    averageRent: '€1,000 per month for a one-bedroom apartment',
    groceries: 'Approximately €200 to €350 per month',
    transportation: '€70 per month (public transit)',
    utilities: '€80 to €120 per month (electricity, heating, cooling, water, and garbage)',
    photo: '/photos/cologne.jpg',},
  {
    name: 'Frankfurt',
    population: '753,056',
    description: 'A financial hub and transportation center in Germany.',
    averageRent: '€1,200 per month for a one-bedroom apartment',
    groceries: 'Approximately €200 to €350 per month',
    transportation: '€80 per month (public transit)',
    utilities: '€100 to €150 per month (electricity, heating, cooling, water, and garbage)',
  photo: '/photos/philadelphia.jpg',},
  {
    name: 'Stuttgart',
    population: '635,911',
    description: 'Known for its automobile industry and green spaces.',
    averageRent: '€1,100 per month for a one-bedroom apartment',
    groceries: 'Approximately €200 to €350 per month',
    transportation: '€70 per month (public transit)',
    utilities: '€80 to €120 per month (electricity, heating, cooling, water, and garbage)',
    photo: '/photos/stuttgart.jpg', },
  ], // Added the missing closing brace
};
const dropdownStyles = {
  select: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    background: 'white',
    cursor: 'pointer',
    textAlign: 'center',
    color: 'black', // Change the text color
    backgroundColor: 'lightgrey', // Change the background color
    // Add any other styles as needed
  },
};

function Finance() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('canada');

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
    
    <div className="rpp">
      <h1 className="ya">Living Expenses and Other Costs</h1>
      <div className="ccard-sontainer">
        {countriesData.map((country, index) => (
          <div
            className={`ccard ${isFlipped ? 'flipped' : ''}`}
            key={index}
            onClick={handleCardClick}
          >
            <div className="ccard-inner">
              <div className="ccard-front">
                <img
                  src={country.flag}
                  alt={`${country.name} Flag`}
                  className="flag"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100px',
                  }}
                />
                <h2 className="yo">{country.name}</h2>
              </div>
              <div className="ccard-back">
                <h2 className="yo">{country.name}</h2>
                <p className="pa">Living Expense: {country.livingExpense}</p>
                <p className="pa">Other Costs: {country.otherCost}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="section-separator"></div>
      <div className="section">
        <h1 className="ya">City Information</h1>
        <div>
          <label htmlFor="country">Select a country:</label>
          <select
            id="country"
            onChange={handleCountryChange}
            value={selectedCountry}
            style={dropdownStyles.select} // Apply the dropdown styles here
          >
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
          </select>
        </div>
        <h2 className="yo">Cities in {selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1)}</h2>
        <div className="city-boxes">
          {citiesData[selectedCountry].map((city, index) => (
            <div key={index} className="city-box">
              <img
                src={city.photo}
                alt={`${city.name} Photo`}
                className="city-photo"
                style={{
                  maxWidth: '100%',
                  maxHeight: '350px',
                }}
              />
              <div className="city-info">
                <h3>{city.name}</h3>
                <p className="pa">Population: {city.population}</p>
                <p className="pa"> Description: {city.description}</p>
              </div>
              <div className="cost-of-living-box">
                <h4>Cost of Living</h4>
                <ul>
                  <li>Average Rent: {city.averageRent}</li>
                  <li>Groceries: {city.groceries}</li>
                  <li>Transportation: {city.transportation}</li>
                  <li>Utilities: {city.utilities}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Finance;