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
                <span align="left">
                Hi, my name is John Doe and I’m a college student looking for healthy meals. 
                </span>
              </div>
              <div className="profile-img">
                <img src={picfood} alt="food_picture" ></img>
              </div>
            </div>
          </section>
        );
    }
}

export default Banner

//<img id="profilepic" src={profilepic}  alt="profilepic"/>