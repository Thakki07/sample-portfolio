import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import thakki_img from '../../assets/thakki_img.png'
function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={thakki_img} alt="profile" className="profile-img" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a Frontend Developer with experience working on various projects in the field. Each project has provided me with valuable learning experiences and has motivated me to continuously expand my knowledge and skills in front-end development</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the
                    enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'50%'}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:'70%'}}/></div>
                    <div className="about-skill"><p>Java Script</p><hr style={{width:'60%'}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:'50%'}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
               <h1>10+</h1>
               <p>PROJECTS ARE BUILT </p> 
            </div>
            <hr />
            <div className="about-achievement">
               <h1>3+</h1>
               <p> ADVANCED PROJECTS </p> 
            </div>
            <hr/>
            <div className="about-achievement">
               <h1>4+</h1>
               <p> HAPPY CLIENTS</p> 
            </div>
        </div>
    </div>
  )
}

export default About