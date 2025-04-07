import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

function MyWork() {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{return  <img key={index}src={work.w_img} />

            })}

        </div>
        <div className="mywork-showmore">
        <a href="/Soon.html" style={{textDecoration:'none' , color:'white'}}> <p>Show more</p></a>
        <a href="/Soon.html" style={{textDecoration:'none' , color:'white'}}>    <img src= {arrow_icon}alt="" /></a>
        </div>
    </div>
  )
}

export default MyWork