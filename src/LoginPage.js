import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import formIllustration from './assets/Illustration.svg'
import Login from './components/Login'

const LoginPage = () => {
    
  return (
    <>
    <Header/>
    <div className='flex w-full justify-between items-center px-[4rem] py-[4rem]'>
    <Login/>
    <img src={formIllustration} className='h-[46rem]' alt='illustration'/>
    </div>
    <Footer/>
    </>
  );
}

export default LoginPage
