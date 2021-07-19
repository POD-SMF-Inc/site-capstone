import React from 'react'
import "./SidebarP.css";

export default function SidebarP() {
    return (
        <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" ><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/rsz_profilep.jpg)'}} />
              <h5 id="colorlib-logo"><a href="index.html">John Doe</a></h5>
              <span className="email"><i className="icon-mail"></i> johndoe@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://github.com/POD-SMF-Inc" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                
              </ul>
            </nav>
            
          </aside>
        </div>
      </div>
    
 
    )
}