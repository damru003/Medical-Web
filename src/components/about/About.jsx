import React from 'react'

export const About = () => {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-5" style={{ minHeight: '500px' }}>
                            <img className='w-100 h-100 rounded' src={'/assets/about.jpg'} style={{ objectFit: 'cover' }} />
                        </div>

                        <div class="col-lg-7 py-5 ">

                            <h5 class="primary fw-bold">ABOUT US</h5>


                            <h1 class="display-4 dark fw-bold">Best Medical Care For Yourself and Your Family</h1>

                            <p className='mt-3 fs-6'>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>

                            <div className="row g-4 pt-3">
                                <div class="col-sm-3 col-6">
                                    <div class="bg-light text-center rounded-circle py-4">
                                        <i class="fa fa-3x fa-user-md primary mb-3"></i>
                                        <h6 class="mb-0">Qualified<small class="d-block fw-bold primary">Doctors</small></h6>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-6">
                                    <div class="bg-light text-center rounded-circle py-4">
                                    <i class="fa fa-3x fa-procedures primary mb-3"></i>
                                    <h6 class="mb-0">Emergency<small class="d-block primary">Services</small></h6>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-6">
                                    <div class="bg-light text-center rounded-circle py-4">
                                        <i class="fa fa-3x fa-microscope primary mb-3"></i>
                                        <h6 class="mb-0">Qualified<small class="d-block primary">Testing</small></h6>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-6">
                                    <div class="bg-light text-center rounded-circle py-4">
                                        <i class="fa fa-3x fa-ambulance primary mb-3"></i>
                                        <h6 class="mb-0">Qualified<small class="d-block primary">Ambulance</small></h6>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}