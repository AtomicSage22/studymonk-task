import React from 'react'
import Header from './components/Header'
import Form from './components/Register'
import Footer from './components/Footer'
import formIllustration from './assets/Illustration.svg'
import Register from './components/Register'

const RegisterPage = () => {
    
  return (
    <>
    <Header/>
    <div className='flex w-full justify-between items-center px-[4rem] py-[4rem]'>
    <Register/>
    <img src={formIllustration} className='h-[46rem]' alt='illustration'/>
    </div>
    <Footer/>
    </>
  );
}

export default RegisterPage
