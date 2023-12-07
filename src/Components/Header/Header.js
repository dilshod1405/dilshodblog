import React, { Component } from 'react'
import './header.scss'
import element from '../Constants/elements'


export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div id="navbar">
            <a href={'/'}><h5 style={{color: element.text, float: 'left'}}>{this.props.header('banner.logo')}</h5></a>
            
            <ul className='icons'>
              {Object.keys(this.props.on).map((locale) => (
                <button className='btn' key={locale} style={{color: element.text, fontSize: '20px'}} onClick={()=> {this.props.btn.changeLanguage(locale)} }>{this.props.on[locale].title}</button>
              ))}
                <li><button className='btn'><a href={'videos'}><i className="fa-solid fa-video fa-lg" style={{color: element.text}}></i></a></button></li>
                <li><button className='btn'><a href={'https://github.com/dilshod1405?tab=repositories'}><i className="fa-brands fa-github fa-lg" style={{color: element.text}}></i></a></button></li>
                <li><button className='btn'><a href={'https://t.me/dilshod_developer'}><i className="fa-brands fa-telegram fa-lg" style={{color: element.text}}></i></a></button></li>
                <li><button className='btn'><a href={'https://instagram.com/dilshod__1405'}><i className="fa-brands fa-instagram fa-lg" style={{color: element.text}}></i></a></button></li>
                <li><button className='btn'><a href={'https://www.linkedin.com/in/dilshodjon-normurodov-0b886824b/'}><i className="fa-brands fa-linkedin fa-lg" style={{color: element.text}}></i></a></button></li>
                
            </ul>
        </div>
      </div>
    )
  }
}
