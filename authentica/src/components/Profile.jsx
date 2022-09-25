import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import robot from '../assets/animation_500_l8gr8bbx.gif';

import '../styles/Profile.css'

function Profile() {
  return (
        <div className='container-root'>
          <div className='circular--landscape'>
              <img className='profilepic' src="https://th.bing.com/th/id/OIP.Ltqg54JFsfHety19Tpw3fAHaF7?pid=ImgDet&rs=1" />
          </div>

          <div class="line-v-1"></div>

          <table className='container-items'>
            <tr>
                <td><MdMessage className='container-img'/></td>
                <td className='container-item'>Bio</td>
            </tr>
            <tr>
                <td><MdAccountCircle className='container-img'/></td>
                <td className='container-item'>Randy</td>
            </tr>
            <tr>
                <td><MdEmail className='container-img'/></td>
                <td className='container-item'>orton@gmail.com</td>
            </tr>
            <tr>
                <td><MdPhone className='container-img'/></td>
                <td className='container-item'>12182812782</td>
            </tr>
          </table>

          <img src={robot} alt="loading..." />

        </div>
      
  )
}

export default Profile