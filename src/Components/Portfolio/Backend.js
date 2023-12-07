import element from '../Constants/elements'
import './portfolio.scss'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BackendPortfolio(props) {
  const [data, setData, ] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/backends/";
    axios.get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  if(data.length === 0) return []
    return (
      <div className='portfolio'>
        <div className='back'>
          <h5><span style={{color: element.text}}>&#8213;</span> {props.backend('backend.title')} <span style={{color: element.text}}>&#8213;</span></h5>
          <div className="container text-center">
                  <div className="row">
                  {data.map((info) => (
                    <div className="col" data-aos="fade-up" data-aos-duration="1000">
                      <div className="card" style={{width: '300px'}}>
                          <i className="fa-solid fa-server fa-2xl card-img-top"></i>
                          <div className="card-body">
                            <a className="card-text" href={info.github}>- {info.title} -</a>
                          </div>
                          <a href={'/'} className='detail'>{props.backend('backend.text')}</a>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
        </div>
      </div>
    )
  }
export default BackendPortfolio;
