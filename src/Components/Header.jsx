import React from 'react'
import '../App.css'
import { BagCheck, Cart4, Eye, List, ListUl, Moon, Person, PersonVcard, Telephone } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className="top">
      <div><List size={24} className='icon'/></div>
      <div><Moon size={21} className='icon'/></div>
      <div><Cart4 size={21} className='icon'/></div>
      </div>
      <div className="bottom">
        <div><Link to='/' className='link-color'><Person size={21} className='icon'/><p>about</p></Link></div>
        <div><Link to='/resume' className='link-color'><ListUl size={21} className='icon'/><p>resume</p></Link></div>
        <div><Link to='/works' className='link-color'><Eye size={21} className='icon'/><p>works</p></Link></div>
        {/* <div><Link to='/blog' className='link-color'><PersonVcard size={21} className='icon'/><p>blog</p></Link></div> */}
        <div><Link to='/contact' className='link-color'><Telephone size={21} className='icon'/><p>contact</p></Link></div>
        <div><Link to='/products' className='link-color'><BagCheck size={21} className='icon'/><p>products</p></Link></div>
      </div>
    </div>
  )
}

export default Header
