import element from '../Constants/elements'
import './banner.scss'

import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <div className='context'>
            <div className='texts'>
                <p data-aos="fade-up" data-aos-duration="1000">{this.props.banner('banner.banner')}</p>
                <h1 style={{color: element.text}} data-aos="fade-up" data-aos-duration="2000">Dilshod Normurodov Anvarovich</h1>
                <p data-aos="fade-up" data-aos-duration="3000"><span style={{color: element.text}} > &#8213; </span> {this.props.banner('banner.title')}</p>
                <br />
                <a href={'bio'} data-aos="fade-right" data-aos-duration="2000"> <strong>{this.props.banner('banner.link1')}</strong></a>
            </div>
            <img src={element.photo} alt="" data-aos="zoom-out" data-aos-duration="1500"/>
        </div>
        <hr style={{color: element.text}}/>
        
      </div>
    )
  }
}
