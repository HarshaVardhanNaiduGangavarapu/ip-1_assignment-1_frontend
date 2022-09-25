import React from 'react'
import '../styles/UpdateCardView.css'

import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

function UpdateCardView() {
  return (
    <div className='card-1'>
        <div className='update-text'>Update  your details</div>

       <table className='container-items-1'>
            <tr>
                <td><MdMessage className='container-img-1'/></td>
                <td className='container-item-1'>        
                    <input className='input-1' type='text' placeholder='Enter your bio' name='uname' required />
                </td>
            </tr>
            <tr>
                <td><MdAccountCircle className='container-img-1'/></td>
                <td className='container-item-1'>
                    <input className='input-1' type='text' placeholder='Enter your name' name='uname' required />
                </td>
            </tr>
            <tr>
                <td><MdEmail className='container-img-1'/></td>
                <td className='container-item-1'>
                    <input className='input-1' type='text' placeholder='Enter your email' name='uname' required />
                </td>
            </tr>
            <tr>
                <td><MdPhone className='container-img-1'/></td>
                <td className='container-item-1'>                    
                    <input className='input-1' type='text' placeholder='Enter your phone number' name='uname' required />
                </td>
            </tr>
            <tr>
                <td><button className='container-button-1'>Select</button></td>
                <td className='container-item-1'>                    
                    <input className='input-1' type='text' placeholder='Select your image file' name='uname' required />
                </td>
            </tr>
          </table>
        <button className='container-button-2'>Submit</button>
    </div>
  )
}

export default UpdateCardView