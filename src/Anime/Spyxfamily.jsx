import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Power2 } from 'gsap/all'

import music1 from '../music/spyxfamily2.mp3'

function Spyxfamily({true_}) {

    useEffect(() => {
        const cursor = document.querySelector('.spy-container .cursor')

        const spy = document.querySelector('.spy-container')

        spy.addEventListener("mousemove",function s(e) {
            var rect = spy.getBoundingClientRect()
            var x = e.clientX - rect.left; //x position within the element.
            var y = e.clientY - rect.top; 
            cursor.style.left = x + "px"
            cursor.style.top = y + "px"
        })

        const allText = document.querySelectorAll('.hide h2')

        gsap.to(allText,{
            y:"0%",
            ease:Power2.easeInOut,
            duration:2,
            stagger:0.05,
            delay:1.5,
        })

        const circleParent = document.querySelectorAll('.char')
        const allCircles = document.querySelectorAll('.char .circle')
        const circleInside = document.querySelectorAll('.circle .circle-inside')

        allCircles.forEach((elem,i) => {
            console.log(elem)
            // console.log(elem.children)
            elem.addEventListener('mouseenter',() => {
                console.log(elem.getBoundingClientRect())
                elem.addEventListener("mousemove",cursor)
                console.log(elem)
                circleInside[i].classList.add('enlarge')
                function cursor(e) {
                    var rect = elem.getBoundingClientRect()
                    var x = e.clientX - rect.left; //x position within the element.
                    var y = e.clientY - rect.top;  //y position within the element.
                    console.log(x,y)
                    circleInside[i].style.top = y + "px"
                    circleInside[i].style.left = x + "px"
                }
            })
            elem.addEventListener("mouseleave",() => {
                circleInside[i].classList.remove('enlarge')
            })
        })
        window.addEventListener('mousemove', event => {
            const audio = document.querySelector(".spy-container audio");
            audio.volume = 0.2;
            audio.play();
            audio.loop();
          });
    },[])

    return (
        <div className='spy-container'>
            <audio style={{display:"none"}}>
                <source src={music1} />
            </audio>
            <div className="cursor"></div>
            <div className="left">
                <div className="block1">
                    <div className="c1">
                        <img src="./images/fam1.jpg" alt="" />
                    </div>
                    <div className="c2">
                        <img src="./images/fam2.png" alt="" />
                    </div>
                    <div className="c3">
                        <img src="./images/fam3.jpg" alt="" />
                    </div>
                    <div className="c4">
                        <img src="./images/fam4.png" alt="" />
                    </div>
                    <div className="c5">
                        <img src="./images/fam5.jpg" alt="" />
                    </div>
                    <div className="c1">
                        <img src="./images/fam1.jpg" alt="" />
                    </div>
                    <div className="c2">
                        <img src="./images/fam2.png" alt="" />
                    </div>
                    <div className="c3">
                        <img src="./images/fam3.jpg" alt="" />
                    </div>
                    <div className="c4">
                        <img src="./images/fam4.png" alt="" />
                    </div>
                    <div className="c5">
                        <img src="./images/fam5.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="mid">

                <div className="char">
                    <div className="item1">
                        <div className="circle">
                            <div className="circle-inside"></div>
                            <div className="name">
                                <div className="hide"> 
                                    <h2> LOID FORGER</h2>
                                </div>
                            </div>
                            <div className="identity">
                                <div className="hide"> 
                                    <h2> REAL IDENTITY: SPY </h2>
                                </div>
                            </div>
                        <img src="./images/loid.png" alt="" />
                        </div>
                    </div>
                    <div className="item2">
                        <div className="center">
                            <div className="fake">
                                <div className="hide">
                                    <h2>
                                        PSYCHIATRIST 
                                    </h2>
                                </div> 
                            </div>
                            <div className="age">
                                <div className="hide">
                                    <h2>
                                        AGE:UNKNOWN 
                                    </h2> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="char">
                    <div className="item1">
                        <div className="center">
                            <div className="fake">
                                <div className="hide">
                                    <h2>
                                        CIVIL SERVANT 
                                    </h2>
                                </div> 
                            </div>
                            <div className="age">
                                <div className="hide">
                                    <h2>
                                        AGE:27 
                                    </h2> 
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="item2">
                        <div className="circle">
                            <div className="circle-inside"></div>
                            <div className="name">
                                <div className="hide"> 
                                    <h2> YOR FORGER</h2>
                                </div>
                            </div>
                            <div className="identity">
                                <div className="hide"> 
                                    <h2> REAL IDENTITY:ASSASSIN </h2>
                                </div>
                            </div>
                        <img src="./images/yor.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="char">
                    <div className="item1">
                        <div className="circle">
                            <div className="circle-inside"></div>
                            <div className="name">
                                <div className="hide"> 
                                    <h2> ANYA FORGER</h2>
                                </div>
                            </div>
                            <div className="identity">
                                <div className="hide"> 
                                    <h2> REAL IDENTITY:ESPER </h2>
                                </div>
                            </div>
                        <img src="./images/anya.png" alt="" />
                        </div>
                    </div>
                    <div className="item2">
                        <div className="center">
                            <div className="fake">
                                <div className="hide">
                                    <h2>
                                        Orphange 
                                    </h2>
                                </div> 
                            </div>
                            <div className="age">
                                <div className="hide">
                                    <h2>
                                        AGE: 6 
                                    </h2> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="right">
                <div className="block2">
                    <div className="c1">
                        <img src="./images/fam1.jpg" alt="" />
                    </div>
                    <div className="c2">
                        <img src="./images/fam2.png" alt="" />
                    </div>
                    <div className="c3">
                        <img src="./images/fam3.jpg" alt="" />
                    </div>
                    <div className="c4">
                        <img src="./images/fam4.png" alt="" />
                    </div>
                    <div className="c5">
                        <img src="./images/fam5.jpg" alt="" />
                    </div>
                    <div className="c1">
                        <img src="./images/fam1.jpg" alt="" />
                    </div>
                    <div className="c2">
                        <img src="./images/fam2.png" alt="" />
                    </div>
                    <div className="c3">
                        <img src="./images/fam3.jpg" alt="" />
                    </div>
                    <div className="c4">
                        <img src="./images/fam4.png" alt="" />
                    </div>
                    <div className="c5">
                        <img src="./images/fam5.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spyxfamily