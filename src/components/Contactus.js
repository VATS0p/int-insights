import React,{ useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
function Contact() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [subject, setSubject] = useState('');
  const [phoneno, setPhoneno] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the server
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname, email, city, subject, phoneno }), // Convert data to JSON format
      });

      if (response.ok) {
        // If the response is successful, clear the form fields and show a success message
        // alert('Data saved successfully');
        setFirstname('');
        setLastname('');
        setEmail('');
        setCity('');
        setSubject('');
        setPhoneno('');
      } else {
        // If there's an error, show an error message
        alert('Data could not be saved. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
    
    navigate('/contact/thankyou');
  };
  return (
    <div>
      <br></br>
      <div className="container mt-5 shadow container1000">
        <div className="row ">
            <div className="col-md-4 bg-primary p-5 text-white order-sm-first order-last">
                <h2>Let's get in touch</h2>
                <p>We're open for any suggestion or just to have a chat</p>
                <div className="d-flex mt-2">
                    <i className="bi bi-geo-alt"></i>
                    <p className="mt-3 ms-3">Address : Road 198 West 21th Street, Suite 721 Singapor WW 10016</p>
                </div>
                <div className="d-flex mt-2">
                    <i className="bi bi-telephone-forward"></i>
                    <p className="mt-4 ms-3">Phone : 8888888888</p>
                </div>
                <div className="d-flex mt-2">
                    <i className="bi bi-envelope"></i>
                    <p className="mt-4 ms-3">Email : BookMyAppointment@gmail.com</p>
                </div>
                <div className="d-flex mt-2">
                    <i className="bi bi-youtube"></i>
                    <p className="mt-4 ms-3">Channel : www.contactform.com/</p>
                </div>
            </div>
            <div className="col-md-8 p-5 ">
                <h2>Get in touch</h2>
                <form className="row g-3 contactForm mt-4">
                    <div className="col-md-6">
                      <label for="inputEmail4" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="inputEmail4" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
                    </div>
                    <div className="col-md-6">
                      <label for="inputPassword4" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="inputPassword4" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
                    </div>
                    <div className="col-12">
                      <label for="inputAddress" className="form-label">Subject</label>
                      <input type="text" className="form-control" id="inputAddress" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required/>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Email Id</label>
                        <input type="text" className="form-control" id="inputAddress" name="email" value={email} onChange={(e) => setEmail(e.target.value)}required/>
                      </div>
                    <div className="col-md-6">
                      <label for="inputCity" className="form-label">City</label>
                      <input type="text" className="form-control" id="inputCity" name="city" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">Contact Number</label>
                        <input type="text" className="form-control" id="inputCity" name="phoneno" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} required/>
                      </div>
                    <div className="col-12">
                    <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
                    </div>
                  </form>
            </div>
        </div>
    </div>
    <br></br>
    </div>
  )
}

export default Contact