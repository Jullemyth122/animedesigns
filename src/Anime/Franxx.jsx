import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Expo } from 'gsap/all'
function Franxx() {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = document.querySelector('.franxx-container')

    gsap.to(container,{
      "--percentage-bg":"100%",
      // ease:"none",
      scrollTrigger:{
        trigger:container,
        start:"top top",
        end:"bottom top",
        // markers:true,
        scrub:true,
        toggleActions:"play reverse none none"
      }
    })

  const allPartners = document.querySelectorAll('.partner')
  
  const timeline = gsap.timeline({})

  allPartners.forEach((elem,i) => {
    
    gsap.to(elem,{
      "--dash-in":"100%",
      "--short-dash":"80%",
      ease:Expo.easeOut,
      duration:1,
      scrollTrigger:{
        trigger:elem.children[0],
        start:"bottom bottom",
        toggleActions:"play reverse play reverse"

      }
    })

    gsap.to(elem.children[0],{
      left:"0%",
      opacity:1,
      ease:Expo.easeOut,
      duration:2,
      delay:1,
      scrollTrigger:{
        trigger:elem.children[0],
        start:"bottom bottom",
        toggleActions:"play reverse play reverse"

      }
    })
    gsap.to(elem.children[3],{
      right:"0%",
      ease:Expo.easeOut,
      duration:2,
      opacity:1,
      delay:1,
      scrollTrigger:{
        trigger:elem.children[3],
        start:"bottom bottom",
        toggleActions:"play reverse play reverse"

      }
    })
  })

  },[])

  return (
    <div>
      <div className="franxx-container">
        <div className="partner">
          <div className="left-img"> <img src="./images/hiro.png" alt="" /> </div>
          <div className="left-text">
            <h2> HIRO </h2>
          </div>
          <div className="right-text">
            <h2> ZEROTWO </h2>
          </div>
          <div className="right-img"> <img src="./images/hiro2.png" alt="" /> </div>
        </div>
        <div className="partner">
          <div className="left-img"> <img src="./images/hiro3.png" alt="" /> </div>
          <div className="left-text">
            <h2> ICHIGO </h2>
          </div>
          <div className="right-text">
            <h2> Yuchiiro </h2>
          </div>
          <div className="right-img"> <img src="./images/hiro6.png" alt="" /> </div>
        </div>
        <div className="partner">
          <div className="left-img"> <img src="./images/hiro8.png" alt="" /> </div>
          <div className="left-text">
            <h2> Mutsumi </h2>
          </div>
          <div className="right-text">
            <h2> Nanami </h2>
          </div>
          <div className="right-img"> <img src="./images/hiro9.png" alt="" /> </div>
        </div>
        <div className="partner">
          <div className="left-img"> <img src="./images/hiro7.png" alt="" /> </div>
          <div className="left-text">
            <h2> Mitsuru </h2>
          </div>
          <div className="right-text">
            <h2> Kokoro </h2>
          </div>
          <div className="right-img"> <img src="./images/hiro12.png" alt="" /> </div>
        </div>
        <div className="partner">
          <div className="left-img"> <img src="./images/hiro5.png" alt="" /> </div>
          <div className="left-text">
            <h2> 9'a </h2>
          </div>
          <div className="right-text">
            <h2> 9'b </h2>
          </div>
          <div className="right-img"> <img src="./images/hiro13.png" alt="" /> </div>
        </div>
        <div className="partner">
          <div className="left-img"> <img src="./images/hiro4.png" alt="" /> </div>
          <div className="left-text">
            <h2> 001 </h2>
          </div>
          <div className="right-text">
            <h2> Hiro </h2>
          </div>
          <div className="right-img"> <img src="./images/hiro.png" alt="" /> </div>
        </div>
      </div>
    </div>
  )
}

export default Franxx