import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Power2 } from 'gsap/all'
import Spyxfamily from './Spyxfamily'
import Slime from './Slime'
import Franxx from './Franxx'
import Healer from './Healer'
import Dragonball from './Dragonball'

function Introduction() {
    const cursorIntro2 = useRef()
    const [toggle,setToggle] = useState(false)
    const [NAME,SETNAME] = useState("")
    const [shown,setShown] = useState(false)
    // const [optionDetect,setOptionDetect] = useState(false)
    const handleClickITEM = e => {

        const tl = gsap.timeline()

        setToggle(!e)
        const cursorIntro = document.querySelector('.cursor')
        const options = document.querySelectorAll('.options')
        const navOptions = document.querySelector('.nav-options') 
    
        if (!e) {
            tl.to(options,{
                translateX:"-100%",
                ease:Power2.easeInOut,
                stagger:0.25,
                duration:1
            })            
            cursorIntro.classList.add('smaller')
            tl.to(navOptions,{
                display:'none',
                ease:"none",duration:0
            })
        } else {
            tl.to(navOptions,{
                display:'grid',
                ease:"none",duration:0.5
            })

            tl.fromTo(options,{
                translateX:"-100%"
            },{
                translateX:"0%",
                ease:Power2.easeInOut,
                stagger:0.25,
                duration:1
            })
            cursorIntro.classList.remove('smaller')
        }
        setShown(!shown)
        SETNAME("")
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        
        const cursorIntro = document.querySelector('.cursor')
        const options = document.querySelector('.introduction .nav-options')

        options.addEventListener("mousemove",function s(e) {
            var rect = options.getBoundingClientRect()
            var x = e.clientX - rect.left; //x position within the element.
            var y = e.clientY - rect.top; 
            cursorIntro.style.left = x + "px"
            cursorIntro.style.top = y + "px"
        })

        function OnSelect() {
            const optionsSelection = document.querySelectorAll('.options')
            optionsSelection.forEach((elem,i) => {
                // console.log(elem.children[1].children[0].children[0])
                elem.children[1].children[0].children[0].addEventListener("mouseleave",() => {
                    cursorIntro.removeChild(cursorIntro.lastChild)
                    // cursorIntro.innerHTML = ""
                })
    
                elem.children[1].children[0].children[0].addEventListener("mouseenter",() => {
                    // elem.children[1].children[0].children[0].classList.add('')
                    const createElement = document.createElement("h4")
                    createElement.innerHTML = elem.children[1].children[0].children[0].dataset.name
                    cursorIntro.appendChild(createElement)
                })
            })
            
        }

        OnSelect()
        
    },[])

    const handleName = e => {
        SETNAME(e)
        const tl = gsap.timeline()

        const options = document.querySelectorAll('.options')
        tl.to(options,{
            translateX:"-100%",
            ease:Power2.easeInOut,
            stagger:0.25,
            duration:1
        })            
        const navOptions = document.querySelector('.nav-options') 
        tl.to(navOptions,{
            display:'none',
            ease:"none",duration:0.5
        })
        setToggle(!toggle)
        const cursorIntro = document.querySelector('.cursor')
        cursorIntro.classList.add('smaller')
        setShown(!shown)
    }

    return (
        <div className='introduction'>
            <div className="hamburger">
                <div className="menu" onClick={e => handleClickITEM(toggle)}>
                    <button className="open">
                        <span></span>
                    </button>
                    <button className="close"></button>
                </div>
            </div>
            {/* {optionDetect ? <></> : <></>} */}
            <div className="nav-options">
                <div className="cursor" style={shown ? {display:"none"} : {display:"flex"}}></div>
                <div className="options">
                    <div className="img">
                        <img src="./images/slime.jpg" alt="" />
                    </div>
                    <div className="text">
                        <div className="hide" onClick = {e => handleName("Slime")}>
                            <h1 data-image="" data-name="SLIME"> Slime </h1>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div className="img">
                        <img src="./images/spyxfamily.png" alt="" />
                    </div>
                    <div className="text">
                        <div className="hide" onClick = {e => handleName("Spy")}>
                            <h1 data-image="" data-name="SPY X FAMILY "> SPYXFAMILY </h1>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div className="img">
                        <img src="./images/darling.jpg" alt="" />
                    </div>
                    <div className="text">
                        <div className="hide" onClick = {e => handleName("Darling")}>
                            <h1 data-image="" data-name="DARLING IN THE FRANXX"> DARLING IN THE FRANXX </h1>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div className="img">
                        <img src="./images/redo of healer.jpg" alt="" />
                    </div>
                    <div className="text">
                        <div className="hide" onClick = {e => handleName("redo")}>
                            <h1 data-image="" data-name="REDO OF HEALER"> REDO OF HEALER </h1>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div className="img">
                        <img src="./images/dragon.jpg" alt="" />
                    </div>
                    <div className="text">
                        <div className="hide" onClick = {e => handleName("dragon")}>
                            <h1 data-image="" data-name="DRAGON BALL"> DRAGON BALL </h1>
                        </div>
                    </div>
                </div>
            </div>

            {NAME == "Spy" ? <> 
            <Spyxfamily></Spyxfamily>
            </> : <></>}
            {NAME == "Slime" ? <> 
            <Slime></Slime>
            </> : <></>}
            {NAME == "Darling" ? <> 
            <Franxx></Franxx>
            </> : <></>}
            {NAME == "redo" ? <> 
            <Healer></Healer>
            </> : <></>}
            {NAME == "dragon" ? <> 
            <Dragonball></Dragonball>
            </> : <></>}
            
        </div>
    )
}

export default Introduction