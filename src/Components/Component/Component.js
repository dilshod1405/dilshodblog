import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import Biography from '../Biography/Biography';
import Videos from '../Videos/Videos';
import Home from '../../Home';

export default class Components extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Home main={this.props.main} frontend={this.props.frontend} backend={this.props.backend}/>}/>
          <Route path='/bio' element={<Biography biography={this.props.biography}/>}/>
          <Route path='/videos' element={<Videos/>}/>
        </Routes>
      </div>
    )
  }
}
