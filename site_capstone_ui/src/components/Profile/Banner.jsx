import React, { Component } from 'react'
//import logo from '../Components/public/image/maxresdefault.jpg';
//import profilepic from '../../assets/rsz_profilep.jpg';
//import book from '../../assets/recipebook.jpg'
import picfood from '../../assets/picfood.jpg'



class Banner extends Component {
    render() {
        return (
          <section className="container-banner">
            
            <div className="banner-intro">
              <div className="banner-blurb">
                <span align="left">John Doe</span>
                <span align="left" className="bio-heading">
                Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
                </span>
              </div>
              <div className="profile-img">
                <img src={picfood} alt="food_picture"></img>
              </div>
            </div>
            <div class="panel-body bio-graph-info">
              <div class="row">
                  <div class="bio-row">
                      <span>Country: </span> 
                      <span2>United States</span2>
                  </div>
                  
                  <div class="bio-row">
                      <span>Birthday:</span>
                      <span2> 13 July 1997</span2>
                  </div>
                  <div class="bio-row">
                      <span>Occupation: </span>
                      <span2> UI Designer</span2>
                  </div>
                  <div class="bio-row">
                      <span>Email: </span> 
                      <span2>johndoe@flatlab.com</span2>
                  </div>
              </div>
              
          </div>
          </section>
        );
    }
}

export default Banner

//<img id="profilepic" src={profilepic}  alt="profilepic"/>