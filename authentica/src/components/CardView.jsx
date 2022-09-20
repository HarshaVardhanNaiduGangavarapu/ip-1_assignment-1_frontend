import React from 'react'
import '../styles/CardView.css';

function CardView() {
  return (
    <div className='form'>
    <form className='contents'>
      <header className='header'>Login</header>
      <div className='input-container'>
        <input className='input' type='text' placeholder='Enter your email' name='uname' required />
      </div>
      <div className='input-container'>
        <input className='input' type='password' placeholder='Password' name='pass' required />
      </div>
      <div className='button-container'>
        <input type='submit' />
      </div>
    </form>
  </div>
  )
}

export default CardView