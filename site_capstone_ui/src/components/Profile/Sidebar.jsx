import React  from 'react'
import profilepic from '../../assets/rsz_profilep.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
    faGithub,
    faLinkedin,
    
  } from "@fortawesome/free-brands-svg-icons";
import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons';

export default class Sidebar extends React.Component {
    state = {
        isExpanded: this.props.isExpandedInitially,
      };
    
    render() {
        const {isExpanded} = this.state;
        //const {elements = 10} = this.props;
        return (
         /* <div className="sidebar">
            <img
              className="profilepic"
              src={profilepic}
              alt="profile_picture"
            ></img>
            <h5 id="colorlib-logo">John Doe</h5>
            <span className="email">
                  <i className="icon-mail"></i> johndoe@gmail.com
            </span>
            {isExpanded && (
              <div className="fauxNav">
                <h5 id="colorlib-logo">John Doe</h5>
                <span className="email">
                  <i className="icon-mail"></i> johndoe@gmail.com
                </span>
                <br />
                <a
                  href="https://github.com/POD-SMF-Inc/site-capstone"
                  className="github social"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/school/codepath/"
                  className="linkin social"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            )}
            <button
              className="side-btn"
              onClick={() => this.setState({ isExpanded: !isExpanded })}
            >
              {isExpanded ? "Collapse" : "Expand"}
            </button>
          </div>*/
          <div className="sidebar">
          <div class="panel">
          <div class="user-heading round">
            
              <img
              className="profilepic"
              src={profilepic}
              alt="profile_picture"
            ></img>
              
              <h5>John Doe</h5>
              <p>johndoe@theEmail.com</p>
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
                  <FontAwesomeIcon icon={faLinkedin} size="1.5x" /> <i class="fa fa-edit"></i> Linkedin</a></li>
              <li><a href="#" >
                  <FontAwesomeIcon icon={faEdit} size="1.5x" /> <i class="fa fa-edit"></i> Edit profile</a></li>
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

/*<a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
<br />
<a href="#container-about"><i className="fa fa-fw fa-user"></i>About</a>
<br />
<a href="#skillheader"><i className="fa fa-fw fa-xing"></i>Skills</a>
<br />
<a id="protofolio-link" href="#Portfolio"><i className="fa fa-github-alt"></i>Projects</a> 
<br />
<a href="#contactnav"><i className="fa fa-fw fa-envelope"></i>Contact</a>
<br />*/

/*{Array.from(new Array(elements), (_, i) => (
                  <div key={i} className='fauxNavElement' />
                ))} */