
import './App.css';
import React from 'react';
import Header from './components/Header/header';
import RegistrationForm from './components/RegistrationForm/registrationform';
import LoginForm from './components/Login_form/loginform';

function App() {
  return (
    <div className="App">
      <Header/>
      <RegistrationForm/>
      <LoginForm/>
    </div>
  );
}

export default App;
