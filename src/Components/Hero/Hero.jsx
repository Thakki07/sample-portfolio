import React from 'react'
import './Hero.css'
import thakki_img from '../../assets/thakki_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Hero () {
  return (
    <div id='home' className='hero'>
        <img src={thakki_img} alt=""  />
        <h1><span>I'm Thakivuddin,</span>front end developer based in Manglore.</h1>
        <p>I am a front-end developer from Mangalore, Karnataka, with experience in building and delivering several projects.</p>
        <div className="hero-action">
             <div className="hero-connect"><AnchorLink className='anchor-link' offset= {50} href='#contact'>Connect With Me </AnchorLink></div>
             <div className="hero-resume"><a   href="/resume.pdf"
               target="_blank"
               rel="noopener noreferrer"
               className="anchor-link">My Resume</a></div>
                   </div>
    </div>
  )
}

export default Hero