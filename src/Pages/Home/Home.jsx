import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Content from '../../Components/Content/Content'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    return (
        <div className='AppContainer'>
          <Header />
          <Hero />
          <Content />
          <Footer />
        </div>
      )
}

export default Home;