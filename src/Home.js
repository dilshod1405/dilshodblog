import React, { Component } from 'react'
import Main from './Components/Main/Main'
import FrontendPortfolio from './Components/Portfolio/Frontend'
import BackendPortfolio from './Components/Portfolio/Backend'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Main main={this.props.main}/>
        <FrontendPortfolio frontend={this.props.frontend}/>
        <BackendPortfolio backend={this.props.backend}/>
      </div>
    )
  }
}
