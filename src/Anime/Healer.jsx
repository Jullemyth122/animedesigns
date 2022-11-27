import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function Healer() {
  const pinRef = useRef()
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    // const back = document.querySelector('.redo-container')
    const all = document.querySelectorAll('.redo-container .items')
    
    const list = [
      {x:"10%",y:"10%"},
      {x:"30%",y:"20%"},
      {x:"20%",y:"50%"},
      {x:"40%",y:"65%"},
      {x:"60%",y:"10%"},
      {x:"80%",y:"65%"},
      {x:"60%",y:"50%"},
      {x:"70%",y:"65%"}
    ]
    
    // console.log(back)

    // console.log(back == null)
    // console.log(back == undefined)
    let timeline = gsap.timeline({
        scrollTrigger:{
            trigger:pinRef.current,
            start:"top top",
            end:() => `${3000}px`,
            scrub:true,
            pin:true,
        }
    }
    )
    
    all.forEach((elem,i) => {
        // console.log(list[i].x,list[i].y)
      timeline.to(elem,{
        top:`${list[i].y}`,
        left:`${list[i].x}`,
        ease:"none",
      },0)
    })

  },[])

  return (
    <div>
      <div className="redo-container" ref={pinRef}
        >
          <div className="scrollDown">
            <img src="./images/mouse.png" alt="" />
          </div>
          <div className="items">
            <img src="./images/redo of healer.jpg" alt="" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <ion-icon name="play-circle-outline"></ion-icon>
            </a>
          </div>
          <div className="items">
            <img src="./images/redo2.png" alt="" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <ion-icon name="play-circle-outline"></ion-icon>
            </a>
          </div>
          <div className="items">
            <img src="./images/redo3.png" alt="" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <ion-icon name="play-circle-outline"></ion-icon>
            </a>
          </div>
          <div className="items">
            <img src="./images/redo4.png" alt="" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <ion-icon name="play-circle-outline"></ion-icon>
            </a>
          </div>
          <div className="items">
            <img src="./images/redo5.png" alt="" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <ion-icon name="play-circle-outline"></ion-icon>
            </a>
          </div>
          <div className="items">
            <img src="./images/redo6.png" alt="" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <ion-icon name="play-circle-outline"></ion-icon>
            </a>
          </div>
          <div className="items">
            <img src="./images/redo7.png" alt="" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <ion-icon name="play-circle-outline"></ion-icon>
            </a>
          </div>
      </div>
    </div>

  )
}

export default Healer