import React, { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import ScollTrigger from 'gsap/ScrollTrigger'

import s1 from '../music/goku.mp3'
import s2 from '../music/vegeta.mp3'
import s3 from '../music/jiren.mp3'
import s4 from '../music/toppo.mp3'

function Dragonball() {
  
  useEffect(() => {

  },[])

  const [playing,SetPlaying] = useState(false)
  const [playing2,SetPlaying2] = useState(false)
  const [playing3,SetPlaying3] = useState(false)
  const [playing4,SetPlaying4] = useState(false)

  const audioPlayer1 = useRef(null)
  const audioPlayer2 = useRef(null)
  const audioPlayer3 = useRef(null)
  const audioPlayer4 = useRef(null)

  const handlePlay1 = e => {
    audioPlayer1.current.volume = 0.4
    if (!playing) {
      audioPlayer1.current.play()
      
    } else {
      audioPlayer1.current.pause()
    }
    SetPlaying(!playing)
  }

  const handlePlay2 = e => {
    audioPlayer2.current.volume = 0.4
    
    if (!playing2) {
      audioPlayer2.current.play()
      
    } else {
      audioPlayer2.current.pause()
    }
    SetPlaying2(!playing2)
  }
  const handlePlay3 = e => {
    audioPlayer3.current.volume = 0.4
    
    if (!playing3) {
      audioPlayer3.current.play()
      
    } else {
      audioPlayer3.current.pause()
    }
    SetPlaying3(!playing3)
  }
  
  const handlePlay4 = e => {
    audioPlayer4.current.volume = 0.4
    
    if (!playing4) {
      audioPlayer4.current.play()
    } else {
      audioPlayer4.current.pause()
    }
    SetPlaying4(!playing4)
  }


  const ITEMS = [
    {name:"Son Goku",img:"./images/goku2.gif",options:["Ultra Instinct","Super Saiyan Blue","Super Saiyan God"]},
    {name:"Vegeta",img:"./images/vegeta.gif",options:["Super Saiyan God Blue","Super Saiyan Blue","Super Saiyan 3"]},
    {name:"Jiren",img:"./images/jiren.gif",options:["Ultra Instinct","Super Saiyan Blue","Super Saiyan God"]},
    {name:"Toppo",img:"./images/toppo.gif",options:["Ultra Instinct","Super Saiyan Blue","Super Saiyan God"]},
  ]

  const [index,setIndex] = useState(0)

  const handleUp = e => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - 1
    );
  }

  const handleDown = e => {
    setIndex((prevIndex) =>
      prevIndex === ITEMS[0].options.length - 1 ? prevIndex : prevIndex + 1
    );
  }
  
  return (  
      <div className='dragon-container'>
        <div className="banner">
          <div className="image">
            <div className="imgB">
              <img src="./images/black2.png" alt="" />
            </div>
          </div>
          <div className="banner-title">
            <div className="title"> DRAGON BALL Z </div>
            <div className="sub-images">
              <div className="gif">
                <div className="t"><img src="./images/goku2.gif" alt="" /></div>
                <div className="p">
                  <div className="play" onClick={e => handlePlay1()}>
                    {
                      playing ? <>
                        <img src="./images/pause.png" alt="" />
                      </> : <>
                        <img src="./images/play.png" alt="" />
                      </>
                    }
                    <audio ref={audioPlayer1} src={s1}></audio>
                  </div>
                  <div className="line"></div>
                </div>
              </div>
              <div className="gif">
                <div className="t"><img src="./images/vegeta.gif" alt="" /></div>
                <div className="p">
                  <div className="play" onClick={e => handlePlay2()}>
                    {
                      playing2 ? <>
                        <img src="./images/pause.png" alt="" />
                      </> : <>
                        <img src="./images/play.png" alt="" />
                      </>
                    }
                    <audio  ref={audioPlayer2} src={s2}></audio>
                  </div>
                  <div className="line"></div>
                </div>
              </div>
              <div className="gif">
                <div className="t"><img src="./images/jiren.gif" alt="" /></div>
                <div className="p">
                  <div className="play" onClick={e => handlePlay3()}>
                    {
                      playing3 ? <>
                        <img src="./images/pause.png" alt="" />
                      </> : <>
                        <img src="./images/play.png" alt="" />
                      </>
                    }
                    <audio  ref={audioPlayer3} src={s3}></audio>
                  </div>
                  <div className="line"></div>
                </div>
              </div>
              <div className="gif">
                <div className="t"><img src="./images/toppo.gif" alt="" /></div>
                <div className="p">
                  <div className="play" onClick={e => handlePlay4()}>
                    {
                      playing4 ? <>
                        <img src="./images/pause.png" alt="" />
                      </> : <>
                        <img src="./images/play.png" alt="" />
                      </>
                    }
                    <audio  ref={audioPlayer4} src={s4}></audio>
                  </div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="characters-skills">
          <div className="char">
            <div className="image">
              <div className="imgB"><img src="./images/goku2.gif" alt="" /></div>
            </div>
            <div className="name-skills">
              <div className="name"> 
              <h3> 
                Son Goku 
              </h3>
              </div>
              <div className="skills">
                <div className="up" onClick={e => handleUp(e)}><img src="./images/up.png" alt="" /></div>
                <div className="down" onClick={e => handleDown(e)}><img src="./images/down.png" alt="" /></div>
                <div className="wrapper">
                  <div className="skillsWrapper" style={{display:"block",transform:`translateY(${-index*100}%)`}}>
                    <div className="s">ULTRA INSTINCT</div>
                    <div className="s">Super Saiyan 4</div>
                    <div className="s">Super Saiyan God</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="char">
            <div className="image">
              <div className="imgB"><img src="./images/vegeta.gif" alt="" /></div>
            </div>
            <div className="name-skills">
              <div className="name"> 
              <h3> 
                VEGETA
              </h3>
              </div>
              <div className="skills">
                <div className="up" onClick={e => handleUp(e)}><img src="./images/up.png" alt="" /></div>
                <div className="down" onClick={e => handleDown(e)}><img src="./images/down.png" alt="" /></div>
                <div className="wrapper">
                  <div className="skillsWrapper" style={{display:"block",transform:`translateY(${-index*100}%)`}}>
                    <div className="s">Super Saiyan God Blue</div>
                    <div className="s">Super Saiyan Blue</div>
                    <div className="s">Super Saiyan 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="char">
            <div className="image">
              <div className="imgB"><img src="./images/jiren.gif" alt="" /></div>
            </div>
            <div className="name-skills">
              <div className="name"> 
              <h3> 
                JIREN
              </h3>
              </div>
              <div className="skills">
                <div className="up" onClick={e => handleUp(e)}><img src="./images/up.png" alt="" /></div>
                <div className="down" onClick={e => handleDown(e)}><img src="./images/down.png" alt="" /></div>
                <div className="wrapper">
                  <div className="skillsWrapper" style={{display:"block",transform:`translateY(${-index*100}%)`}}>
                    <div className="s">Ultra God of Destruction</div>
                    <div className="s">God of Destruction</div>
                    <div className="s">Meditation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="char">
            <div className="image">
              <div className="imgB"><img src="./images/toppo.gif" alt="" /></div>
            </div>
            <div className="name-skills">
              <div className="name"> 
              <h3> 
                TOPPO
              </h3>
              </div>
              <div className="skills">
                <div className="up" onClick={e => handleUp(e)}><img src="./images/up.png" alt="" /></div>
                <div className="down" onClick={e => handleDown(e)}><img src="./images/down.png" alt="" /></div>
                <div className="wrapper">
                  <div className="skillsWrapper" style={{display:"block",transform:`translateY(${-index*100}%)`}}>
                    <div className="s">God of Destruction</div>
                    <div className="s"> Mad Toppo </div>
                    <div className="s"> Justice </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Dragonball