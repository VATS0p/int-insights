import React from 'react'

function Footer() {
  return (
    <div>
      <br></br>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>International Insights
                </h6>
                <p>
                Welcome to International Insights, your gateway to global opportunities! Our web app offers a comprehensive range of services, connecting you with foreign students, providing essential accommodation information, facilitating currency exchange, and offering invaluable insights into universities and study programs worldwide. Expand your horizons with us today.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" className="text-reset">Accomodation</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Connection</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Country - ranking</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Currency Converter</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Financial Guide</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Flights</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Studies</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Universities</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2023 InternationalInsights.com
        </div>
      </footer>
    </div>

  )
}

export default Footer
