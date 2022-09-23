import React from 'react'
import '../styles/CardView.css';
import { MdEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { FaUserAlt } from 'react-icons/fa';
import google from '../assets/icons8-google-48.svg'

function CardView() {
  return (
    <div className='form'>
    <form className='contents'>
      <FaUserAlt className='user'/>
      <header className='header'>Login</header>
      <div className='input-container'>
        <MdEmail style={{color:"#009B77"}}/>
        <input className='input' type='text' placeholder='Enter your email' name='uname' required />
      </div>
      <div className='input-container'>
      <MdPassword style={{color:"#009B77"}}/>
        <input className='input' type='password' placeholder='Password' name='pass' required />
      </div>
      <div className='button-container'>
        <input className='button' type='submit' />
      </div>
      <p className='login'>Or login with</p>
      <img src={google} alt="loading..." />
      <br></br>
      <div class="line-1"></div>
      <a className='register' href=''>Register</a>
      
    </form>
  </div>
  )
}

export default CardView