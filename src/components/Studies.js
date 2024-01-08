import React from 'react';
import styles from './Studies.module.css';
import {useNavigate} from "react-router-dom";
function Ielts() {
const navigate = useNavigate();
  return (
    <div>
     <div className="row">
        <div className="col-md-3 mb-4">
          <div className={`${styles.bbox} ${styles.fadeInUp}`}>
            <img src="/photos/IELTS.jpg" alt="Image 1" className="img-fluid" />
            <h3>IELTS</h3>
            <button className={`btn ${styles.btnPrimary}`} onClick={()=>navigate('/studies/ielts')}>Click</button>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.bbox} ${styles.fadeInUp}`}>
            <img src="/photos/PTE.jpg" alt="Image 2" className="img-fluid" />
            <h3>PTE</h3>
            <button className={`btn ${styles.btnPrimary}`} onClick={()=>navigate('/studies/pte')}>Click</button>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.bbox} ${styles.fadeInUp}`}>
            <img src="/photos/GRE-LOGO.webp" alt="Image 3" className="img-fluid" />
            <h3>GRE</h3>
            <button className={`btn ${styles.btnPrimary}`} onClick={()=>navigate('/studies/gre')}>Click</button>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className={`${styles.bbox} ${styles.fadeInUp}`}>
            <img src="/photos/TOEFL.jpg" alt="Image 4" className="img-fluid" />
            <h3>TOEFL</h3>
            <button className={`btn ${styles.btnPrimary}`} onClick={()=>navigate('/studies/toefl')}>Click</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Studies() {
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
    
      <div className={styles.Studies_header}> 
        <h1>PRACTICE TESTS</h1>
      </div>
      <main>
        <Ielts></Ielts>
        {/* Include other components or content here */}
      </main>
    
    </div>
  );
}

export default Studies;
