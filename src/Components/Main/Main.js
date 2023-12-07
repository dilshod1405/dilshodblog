import element from '../Constants/elements'
import './main.scss'

import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div className='cards'>
        
        <h5><span style={{color: element.text}}>&#8213;</span> {this.props.main('main.title')} <span style={{color: element.text}}>&#8213;</span></h5>

            <div className="row">
                <div className="mycard" style={{color: element.text}} data-aos='fade-up-right' data-aos-duration="1000">
                    <lord-icon src='https://cdn.lordicon.com/eodeknny.json' trigger="loop" style={{width: '50px', height: '50px', }} colors="primary:#1c282b" state='in-bookmark' delay='1000'></lord-icon>
                    <h5>{this.props.main('main.card_title1')}</h5>
                    <p style={{color: '#1C282B'}}>{this.props.main('main.card_text1')}</p>
                </div>
                <div className="mycard" style={{color: element.text}} data-aos='fade-up' data-aos-duration="1000">
                    <lord-icon src='https://cdn.lordicon.com/jgnvfzqg.json' trigger="loop" style={{width: '50px', height: '50px', }} colors="primary:#1c282b" state='in-bookmark' delay='1000'></lord-icon>
                    <h5>{this.props.main('main.card_title2')}</h5>
                    <p style={{color: '#1C282B'}}>{this.props.main('main.card_text2')}</p>
                </div>
                <div className="mycard" style={{color: element.text}} data-aos='fade-up-left' data-aos-duration="1000">
                    <lord-icon src='https://cdn.lordicon.com/mjcariee.json' trigger="loop" style={{width: '50px', height: '50px', }} colors="primary:#1c282b" state='in-bookmark' delay='1000'></lord-icon>
                    <h5>{this.props.main('main.card_title3')}</h5>
                    <p style={{color: '#1C282B'}}>{this.props.main('main.card_text3')}</p>
                </div>
            </div>
      </div>
    )
  }
}
