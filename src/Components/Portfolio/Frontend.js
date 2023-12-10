import element from '../Constants/elements'
import './portfolio.scss'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FrontendPortfolio(props) {
  const [data, setData, ] = useState([]);
  useEffect(() => {
    const url = "https://dilshod1405.pythonanywhere.com/frontends/";
    axios.get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  
  if(data.length === 0) return <div className='loader'></div>
    return (
      <div className='portfolio'>
        <div className='front'>
          <h5><span style={{color: element.text}}>&#8213;</span> {props.frontend('frontend.title')} <span style={{color: element.text}}>&#8213;</span></h5>
                <div className="container text-center">
                  <div className="row">
                  {data.map((info) => (
                    <div className="col" data-aos="fade-up" data-aos-duration="1000">
                      <div className="card" style={{width: '300px'}}>
                          <i className="fa-solid fa-star fa-2xl card-img-top"></i>
                          <div className="card-body">
                            <a className="card-text" href={info.deployment}>- {info.title} -</a>
                          </div>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
        </div>

      </div>
    )
  }
export default FrontendPortfolio;
