import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import searchIllustration from "./assets/illustration2.svg"
import Results from './components/Results'

const SearchPage = () => {
  return (
    <>
        <Header/>
        <div className='flex flex-col items-center px-[4rem] py-[4rem] min-h-screen relative'>
            <img className='h-2/4 absolute left-1/3 top-[20rem] z-[-1]' src={searchIllustration} alt='illustration'/>
            <Search/>
            <Results role = "Web Developer" location = "Bhopal" />
        </div>
        <Footer/>
    </>
  )
}

export default SearchPage
