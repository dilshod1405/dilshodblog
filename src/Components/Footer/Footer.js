import React, { Component } from 'react'
import './footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
            <ul>
                <li ><a href={'/'}>{this.props.footer('footer.home')}</a></li>
                <li ><a href={'bio'}>{this.props.footer('footer.biography')}</a></li>
                <li ><a href={'https://github.com/dilshod1405?tab=repositories'}>Github</a></li>
                <li ><a href={'https://t.me/dilshod_developer'}>Telegram</a></li>
                <li ><a href={'https://instagram.com/dilshod__1405'}>Instagram</a></li>
                <li ><a href={'https://www.linkedin.com/in/dilshodjon-normurodov-0b886824b/'}>LinkedIn</a></li>
            </ul>
            <p>© 2023 Dilshod Normurodov</p>
      </div>
    )
  }
}
