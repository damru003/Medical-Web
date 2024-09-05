import React from 'react'

export const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-5 py-5" style={{ backgroundColor: '#1D2A4D' }}>
        <div className="container py-5">
          <div className="row g-5">

            <div className="col-md-6 col-lg-3">
              <h4 className="d-inline-block primary mb-4 fw-bold border-bottom border-5">
                GET IN TOUCH
              </h4>
              <p className="mb-4 text-white">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor
                sed dolor
              </p>
              <p className="mb-2 text-white">
                <i className="fa fa-map-marker-alt primary me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2 text-white">
                <i className="fa fa-envelope primary me-3" />
                info@example.com
              </p>
              <p className="mb-0 text-white">
                <i className="fa fa-phone-alt primary me-3" />
                +012 345 67890
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block primary border-bottom border-5 mb-4">
                QUICK LINKS
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2 text-decoration-none" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Home
                </a>
                <a className="text-light mb-2 text-decoration-none" href="#">
                  <i className="fa fa-angle-right me-2" />
                  About Us
                </a>
                <a className="text-light mb-2 text-decoration-none" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Our Services
                </a>
                <a className="text-light mb-2 text-decoration-none" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Meet The Team
                </a>
                <a className="text-light mb-2 text-decoration-none" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Latest Blog
                </a>
                <a className="text-light text-decoration-none" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Contact Us
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block primary border-bottom border-5 mb-4">
                POPULAR LINKS
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2 text-decoration-none" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Home
                </a>
                <a className="text-light mb-2 text-decoration-none" href="#">
                  <i className="fa fa-angle-right me-2" />
                  About Us
                </a>
                <a className="text-light mb-2 text-decoration-none" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Our Services
                </a>
                <a className="text-light mb-2 text-decoration-none" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Meet The Team
                </a>
                <a className="text-light mb-2 text-decoration-none" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Latest Blog
                </a>
                <a className="text-light text-decoration-none" href="#">
                  <i className="fa fa-angle-right me-2" />
                  Contact Us
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block primary border-bottom border-5 mb-4">
                NEWSLETTER
              </h4>
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-3 border-0"
                    placeholder="Your Email Address"
                  />
                  <button className="btn-primary-footer fw-bold">Sign Up</button>
                </div>
              </form>
              <h6 className="primary mt-4 mb-3 fw-bold">FOLLOW US</h6>
              <div className="d-flex">

                <a className="btn-primary-footer rounded-circle me-2" href="#">
                  <i className="fab fa-twitter" />
                </a>

                <a className="btn-primary-footer rounded-circle me-2"
                  href="#">
                  <i className="fab fa-facebook-f p-1" />
                </a>

                <a className="btn-primary-footer rounded-circle me-2"
                  href="#">
                  <i className="fab fa-linkedin-in" />
                </a>

                <a className="btn-primary-footer rounded-circle" href="#">
                  <i className="fab fa-instagram" />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}