import React from "react";
import { useState } from 'react';
import {send} from 'emailjs-com';
import Carousel from "./Carousel.js";
import JSIcon from "../img/JS-icon.png";
import SQLIcon from "../img/sql-icon.png";
import kotlinIcon from "../img/kotlin-icon.png";
import photoShopIcon from "../img/photoshop icon.png";
import cssIcon from "../img/css-icon.png";
import angularIcon from "../img/Angular-icon.png";
import jqueryIcon from "../img/jquery-icon.png";
import cSharpIcon from "../img/C-icon.png";
import sassIcon from "../img/sass-icon.png";
import xdIcon from "../img/adobe-xd-icon.png";
import htmlIcon from "../img/html-icon.png";
import mailIcon from "../img/mail-icon.png";
import githubIcon from "../img/github-icon.png";
import linkedInIcon from "../img/linkedIn-icon.png";

function Home(props) {
  const [toSend, setToSend] = useState({
    from_name:'',
    reply_to: '',
    message:''
  });
  const [emailSent, setEmailSent] = useState(false) 

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    setEmailSent(true);
  }

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value})
  }
  
  return (
    <div style={{display: 'flow-root'}}>
      <div className="light-circle" id="circle-1"></div>
      <div className="dark-circle" id="hero-div"></div>
      <h1 id="hero-header">Christina Welch</h1>
      <h2 id="hero-h2">Bringing ideas to life with modern technology</h2>
      <div className="light-circle" id="circle-2"><img className="circle-img" src={JSIcon} alt="JavaScript Logo"/></div>
      <div className="dark-circle" id="circle-3"><img className="circle-img" src={SQLIcon} alt="SQL Logo"/></div>
      <div className="light-circle" id="circle-4"><img className="circle-img" src={kotlinIcon} alt="Kotlin Logo"/></div>
      <div className="light-circle" id="circle-5"><img className="circle-img" src={photoShopIcon} alt="PhotoShop Logo"/></div>
      <div className="dark-circle" id="circle-6"><img className="circle-img" src={cssIcon} alt="CSS Logo"/></div>
      <div className="dark-circle" id="circle-7"><img className="circle-img" src={angularIcon} alt="AngularJS Logo"/></div>
      <div id="img-me"></div>
      <div className="light-circle" id="circle-8"><img className="circle-img" src={jqueryIcon} alt="JQuery Logo"/></div>
      <div className="dark-circle" id="circle-9"><img className="circle-img" src={cSharpIcon} alt="C Sharp Logo"/></div>
      <div className="dark-circle" id="circle-10"><img className="circle-img" src={xdIcon} alt="Adobe XD Logo"/></div>
      <div className="light-circle" id="circle-11"><img className="circle-img" src={sassIcon} alt="SASS Logo"/></div>
      <div className="light-circle" id="circle-12"><img className="circle-img" src={htmlIcon} alt="HTML Logo"/></div>
      <div className="light-circle" id="contact-me">
        <h3>Contact Me</h3>
        <div>
        <a href='mailto: christinamawel@gmail.com' target="_blank" rel="noreferrer" className='contact-link'>
          <img className="circle-img contact-circle" src={mailIcon}/>
          <p className="contact-text">Email</p>
        </a>
        <a href='https://github.com/Christinamawel' target="_blank" rel="noreferrer" className='contact-link'>
          <img className="circle-img contact-circle" src={githubIcon}/>
          <p className="contact-text">GitHub</p>
        </a>
        <a href='https://www.linkedin.com/in/christina-marie-welch/' target="_blank" rel="noreferrer" className="contact-link">
          <img className="circle-img contact-circle" src={linkedInIcon}/>
          <p className="contact-text">LinkedIn</p>
        </a>
        </div>
      </div>
      <div id="project-carousel-container">
        <Carousel items={props.projectsArray} title='Check Out My Projects'/>
      </div>
      <div className="dark-circle" id="about-me-div"></div>
      <p id="about-me-p">
        &ensp; After being layed off due to covid I decided to study software development full time and developed a passion for creating intuitive seamless software for users. I began studying on my own learning the basics like HTML, CSS, and Javascript. I also studied UI design and became skilled with Adobe suite programs like Adobe Illustrator, Photoshop and XD. <br/>
        &ensp; I then began studying at Epicodus, a coding school, where I pair programmed with my peers most days, helping me see the benefits of using teamwork to code and gained the ability to communicate my thought processes and code to others. During my time at Epicodus I created over 50 different projects with the help of my peers, and solidified my knowledge of the basics of programming as well as learning more Tools and languages like Git, Webpack, TDD testing with Jest, C#, .net, SQL, and ReactJs.<br/>
        &ensp; After Epicodus I began an internship for Off the Record Inc. where I learned to use Typescript, Angular JS, as well as a bit of backend Java, while working in a large company codebase. There I created customer facing changes within my first few weeks and developed a much better understanding of coding with a professional team in a large real world application.<br/>
        &ensp; I am a naturally curious learner and continued to learn more on my own while going through Epicodus and my internship as well. I began to study mobile development with Kotlin in android studio, as well as developing my CSS and React skills further. I find answers to my own questions and have become adaptable to whatever Tools and languages I pick up without needing the direct attention of others.<br/>
        &ensp; I came back to Epicodus after my internship, now as an instructor, helping many students through the coursework, and providing feedback for their projects. I have helped add to the curriculum as well, creating video tutorials for future students.<br/>
        &ensp; Software development is something that can be difficult to tackle at times but it has been one of the most rewarding things I have ever done. I hold growth as one of my highest values and will always continue to grow both as a person and as a developer and I look forward to help create more engaging, and user friendly applications for many years to come.
      </p>
      <div className="light-circle" id="circle-13">
        <p>About Me</p>
      </div>
      <div className="light-circle" id="circle-14"></div>
      <div className="light-circle" id="circle-15"></div>
      <div id="email-form-background">
        {emailSent ? 
        <p id="email-form-reply">Thank you for contacting me! I will reply as soon as I can and I look forward to working with you.</p> :
        <form id="email-form" onSubmit={onSubmit}>
        <div>
          <div>
            <p>Name</p>
            <input 
            className="top-email-input" 
            type="text" 
            name="from_name" 
            value={toSend.from_name} 
            onChange={handleChange}/>
          </div>
          <div>
            <p>E-mail</p>
            <input 
            className="top-email-input" 
            type="text"
            name="reply_to" 
            value={toSend.reply_to} 
            onChange={handleChange}/>
          </div>
        </div>
        <div id='email-form-message-div'>
          <p id="email-form-message-p">Message</p>
          <textarea 
          form="email-form" 
          className="email-message-input"
          name="message"
          value={toSend.message}
          onChange={handleChange} 
          size="50"/>
        </div>
        <button className="form-btn" type='submit'>Contact Me</button>
        </form>
        }
      </div>
    </div>
  )
}

export default Home;