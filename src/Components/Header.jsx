import React from 'react'
import '../App.css'
import { BagCheck, Cart4, Eye, EyeSlash, List, ListUl, Moon, Person, PersonVcard, Telephone } from 'react-bootstrap-icons';

function Header() {
  return (
    <div className='header'>
      <div className="top">
      <div><List size={24} className='icon'/></div>
      <div><Moon size={21} className='icon'/></div>
      <div><Cart4 size={21} className='icon'/></div>
      </div>
      <div className="bottom">
        <div><Person size={21} className='icon'/><p>about</p></div>
        <div><ListUl size={21} className='icon'/><p>resume</p></div>
        <div><Eye size={21} className='icon'/><p>works</p></div>
        <div><PersonVcard size={21} className='icon'/><p>blog</p></div>
        <div><Telephone size={21} className='icon'/><p>contact</p></div>
        <div><BagCheck size={21} className='icon'/><p>products</p></div>
      </div>
    </div>
  )
}

export default Header
