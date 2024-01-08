import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ProCounDetails.module.css';
import PersonInfo from './PersonInfo'; // Import the PersonInfo component

const ProCounDetails = () => {
  const location = useLocation();
  const [provinceData, setProvinceData] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null); // State to track the selected person

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const selectedProvince = searchParams.get('province');

    fetch(`http://localhost:5000/api/details?province=${selectedProvince}`)
      .then((response) => response.json())
      .then((data) => setProvinceData(data))
      .catch((error) => console.error('Error fetching province data:', error));
  }, [location.search]);

  if (!provinceData) {
    return <div>Loading...</div>;
  }

  // Function to handle viewing a person's profile
  const onShowInfo = (person) => {
    setSelectedPerson(person); // Set the selected person when the button is clicked
  };

  const onCloseInfo = () => {
    setSelectedPerson(null); // Close the profile
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h2 className={styles.networkHeading}>Discover Your Network</h2>
      <div className={styles.gridContainer}>
        {provinceData.slice(0, 4).map((person, index) => (
          <div key={index} className={styles.personCard}>
            <div className={styles.imageContainer}>
              <img src={require(`./images/${person.image}`)} alt={person.name} className={styles.image} />
            </div>
            <div className={styles.details}>
              <h3 className={styles.name}>{person.name}</h3>
              <p className={styles.province}>{person.province}</p>
              <p className={styles.country}>{person.country}</p>
              <p className={styles.university}>{person.collegeName}</p>
              <button className={`btn ${styles.button}`} onClick={() => onShowInfo(person)}>
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Display the PersonInfo component if a person is selected */}
      {selectedPerson && (
        <PersonInfo
          person={selectedPerson}
          onScheduleMeeting={() => {
            /* Implement your logic to schedule a meeting here */
          }}
          onSendMessage={() => {
            /* Implement your logic to send a message here */
          }}
          onCloseInfo={onCloseInfo}
        />
      )}
    </div>
  );
};

export default ProCounDetails;
 