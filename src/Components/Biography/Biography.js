import React, { Component } from 'react'
import './biography.scss'
import element from '../Constants/elements'

const architecture = [
  {
    icon: 'fa-solid fa-archway fa-fade',
    portfolio: '',
    link_icon: 'fa-solid fa-right-long fa-fade',
    link: 'link',
    speciality: 'arch'
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench fa-fade',
    portfolio: '',
    speciality: 'cons',
  },
  {
    icon: 'fa-brands fa-intercom fa-fade',
    portfolio: '',
    speciality: 'interior',
  },
  {
    icon: 'fa-solid fa-building-columns fa-fade',
    portfolio: '',
    speciality: 'exterior'
  },
  {
    icon: 'fa-brands fa-autoprefixer fa-fade',
    portfolio: '',
    speciality: 'autocad',
  },
  {
    icon: 'fa-brands fa-unity fa-fade',
    portfolio: '',
    speciality: 'max'
  }
]

const works = [
  {
    link: 'http://migration.uz/',
    logo: 'mig.png',
    title: 'company1',
    speciality: 'position1',
    demand: "responsiblity1"
  },
  {
    link: 'https://top.uz/company/premier-engineering',
    logo: 'https://top.uz/upload/yp/static/874/87400b121b67c45d0da848f53499ab19.jpg',
    title: 'company2',
    speciality: 'position2',
    demand: "responsiblity2"
  },
]
export default class Biography extends Component {
  render() {
    return (
      <div className='bio'>
        <div className="info">
          <img src="../photo2.png" alt="" data-aos="zoom-in" data-aos-duration="1000" className='photo'/>
          <div className='elements'>
          <table class="table" data-aos="fade-up" data-aos-duration="1000">
            <thead>
              <tr>
                <th scope="col">{this.props.biography('biography.title1')}</th>
                <th scope="col">{this.props.biography('biography.skills')}</th>
                <th scope="col">{this.props.biography('biography.link')}</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row"><i class="fa-brands fa-python fa-fade"></i></th>
                <td>Python backend development</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://online.pdp.uz/">PDP Academy</a></td>
              </tr>
              <tr>
                <th scope="row"><i class="fa-brands fa-java fa-fade"></i></th>
                <td>Java backend development</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://www.udemy.com/">Udemy</a></td>
              </tr>
              <tr>
                <th scope="row"><i class="fa-brands fa-react fa-fade"></i></th>
                <td >React development</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://online.pdp.uz/">PDP Academy</a></td>
              </tr>
              <tr>
                <th scope="row"><i class="fa-brands fa-js fa-fade"></i></th>
                <td >JavaScript</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://online.pdp.uz/">PDP Academy</a></td>
              </tr>
              <tr>
                <th scope="row" className='fa-fade'>TS</th>
                <td >TypeScript</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://online.pdp.uz/">PDP Academy</a></td>
              </tr>
              <tr>
                <th scope="row"><i class="fa-brands fa-html5 fa-fade"></i></th>
                <td >HTML</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://online.pdp.uz/">PDP Academy</a></td>
              </tr>
              <tr>
                <th scope="row"><i class="fa-brands fa-css3-alt fa-fade"></i></th>
                <td >CSS</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://online.pdp.uz/">PDP Academy</a></td>
              </tr>
              <tr>
                <th scope="row"><i class="fa-brands fa-sass fa-fade"></i></th>
                <td >Sass (scss)</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://online.pdp.uz/">PDP Academy</a></td>
              </tr>
              <tr>
                <th scope="row" className='fa-fade'>dj</th>
                <td >Django rest framework web development</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://online.pdp.uz/">PDP Academy</a></td>
              </tr>
              <tr>
                <th scope="row" className='fa-fade'><i className="fa-brands fa-java fa-fade"></i></th>
                <td >Spring boot</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://youtu.be/Nv2DERaMx-4?si=61URGwHmn1CHbOs5">YouTobe lessons</a></td>
              </tr>
              <tr>
                <th scope="row"><i class="fa-brands fa-github fa-fade"></i></th>
                <td >Github</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://online.pdp.uz/">PDP Academy</a></td>
              </tr>
              <tr>
                <th scope="row"><i class="fa-solid fa-database fa-fade"></i></th>
                <td >PostgreSQL database development</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://online.pdp.uz/">PDP Academy</a></td>
              </tr>
              <tr>
                <th scope="row"><i class="fa-solid fa-link fa-fade"></i></th>
                <td >API connection between frontend and backend</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://online.pdp.uz/">PDP Academy</a></td>
              </tr>
              <tr>
                <th scope="row"><i class="fa-solid fa-terminal fa-fade"></i></th>
                <td >Work in windows and linux terminals</td>
                <td><i class="fa-solid fa-right-long fa-fade"></i> <a href="https://www.youtube.com/watch?v=Jfvg3CS1X3A">YouTobe lessons </a></td>
              </tr>
              
            </tbody>
          </table>
          <br />
          <table className='table' data-aos="fade-up" data-aos-duration="1000">
              <thead>
                  <tr>
                    <th scope="col">{this.props.biography('biography.title2')}</th>
                    <th scope="col">{this.props.biography('biography.skills2')}</th>
                    <th scope="col">Portfolio</th>
                  </tr>
                </thead>
                <tbody>
                  {architecture.map((info) => (
                      <tr>
                      <th scope="row"><i class={info.icon}></i></th>
                      <td>{this.props.biography(`biography.${info.speciality}`)}</td>
                      <td><i class={info.link_icon}></i> <a href={info.portfolio}>{info.link}</a></td>
                    </tr>
                  ))}
                </tbody>
          </table>
          <br />
          <table className='table' data-aos="fade-up" data-aos-duration="1000">
                <thead>
                  <tr>
                    <th scope="col">{this.props.biography('biography.office')}</th>
                    <th scope="col">{this.props.biography('biography.posrow')}</th>
                    <th scope="col">{this.props.biography('biography.demand')}</th>
                  </tr>
                </thead>
                <tbody>
                  {works.map((info) => (
                      <tr>
                      <th scope="row"><a href={info.link}><img src={info.logo} alt="" style={{width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: `solid 2px ${element.text}`}}/></a><br /> {this.props.biography(`biography.${info.title}`)}</th>
                      <td>{this.props.biography(`biography.${info.speciality}`)}</td>
                      <td>{this.props.biography(`biography.${info.demand}`)}</td>
                    </tr>
                  ))}
                </tbody>
          </table>
          </div>
        </div>

        
      </div>
    )
  }
}
