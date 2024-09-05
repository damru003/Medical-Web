import React from 'react'

export const Contact = () => {
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                        <h5 className="d-inline-block primary fw-bold">
                            Any Questions?
                        </h5>
                        <h1 className="display-4 fw-bold dark">Please Feel Free To Contact Us</h1>
                    </div>
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            <div
                                className="light-bg rounded d-flex flex-column align-items-center justify-content-center text-center"
                                style={{ height: 200 }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center primary-bg rounded-circle mb-4"
                                    style={{ width: 100, height: 70, transform: "rotate(-15deg)" }}
                                >
                                    <i
                                        className="fa fa-2x fa-location-arrow text-white"
                                        style={{ transform: "rotate(15deg)" }}
                                    />
                                </div>
                                <h6 className="mb-0">123 Street, New York, USA</h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div
                                className="light-bg rounded d-flex flex-column align-items-center justify-content-center text-center"
                                style={{ height: 200 }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center primary-bg rounded-circle mb-4"
                                    style={{ width: 100, height: 70, transform: "rotate(-15deg)" }}
                                >
                                    <i
                                        className="fa fa-2x fa-phone text-white"
                                        style={{ transform: "rotate(15deg)" }}
                                    />
                                </div>
                                <h6 className="mb-0">+012 345 6789</h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div
                                className="light-bg rounded d-flex flex-column align-items-center justify-content-center text-center"
                                style={{ height: 200 }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center primary-bg rounded-circle mb-4"
                                    style={{ width: 100, height: 70, transform: "rotate(-15deg)" }}
                                >
                                    <i
                                        className="fa fa-2x fa-envelope-open text-white"
                                        style={{ transform: "rotate(15deg)" }}
                                    />
                                </div>
                                <h6 className="mb-0">info@example.com</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{ height: 500 }}>
                            <div className="position-relative h-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52625478996!2d76.76358188437776!3d28.643684644543082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1725526000738!5m2!1sen!2sin"
                                    width={1300}
                                    height={450}
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />

                            </div>
                        </div>
                    </div>
                    <div
                        className="row justify-content-center position-relative"
                        style={{ marginTop: "-200px", zIndex: 1 }}
                    >
                        <div className="col-lg-8">
                            <div className="bg-white rounded p-5 m-5 mb-0">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control bg-light border-0"
                                                placeholder="Your Name"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="email"
                                                className="form-control bg-light border-0"
                                                placeholder="Your Email"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                className="form-control bg-light border-0"
                                                placeholder="Subject"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                className="form-control bg-light border-0"
                                                rows={5}
                                                placeholder="Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button className="primary-btn w-100 py-3" type="submit">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
