import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            {/* Navbar 1 */}
            <div className="container-fluid border-bottom d-none d-lg-block">
                <div className="container">
                
                    <div className="row">

                        <div className="col-md-6 d-flex">

                            <p class="text-body pe-3 mt-2"><i class="fa-solid fa-phone me-2"></i>+012 345 6789</p>

                            <span class="text-body mt-2">|</span>

                            <p className='mt-2 mx-3'><span><i class="fa-solid fa-envelope"></i></span> info@example.com</p>

                        </div>

                        <div class="col-md-6 text-lg-end mt-2">

                            <div class="d-inline-flex">

                                <a class="text-body px-2 " href=""><i class="fab fa-facebook-f"></i></a>

                                <a class="text-body px-2" href=""><i class="fab fa-twitter"></i></a>

                                <a class="text-body px-2" href=""><i class="fab fa-linkedin-in"></i></a>

                                <a class="text-body px-2" href=""><i class="fab fa-instagram"></i></a>

                                <a class="text-body ps-2" href=""><i class="fab fa-youtube"></i></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar 2 */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <a className="navbar-brand fs-2 fw-bold" href="#" style={{ color: '#13C5DD' }}>
                        <span><i class="fa-solid fa-notes-medical"></i></span> MEDINOVA
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={'/'}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"about"}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"services"}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"pricing"}>
                                    Pricing
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul class="dropdown-menu mt-3" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link class="dropdown-item" to={"blog"}>Blog Grid</Link></li>
                                    <li><a class="dropdown-item" href="#">Blog Detail</a></li>
                                    <li><a class="dropdown-item" href="#">The Team</a></li>
                                    <li><a class="dropdown-item" href="#">Testimonial</a></li>
                                    <li><a class="dropdown-item" href="#">Appointment</a></li>
                                    <li><a class="dropdown-item" href="#">Search</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"contact"}>
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}