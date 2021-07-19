import React from 'react'
//import "./IntroductionP.css";

export default function IntroductionP() {
    return (
    <div>
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
          <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                      <h1>Hi! <br />I'm John Doe</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1>I’m a college student looking for healthy meals.</h1>
                      <p><a className="btn btn-primary btn-learn" href="https://github.com/POD-SMF-Inc" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1>Software Engineer </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
        )
 }
