import React from 'react';
import styles from './PersonInfo.module.css';

const PersonInfo = ({ person, onScheduleMeeting, onSendMessage, onCloseInfo }) => {
  return (
    <div className={styles['person-info']}>
      <div className={styles['person-header']}>
        <button className={styles['close-button']} onClick={onCloseInfo}>
          Close
        </button>
      </div>
      <div className={styles['person-details']}>
        <img src={require(`./images/${person.image}`)} alt={person.name} />
        <h2>{person.name}</h2>
        <p>Country: {person.country}</p>
        <p>University: {person.collegeName}</p>
      </div>
      <div className={styles['person-actions']}>
        <button onClick={() => onScheduleMeeting(person)}>Schedule Meeting</button>
        <button onClick={() => onSendMessage(person)}>Send Message</button>
      </div>
    </div>
  );
};

export default PersonInfo;
