import React from 'react';
import styles from './IELTS.module.css'; // Import the updated CSS module
import {useNavigate} from "react-router-dom";
function IELTS() {
const navigate = useNavigate();
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        
    <div className={styles.Aipp}> {/* Use the updated CSS class name */}
      <header className={styles.AippHeader}> {/* Use the updated CSS class name */}
        <h1>TAKE IELTS PRACTICE TEST</h1>
        <div className={styles.navBar}> {/* Use the updated CSS class name */}
          <button className={`btn ${styles.btnPrrimary}`} onClick={()=>navigate('/studies/ielts/listening')}>LISTENING</button>
          <button className={`btn ${styles.btnPrrimary}`} onClick={()=>navigate('/studies/ielts/speaking')}>SPEAKING</button>
          <button className={`btn ${styles.btnPrrimary}`} onClick={()=>navigate('/studies/ielts/reading')}>READING</button>
          <button className={`btn ${styles.btnPrrimary}`} onClick={()=>navigate('/studies/ielts/writing ')}>WRITING</button>
        </div>

        <h2><u>IELTS Test Format</u></h2>
        <p>There are two types of IELTS: Academic and General Training. IELTS Academic can be taken in a test center on paper or on the computer and can now also be taken online from home or another private location that has a stable internet connection. IELTS General Training can only be taken in a test center on paper or on the computer.</p>
        <p>For Academic and General Training, you take the same Listening and Speaking tests but different Reading and Writing tests. Make sure you prepare for the correct test type.</p>
        <p>The Listening, Reading, and Writing sections of all IELTS tests are completed on the same day, with no breaks in between them.</p>
        <p>The Speaking test, however, may be scheduled up to a week before or after the other tests. If you booked IELTS Online, your Speaking test will usually take place before your other tests. The total test time is 2 hours and 45 minutes.</p>
      </header>
    </div>
    </div>
  );
}

export default IELTS;
