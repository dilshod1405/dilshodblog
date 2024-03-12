import React, { Component } from 'react'
import './footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
            <ul>
                <li ><a target='blank' href={'/'}>{this.props.footer('footer.home')}</a></li>
                <li ><a target='blank' href={'bio'}>{this.props.footer('footer.biography')}</a></li>
                <li ><a target='blank' href={'https://github.com/dilshod1405?tab=repositories'}>Github</a></li>
                <li ><a target='blank' href={'https://t.me/dilshod_1405'}>Telegram</a></li>
                <li ><a target='blank' href={'https://www.linkedin.com/in/dilshod-normurodov-0b886824b/'}>LinkedIn</a></li>
            </ul>
            <p>© 2023 Dilshod Normurodov</p>
      </div>
    )
  }
}
