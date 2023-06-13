import React from 'react'
import "./Payment.css"
import { Link } from 'react-router-dom';

function Payment() {
  return (
   
    <div className='pay-body' >
      <Link to="/">
      <button className='goback'>Click to Go Back</button>
      </Link>  
    <h1 className='head-payment'>Thank You For Shopping <br/> Waiting for confirmation of payment</h1>
    
    </div>
    
    
   
  )
}

export default Payment;