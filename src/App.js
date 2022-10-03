import React from "react";
import JSIcon from "./img/JS-icon.png";
import SQLIcon from "./img/sql-icon.png";
import kotlinIcon from "./img/kotlin-icon.png";
import photoShopIcon from "./img/photoshop icon.png";
import cssIcon from "./img/css-icon.png";
import angularIcon from "./img/Angular-icon.png";
import jqueryIcon from "./img/jquery-icon.png";
import cSharpIcon from "./img/C-icon.png";
import sassIcon from "./img/sass-icon.png";
import xdIcon from "./img/adobe-xd-icon.png";
import htmlIcon from "./img/html-icon.png";

function App() {
  return (
    <div className="App">
      <div className="light-circle" id="circle-1"></div>
      <div className="dark-circle" id="hero-div"></div>
      <h1 id="hero-header">Christina Welch</h1>
      <h2 id="hero-h2">Bringing ideas to life with modern technology</h2>
      <div className="light-circle" id="circle-2"><img className="circle-img" src={JSIcon} alt="JavaScript Logo"/></div>
      <div className="dark-circle" id="circle-3"><img className="circle-img" src={SQLIcon} /></div>
      <div className="light-circle" id="circle-4"><img className="circle-img" src={kotlinIcon} /></div>
      <div className="light-circle" id="circle-5"><img className="circle-img" src={photoShopIcon} /></div>
      <div className="dark-circle" id="circle-6"><img className="circle-img" src={cssIcon} /></div>
      <div className="dark-circle" id="circle-7"><img className="circle-img" src={angularIcon} /></div>
      <div id="img-me"></div>
      <div className="light-circle" id="circle-8"><img className="circle-img" src={jqueryIcon} /></div>
      <div className="dark-circle" id="circle-9"><img className="circle-img" src={cSharpIcon} /></div>
      <div className="dark-circle" id="circle-10"><img className="circle-img" src={xdIcon} /></div>
      <div className="light-circle" id="circle-11"><img className="circle-img" src={sassIcon} /></div>
      <div className="light-circle" id="circle-12"><img className="circle-img" src={htmlIcon} /></div>
      <div className="light-circle" id="contact-me">
        <h3>Contact Me</h3>
        <div id="contact-me-flex">
        <div className="contact-circle"><img className="circle-img" src="#"/></div>
        <p>Email</p>
        <div className="contact-circle"><img className="circle-img" src="#"/></div>
        <p>GitHub</p>
        <div className="contact-circle"><img className="circle-img" src="#"/></div>
        <p>LinkedIn</p>
        </div>
      </div>
      <div className="dark-circle" id="about-me-div"></div>
      <div className="light-circle" id="circle-13"></div>
      <div className="light-circle" id="circle-14"></div>
    </div>
  );
}

export default App;
