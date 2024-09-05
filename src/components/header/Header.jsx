import React from 'react'

export const Header = () => {
    return (
        <>
            <div className="container-fluid py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-lg-start">
                            <h5 className='primary fw-bold'>Welcome To Medinova</h5>
                            <hr className='border-bottom border-2' style={{maxWidth:'25%',color:'white'}}/>
                            <h1 className="display-2 fw-bold text-white mb-md-4">
                                Best Healthcare Solution In Your City
                            </h1>
                            <div className="pt-2">
                                <a href="" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2 fw-bold">Find Doctor</a>
                                <a href="" className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2 fw-bold">Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
