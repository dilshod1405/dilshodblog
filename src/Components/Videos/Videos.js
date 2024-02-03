import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './videos.scss'
import element from '../Constants/elements';

function Videos(props) {
  const [data, setData, ] = useState([]);

  useEffect(() => {
    const url = "https://127.0.0.1:8000/links/";
    axios.get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  
  if(data.length === 0) return <div style={{textAlign: 'center'}} className='error'><h2 style={{textAlign: 'center', color: element.text}}>Ushbu sahifa hali ishga tushirilmagan !</h2><i class="fa-solid fa-triangle-exclamation fa-2xl" style={{color: element.text}}></i><div className='loade'></div></div>

  
    return (
      <div className='videocards'>
        <div class="container text-center">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            {data.map((info) => (
              <div class="col">
                <div class="card">
                  <img src={info.photo} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title" style={{color: element.text}}>{info.title}</h5>
                    <a class="card-text" href={info.url} style={{color: element.text}}>{props.videos('videos.view')}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  export default Videos;
