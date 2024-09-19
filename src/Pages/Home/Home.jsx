import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Content from '../../Components/Content/Content'
import Footer from '../../Components/Footer/Footer'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

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