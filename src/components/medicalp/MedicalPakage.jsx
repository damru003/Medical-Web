import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const MedicalPakage = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div class="text-center mx-auto mb-5">
                        <h5 class="d-inline-block fw-bold primary text-uppercase">Medical Packages</h5>
                            <h1 class="display-4 fw-bold dark">Awesome Medical Programs</h1>
                        <div className="container mt-5">

                            <Carousel
                                responsive={responsive}
                                swipeable={true}
                                draggable={true}
                                keyBoardControl={true}
                                infinite={true}
                            >

                                <div className='container'>
                                    <div class="card" style={{ width: '100%' }}>
                                        <img src={'assets/price-1.jpg'} class="card-img-top img-dark" alt="..." />
                                        <div className='card-img-overlay fw-bold text-white mt-5'>
                                        <h2 className='fw-bold'>Pregnancy Test</h2>
                                        <h3>$49/year</h3>
                                        </div>
                                        <div class="text-center py-5 bg-light light-text ">
                                            <p>Emergency Medical Treatment</p>
                                            <p>Highly Experienced Doctors</p>
                                            <p>Highest Success Rate</p>
                                            <p className='mb-5'>Telephone Service</p>
                                            <a href="" class="medical_apply rounded-pill py-3 px-5 my-2 text-decoration-none">Apply Now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='container'>
                                    <div class="card" style={{ width: '100%' }}>
                                        <img src={'assets/price-2.jpg'} class="card-img-top img-dark" alt="..." />
                                        <div className='card-img-overlay fw-bold text-white mt-5'>
                                        <h2 className='fw-bold'>Pregnancy Test</h2>
                                        <h3>$49/year</h3>
                                        </div>
                                        <div class="text-center py-5 bg-light light-text ">
                                            <p>Emergency Medical Treatment</p>
                                            <p>Highly Experienced Doctors</p>
                                            <p>Highest Success Rate</p>
                                            <p className='mb-5'>Telephone Service</p>
                                            <a href="" class="medical_apply rounded-pill py-3 px-5 my-2 text-decoration-none">Apply Now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='container'>
                                    <div class="card" style={{ width: '100%' }}>
                                        <img src={'assets/price-3.jpg'} class="card-img-top img-dark" alt="..." />
                                        <div className='card-img-overlay fw-bold text-white mt-5'>
                                        <h2 className='fw-bold'>Pregnancy Test</h2>
                                        <h3>$49/year</h3>
                                        </div>
                                        <div class="text-center py-5 bg-light light-text ">
                                            <p>Emergency Medical Treatment</p>
                                            <p>Highly Experienced Doctors</p>
                                            <p>Highest Success Rate</p>
                                            <p className='mb-5'>Telephone Service</p>
                                            <a href="" class="medical_apply rounded-pill py-3 px-5 my-2 text-decoration-none">Apply Now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='container'>
                                    <div class="card" style={{ width: '100%' }}>
                                        <img src={'assets/price-4.jpg'} class="card-img-top img-dark" alt="..." />
                                        <div className='card-img-overlay fw-bold text-white mt-5'>
                                        <h2 className='fw-bold'>Pregnancy Test</h2>
                                        <h3>$49/year</h3>
                                        </div>
                                        <div class="text-center py-5 bg-light light-text ">
                                            <p>Emergency Medical Treatment</p>
                                            <p>Highly Experienced Doctors</p>
                                            <p>Highest Success Rate</p>
                                            <p className='mb-5'>Telephone Service</p>
                                            <a href="" class="medical_apply rounded-pill py-3 px-5 my-2 text-decoration-none">Apply Now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='container'>
                                    <div class="card" style={{ width: '100%' }}>
                                        <img src={'assets/price-1.jpg'} class="card-img-top img-dark" alt="..." />
                                        <div className='card-img-overlay fw-bold text-white mt-5'>
                                        <h2 className='fw-bold'>Pregnancy Test</h2>
                                        <h3>$49/year</h3>
                                        </div>
                                        <div class="text-center py-5 bg-light light-text ">
                                            <p>Emergency Medical Treatment</p>
                                            <p>Highly Experienced Doctors</p>
                                            <p>Highest Success Rate</p>
                                            <p className='mb-5'>Telephone Service</p>
                                            <a href="" class="medical_apply rounded-pill py-3 px-5 my-2 text-decoration-none">Apply Now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='container'>
                                    <div class="card" style={{ width: '100%' }}>
                                        <img src={'assets/price-2.jpg'} class="card-img-top img-dark" alt="..." />
                                        <div className='card-img-overlay fw-bold text-white mt-5'>
                                        <h2 className='fw-bold'>Pregnancy Test</h2>
                                        <h3>$49/year</h3>
                                        </div>
                                        <div class="text-center py-5 bg-light light-text ">
                                            <p>Emergency Medical Treatment</p>
                                            <p>Highly Experienced Doctors</p>
                                            <p>Highest Success Rate</p>
                                            <p className='mb-5'>Telephone Service</p>
                                            <a href="" class="medical_apply rounded-pill py-3 px-5 my-2 text-decoration-none">Apply Now</a>
                                        </div>
                                    </div>
                                </div>

                            </Carousel>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}