import React from 'react'
import image1 from "../Utils/image1.png";
import arrow1 from "../Utils/Arrow1.png";
import image2 from "../Utils/image2.png";
import arrow2 from "../Utils/Arrow2.png";
import image3 from "../Utils/image3.png";
import arrow3 from "../Utils/Arrow3.png";
import image4 from "../Utils/image4.png";
import arrow4 from "../Utils/Arrow4.png";



export default function Frame4() {
  return (
    <div className='main-div absolute w-full bg-[#393285]'>



      <div className=' subdiv1 flex justify-center items-center'>
        <img className="div1-img1" src={image1} alt="pic1" />

      </div>
      <div className='subdiv2 relative  flex justify-between'>
        <img className="div2-img1  " src={arrow4} alt="" />

        <img className="div2-img2 " src={arrow1} alt="" />
      </div>
      <div className='subdiv3 flex justify-between'>
        <img className="div3-img1  " src={image4} alt="pic1" />
        <img className="div3-img2 " src={image2} alt="" />
      </div>

      <div className='subdiv4 flex justify-between'>
        
        <img className="div4-img1  " src={arrow3} alt="" />
        <img className="div4-img2 " src={arrow2} alt="" />
      </div>

      <div className='subdiv5 flex justify-center items-center'>
        <img className="div5-img1 " src={image3} alt="" />
      </div>
      

    </div>



  )
}
