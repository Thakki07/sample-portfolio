import React from 'react'
import './Footer.css'
import profile_img from '../../assets/profile_img.png'
import instagram_icon from '../../assets/instagram_icon.webp'
function Footer() {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                    <img src={profile_img} alt="Logo" style={{ height: '40px', objectFit: 'contain',}} />
                    <p>I am a front-end developer from Mangalore, Karnataka, with experience in building and delivering several projects.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-subscribe"> <a href="https://www.instagram.com/thakki_07/" style={{textDecoration:'none',color:'white'}}><p>Follow Me On</p></a><img src= {instagram_icon} alt="" /> </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
            © 2023 Thakivuddin. All rights reserved.
            </p>
            <div className="footer-bottom-right"><p>Term of Service</p>
            <p>Privacy Policy</p> 
            <p>Connect With Me</p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer