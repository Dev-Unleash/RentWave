import React from 'react'
import './blog.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Blog = () => {
  return (
    <div>
      <Header />
      <div className='blogContent'>
        <h3>content</h3>
      </div>
      <Footer />
    </div>
  )
}

export default Blog
