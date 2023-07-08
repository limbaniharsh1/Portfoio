import './App.css';
import React from 'react'
import Header from './Components/Header';
import Person from './Components/Person';
import Details from './Components/Details';

function Main() {
  return (
    <div className='App'>
      <div className="box">
        <Header/>
        <Person/>
        <Details/>
      </div>
    </div>
  )
}

export default Main
