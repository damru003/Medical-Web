import React from 'react'
import { Header } from '../header/Header'
import { About } from '../about/About'
import { Services } from '../services/Services'
import { Appointment } from '../appointment/Appointment'
import { MedicalPakage } from '../medicalp/MedicalPakage'
import { SearchDoctor } from '../searchDoctor/SearchDoctor'
import { Blog } from '../blog/Blog'
import { Contact } from '../contact/Contact'

export const HomePage = () => {
  return (
    <>
        <Header/>
        <About/>
        <Services/>
        <Appointment/>
        <MedicalPakage/>
        <SearchDoctor/>
        <Blog/>
        <Contact/>
    </>
  )
}
