import React, { useState } from 'react';
import styles from './Writing.module.css'; // Import the CSS module

function Writing() {
  const [essayText, setEssayText] = useState('');
  const wordCount = essayText.trim().split(/\s+/).length;

  const handleTextChange = (event) => {
    setEssayText(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the submission of the essay here
    // You can send the essay content to a server, store it, or perform any desired action
    alert('Essay Submitted'); // Example alert
  };

  return (
    <div><br></br><br></br><br></br>
    <div className={styles.Writing}> {/* Use the updated CSS class name */}
      <h1>IELTS Writing Task 1</h1>
      <div>
        <h3>Question: The Chart below shows the global sales of different kinds of digital games from 2000 to 2006.</h3>
        <img src="/photos/Task1.jpg" alt="Task 1 Image" />
      </div>
      <div>
        <label htmlFor="essay">
          
        </label>
        <textarea
          id="essay"
          rows="25"
          cols="150"
          value={essayText}
          onChange={handleTextChange}
        ></textarea>
      </div>
      <div>
        <p>Word Count: {wordCount}</p>
      </div>
      
      <h1>IELTS Writing Task 2</h1>
      <h2>
        Question: Nowadays, children watch a lot of TV and play video games.
        However, some think that these activities are not beneficial for a
        child’s mental health. To what extent do you agree or disagree?
      </h2>
      <div>
        <label htmlFor="essay">
          
        </label>
        <textarea
          id="essay"
          rows="35"
          cols="150"
          value={essayText}
          onChange={handleTextChange}
        ></textarea>
      </div>
      <div>
        <p>Word Count: {wordCount}</p>
      </div>
      
      {/* Submit button with Bootstrap styling */}
      <div>
        <button className={`btn ${styles.Writing_button}`} onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    </div>
  );
}

export default Writing;