import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Email Offers</h1>
      <p>Subcribe for more info</p>
      <div>
        <input type="email" placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
    
  )
}

export default NewsLetter
