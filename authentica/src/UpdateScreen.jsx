import React from 'react'
import './UpdateScreen.css'
import NavBar from './components/NavBar-update';
import UpdateCardView from './components/UpdateCardView';
import update from './assets/animation_500_l8gzt8ey.gif';

function UpdateScreen() {
  return (
    <div className="MainApp">
    <header className="App-header">
        <NavBar></NavBar>
    <div className='container-2'>
        <img src={update} alt="loading..." />
        <UpdateCardView></UpdateCardView>
    </div>
    </header>
  </div>
  )
}

export default UpdateScreen