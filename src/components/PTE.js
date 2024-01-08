import React from 'react';
import styles from './IELTS.module.css';
import {useNavigate} from "react-router-dom";


function PTE() {
const navigate = useNavigate();
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
    
    <div className={styles.Aipp}> {/* Use the updated CSS class name */}
      <header className={styles.AippHeader}>
        <h1>PEARSON TEST OF ENGLISH</h1>
        <div className={styles.navBar}>
        <button className={`btn ${styles.btnPrrimary}`} onClick={()=>navigate('/studies/pte/speakingandwriting')}>SPEAKING AND WRITING</button>
          <button className={`btn ${styles.btnPrrimary}`} onClick={()=>navigate('/studies/pte/reading')}>READING</button>
          <button className={`btn ${styles.btnPrrimary}`} onClick={()=>navigate('/studies/pte/listening')}>LISTENING</button>

        </div>
                
      <h2><u>PTE Academic Test Format</u></h2>  
      <p>The PTE Academic Test is divided into 3 parts namely Speaking & Writing, Reading & Listening respectively. </p>
      <p><b>Part 1: Speaking & Writing</b><br></br> This part of the test is 54–67 minutes long and it contains seven different question types. It is the longest section of the test. You will be tested on your speaking and writing skills, using English you might hear in an academic environment.</p>
      <p><b>Part 2: Reading</b><br></br> This part of the test is 29–30 minutes long and it contains five different question types. Because PTE Academic is an integrated skills test, one item type ('Reading and Writing: Fill in the blanks') also assesses writing skills.</p>
      <p><b>Part 3: Listening</b><br></br> This part of the test is 30–43 minutes long and it contains eight different question types. The questions are based on audio or video clips, which begin to play automatically. You hear each audio or video clip once. You are allowed to take notes.</p>
      </header>
      
    </div>
    </div>
  );
}

export default PTE;
