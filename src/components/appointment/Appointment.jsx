import React from 'react'

export const Appointment = () => {
    return (
        <>
            <div className="container-fluid primary-bg my-5 py-5">
                <div className="container my-5">


                    <div className="row">

                        <div className="col-md-6">
                            <div class="mb-4">
                                <h5 class="d-inline-block text-white">APPOINTMENT</h5>
                                <h1 class="display-4 dark fw-bold">Make An Appointment For Your Family</h1>
                                <p class="text-white mt-3 fs-6">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                                <div className='mt-5'>
                                <a class="btn btn-dark rounded-pill py-3 px-5 me-3 dark-bg text-white" href="">Find Doctor</a>
                                <a class="btn btn-outline-dark rounded-pill py-3 px-5" href="">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="bg-white text-center rounded p-5">
                                <h1 className="mb-4 dark fw-bold">Book An Appointment</h1>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <select
                                                className="form-select bg-light border-0"
                                                style={{ height: 55 }}
                                            >
                                                <option selected="">Choose Department</option>
                                                <option value={1}>Department 1</option>
                                                <option value={2}>Department 2</option>
                                                <option value={3}>Department 3</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select
                                                className="form-select bg-light border-0"
                                                style={{ height: 55 }}
                                            >
                                                <option selected="">Select Doctor</option>
                                                <option value={1}>Doctor 1</option>
                                                <option value={2}>Doctor 2</option>
                                                <option value={3}>Doctor 3</option>
                                            </select>
                                        </div>
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
                                        <div className="col-12 col-sm-6">
                                            <div className="date" id="date" data-target-input="nearest">
                                                <input
                                                    type="date"
                                                    className="form-control bg-light border-0 datetimepicker-input"
                                                    placeholder="Date"
                                                    data-target="#date"
                                                    data-toggle="datetimepicker"
                                                    style={{ height: 55 }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="time" id="time" data-target-input="nearest">
                                                <input
                                                    type="text"
                                                    className="form-control bg-light border-0 datetimepicker-input"
                                                    placeholder="Time"
                                                    data-target="#time"
                                                    data-toggle="datetimepicker"
                                                    style={{ height: 55 }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="primary-btn rounded py-3 fw-bold" type="submit">Make An Appointment</button>
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