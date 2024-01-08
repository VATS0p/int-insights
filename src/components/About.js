import React from 'react';
import styles from './About.module.css'; // Import the CSS module

function About() {
  return (
    <section>
      <div className={styles.row}>
        <h1>Our Team</h1>
      </div>
      <div className={styles.row}>
        {/* Column 1 */}
        <div className={styles.column}>
          <div className={styles.card1}>
            <div className={styles.imcontainer}>
              <img src="/photos/pathan.png" alt="Shahil Pathan" />
            </div>
            <h3>Shahil Pathan</h3>
            <h4>Back-End</h4>
            <p>Managing MongoDB and keeping the data up to date</p>
            <div className={styles.icons}>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/shahil-pathan-6161221b9/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:200305126030@paruluniversity.ac.in">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Column 4 */}
        <div className={styles.column}>
          <div className={styles.card1}>
            <div className={styles.imcontainer}>
              <img src="/photos/vats.png" alt="Vats Patel" />
            </div>
            <h3>Vats Patel</h3>
            <h4>Front-End & Back-End</h4>
            <p>Creating the UX and fetching data from the database</p>
            <div className={styles.icons}>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/vats-patel-5571211b9/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:200305126020@paruluniversity.ac.in">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className={styles.column}>
          <div className={styles.card1}>
            <div className={styles.imcontainer}>
              <img src="/photos/ballu.jpeg" alt="Balram Patel" />
            </div>
            <h3>Balram Patel</h3>
            <h4>Front-End</h4>
            <p>Creating UI and collecting data for the web application</p>
            <div className={styles.icons}>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/balram-patel-740958209/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:200305126024@paruluniversity.ac.in">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className={styles.column}>
          <div className={styles.card1}>
            <div className={styles.imcontainer}>
              <img src="/photos/nyt.png" alt="Parth Kurup" />
            </div>
            <h3>Parth Kurup</h3>
            <h4>Front-End</h4>
            <p>Creating UI in React and managing MongoDB</p>
            <div className={styles.icons}>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/parth-kurup/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:200305126007@paruluniversity.ac.in">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
