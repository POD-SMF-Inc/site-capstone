import React, { useState, }  from 'react'
import profilepic from '../../assets/rsz_profilep.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import handleOnClick from "../Profile/Profile";
import sidepic from "../../assets/Group11.png";
import {
  
    faGithub,
    faLinkedin,
    
  } from "@fortawesome/free-brands-svg-icons";
import {  faUser } from '@fortawesome/free-solid-svg-icons';

export default class Sidebar extends React.Component {

  
  
    state = {
        isExpanded: this.props.isExpandedInitially,
        
      };

    
    render() {
        const {isExpanded} = this.state;
        
        return (

          <div className={ `sidebar `}>
          <div class="panel">
          <div class="user-heading round">
  
  
              

              <img
                            className="sidebarpic"
                            src={sidepic}
                            alt="logo_picture"
             
            ></img>
            
          </div>
          {isExpanded && (
          <ul class="nav nav-pills nav-stacked">
              <li class="active"><a  href="/profile" 
                >
          
                  <FontAwesomeIcon icon={faUser} size="1.5x" /> <i class="fa fa-user"></i> Profile</a></li>
              <li><a  href="https://github.com/POD-SMF-Inc/site-capstone"
                  className="github social"
                >
                  <FontAwesomeIcon icon={faGithub} size="1.5x" /> <i class="fa fa-calendar"></i> Github </a></li>
              <li><a href="https://www.linkedin.com/school/codepath/"
                  className="linkin social"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="1.5x" /> <i class="fa fa-linkedin"></i> Linkedin</a></li>
          </ul>
      
      )}
      <button
              className="side-btn"
              onClick={() => this.setState({ isExpanded: !isExpanded })}
            >
              {isExpanded ? "Collapse" : "Expand"}
            </button>
            </div>
            </div>
        );
    }
}




