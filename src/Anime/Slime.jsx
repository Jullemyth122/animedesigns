import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
function Slime() {
  
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let height = document.querySelector('.parent').clientHeight
        let sectionsText1 = gsap.utils.toArray(".smalltext1 > div");
        let sections3 = gsap.utils.toArray(".block3 > div");
        let sectionsMain = gsap.utils.toArray(".big-block > div");
        
        // I figured this config object would make it easier for you to hook into
        let config = {
            markers:true,
            start: 0.9, // 66% of the viewport
            end: 0,   // 33% of the viewport
            onEnter: el => gsap.to(el, {opacity: 1}),
            onLeave: el => gsap.to(el, {opacity: 0.1}),
            onEnterBack: el => gsap.to(el, {opacity: 1}),
            onLeaveBack: el => gsap.to(el, {opacity: 0.1}),
        };

        let config2 = {
            markers:true,
            start: 0.99, // start viewport
            end: 0,   // end of viewport
            onEnter: el => gsap.to(el, {opacity: 1}),
            onLeave: el => gsap.to(el, {opacity: 0.1}),
            onEnterBack: el => gsap.to(el, {opacity: 1}),
            onLeaveBack: el => gsap.to(el, {opacity: 0.1})
        };
        
        function animateSection(sections, config, reverse) {
          let actionsTL = gsap.timeline();
          let scrollTween = gsap.timeline({
                scrollTrigger: {
                    trigger: ".parent",
                    pin: true,
                    scrub: 1,
                    onRefresh: self => {
                      actionsTL.clear(); // remove all existing
                      let startOffset = window.innerHeight * (reverse ? config.end : config.start),
                          endOffset = window.innerHeight * (reverse ? config.start : config.end),
                          totalDistance = sections[0].offsetHeight * (sections.length - 1),
                          orientedSections = sections.slice(0);
                      if (reverse) {
                        orientedSections.reverse(); // we're animating down (backwards), so elements will come into view the opposite way.
                      }
                      orientedSections.forEach((elem, i) => {
                        let halfHeight = elem.offsetHeight / 2;
                        startOffset += halfHeight; // center of element
                        endOffset += halfHeight;
                        let startPosition = startOffset / totalDistance,
                            endPosition = endOffset / totalDistance;
                        if (startOffset <= totalDistance) {
                          actionsTL.add(() => config[(self.direction < 0 && reverse) || (self.direction > 0 && !reverse)  ? "onLeaveBack" : "onEnter"](elem), startOffset / totalDistance);
                        }
                        if (endOffset <= totalDistance) {
                          actionsTL.add(() => config[(self.direction < 0 && reverse) || (self.direction > 0 && !reverse)  ? "onEnterBack" : "onLeave"](elem), endOffset / totalDistance);
                        }
                        startOffset += halfHeight;
                        endOffset += halfHeight;
                      });
                    },
                    end: () => `+=${height*4}px`
                  }
              });
            scrollTween.to(sections, {
                yPercent: (reverse ? 100 : -100) * (sections.length - 1),
                duration: 1,
                ease: "none", // <-- IMPORTANT!
            });
            scrollTween.add(actionsTL, 0);
        }
        
        animateSection(sectionsMain, config2);
        animateSection(sections3, config);
    },[])

    return (
        <div>
            <div className='slime-container'>
                {/* <div className="container">
                    <div className="parentOfItems"> */}
                        <div className="parent">
                            <div className="scrollUp"> SCROLL DOWN </div>
                            <div className="big-block">
                                <div className="big-1">
                                    <div className="top">
                                        <div className="img">
                                            <img src="./images/slime3.png" alt="" />
                                            <img src="./images/slime2.png" alt="" className='imagery' />
                                            <img src="./images/slime2.png" alt="" className='imagery2' />
                                        </div>
                                        <div className="title">
                                            <div className="mid">
                                                <div className="f-name"> Rimuru Tempest </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="title"> SKILLS </div>
                                        <div className="grid-skills">
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/veldora.png" alt="" />
                                                    <div className="text"> VELDORA </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/raphael.png" alt="" />
                                                    <div className="text"> RAPHAEL </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/uriel.png" alt="" />
                                                    <div className="text"> URIEL </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/beelzebu.png" alt="" />
                                                    <div className="text"> BEELZEBUB </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-2">
                                    <div className="top">
                                        <div className="img">
                                            <img src="./images/veldora.png" alt="" />
                                            <img src="./images/veldora2.png" alt="" className='imagery' />
                                            <img src="./images/veldora2.png" alt="" className='imagery2' />
                                        </div>
                                        <div className="title">
                                            <div className="mid">
                                                <div className="f-name"> Veldora Tempest </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="title"> SKILLS </div>
                                        <div className="grid-skills">
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/veldora3.png" alt="" />
                                                    <div className="text"> FAUST </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/veldora4.png" alt="" />
                                                    <div className="text"> APPRAISAL </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/veldora5.png" alt="" />
                                                    <div className="text"> Storm King </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/veldora.png" alt="" />
                                                    <div className="text"> Thought Accelaration </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-3">
                                    <div className="top">
                                        <div className="img">
                                            <img src="./images/diablo.jpg" alt="" />
                                        </div>
                                        <div className="title">
                                            <div className="mid">
                                                <div className="f-name"> Diablo </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="title"> SKILLS </div>
                                        <div className="grid-skills">
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/diablo.jpg" alt="" />
                                                    <div className="text"> Inversion of Truth </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/diablo2.png" alt="" />
                                                    <div className="text"> Demon Lord Haki </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/diablo3.png" alt="" />
                                                    <div className="text"> World of Temptation </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/diablo4.png" alt="" />
                                                    <div className="text"> Thought Acceleration </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-4">
                                    <div className="top">
                                        <div className="img">
                                            <img src="./images/benimaru.jpg" alt="" />
                                        </div>
                                        <div className="title">
                                            <div className="mid">
                                                <div className="f-name"> Benimaru </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="title"> SKILLS </div>
                                        <div className="grid-skills">
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/ben1.png" alt="" />
                                                    <div className="text"> Flare Lord </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/ben2.png" alt="" />
                                                    <div className="text"> Inspire Forces </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/ben3.png" alt="" />
                                                    <div className="text"> World of Flame </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/benimaru.jpg" alt="" />
                                                    <div className="text"> Thought Acceleration </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-5">
                                    <div className="top">
                                        <div className="img">
                                            <img src="./images/shion.jpg" alt="" />
                                        </div>
                                        <div className="title">
                                            <div className="mid">
                                                <div className="f-name"> Shion </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="title"> SKILLS </div>
                                        <div className="grid-skills">
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shion1.png" alt="" />
                                                    <div className="text"> World Manipulation </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shion2.png" alt="" />
                                                    <div className="text"> Magic Perception </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shion3.png" alt="" />
                                                    <div className="text"> Sword Ultimate </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shion.jpg" alt="" />
                                                    <div className="text"> Thought Acceleration </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-6">
                                    <div className="top">
                                        <div className="img">
                                            <img src="./images/shuna.jpg" alt="" />
                                        </div>
                                        <div className="title">
                                            <div className="mid">
                                                <div className="f-name"> Shuna </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="title"> SKILLS </div>
                                        <div className="grid-skills">
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shuna1.png" alt="" />
                                                    <div className="text"> World Manipulation </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shuna2.png" alt="" />
                                                    <div className="text"> Magic Perception </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shuna3.png" alt="" />
                                                    <div className="text"> Magic Manipulation </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shuna.jpg" alt="" />
                                                    <div className="text"> Repel Magics </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-1">
                                    <div className="top">
                                        <div className="img">
                                            <img src="./images/slime3.png" alt="" />
                                            <img src="./images/slime2.png" alt="" className='imagery2' />
                                            <img src="./images/slime2.png" alt="" className='imagery' />
                                        </div>
                                        <div className="title">
                                            <div className="mid">
                                                <div className="f-name"> Rimuru Tempest </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="title"> SKILLS </div>
                                        <div className="grid-skills">
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/veldora.png" alt="" />
                                                    <div className="text"> VELDORA </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/raphael.png" alt="" />
                                                    <div className="text"> RAPHAEL </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/uriel.png" alt="" />
                                                    <div className="text"> URIEL </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/beelzebu.png" alt="" />
                                                    <div className="text"> BEELZEBUB </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-2">
                                    <div className="top">
                                        <div className="img">
                                            <img src="./images/veldora.png" alt="" />
                                            <img src="./images/veldora2.png" alt="" className='imagery' />
                                            <img src="./images/veldora2.png" alt="" className='imagery2' />
                                        </div>
                                        <div className="title">
                                            <div className="mid">
                                                <div className="f-name"> Veldora Tempest </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="title"> SKILLS </div>
                                        <div className="grid-skills">
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/veldora3.png" alt="" />
                                                    <div className="text"> FAUST </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/veldora4.png" alt="" />
                                                    <div className="text"> APPRAISAL </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/veldora5.png" alt="" />
                                                    <div className="text"> Storm King </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/veldora.png" alt="" />
                                                    <div className="text"> Thought Acceleration </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-3">
                                    <div className="top">
                                        <div className="img">
                                            <img src="./images/diablo.jpg" alt="" />
                                        </div>
                                        <div className="title">
                                            <div className="mid">
                                                <div className="f-name"> Diablo </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="title"> SKILLS </div>
                                        <div className="grid-skills">
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/diablo.jpg" alt="" />
                                                    <div className="text"> Inversion of Truth </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/diablo2.png" alt="" />
                                                    <div className="text"> Demon Lord Haki </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/diablo3.png" alt="" />
                                                    <div className="text"> World of Temptation </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/diablo4.png" alt="" />
                                                    <div className="text"> Thought Acceleration </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-4">
                                    <div className="top">
                                        <div className="img">
                                            <img src="./images/benimaru.jpg" alt="" />
                                        </div>
                                        <div className="title">
                                            <div className="mid">
                                                <div className="f-name"> Benimaru </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="title"> SKILLS </div>
                                        <div className="grid-skills">
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/ben1.png" alt="" />
                                                    <div className="text"> Flare Lord </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/ben2.png" alt="" />
                                                    <div className="text"> Inspire Forces </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/ben3.png" alt="" />
                                                    <div className="text"> World of Flame </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/benimaru.jpg" alt="" />
                                                    <div className="text"> Thought Acceleration </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-5">
                                    <div className="top">
                                        <div className="img">
                                            <img src="./images/shion.jpg" alt="" />
                                        </div>
                                        <div className="title">
                                            <div className="mid">
                                                <div className="f-name"> Shion </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="title"> SKILLS </div>
                                        <div className="grid-skills">
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shion1.png" alt="" />
                                                    <div className="text"> World Manipulation </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shion2.png" alt="" />
                                                    <div className="text"> Magic Perception </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shion3.png" alt="" />
                                                    <div className="text"> Sword Ultimate </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shion.jpg" alt="" />
                                                    <div className="text"> Thought Acceleration </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="big-6">
                                    <div className="top">
                                        <div className="img">
                                            <img src="./images/shuna.jpg" alt="" />
                                        </div>
                                        <div className="title">
                                            <div className="mid">
                                                <div className="f-name"> Shuna </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="title"> SKILLS </div>
                                        <div className="grid-skills">
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shuna1.png" alt="" />
                                                    <div className="text"> World Manipulation </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shuna2.png" alt="" />
                                                    <div className="text"> Magic Perception </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shuna3.png" alt="" />
                                                    <div className="text"> Magic Manipulation </div>
                                                </div>
                                            </div>
                                            <div className="s">
                                                <div className="slideUp">
                                                    <img src="./images/shuna.jpg" alt="" />
                                                    <div className="text"> Repel Magics </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block3">
                                <div className="c1">
                                    <img src="./images/slime3.png" alt="" />
                                </div>
                                <div className="c2">
                                    <img src="./images/veldora.png" alt="" />
                                </div>
                                <div className="c3">
                                    <img src="./images/diablo.jpg" alt="" />
                                </div>
                                <div className="c4">
                                    <img src="./images/benimaru.jpg" alt="" />
                                </div>
                                <div className="c5">
                                    <img src="./images/shion.jpg" alt="" />
                                </div>
                                <div className="c6">
                                    <img src="./images/shuna.jpg" alt="" />
                                </div>
                                <div className="c1">
                                    <img src="./images/slime3.png" alt="" />
                                </div>
                                <div className="c2">
                                    <img src="./images/veldora.png" alt="" />
                                </div>
                                <div className="c3">
                                    <img src="./images/diablo.jpg" alt="" />
                                </div>
                                <div className="c4">
                                    <img src="./images/benimaru.jpg" alt="" />
                                </div>
                                <div className="c5">
                                    <img src="./images/shion.jpg" alt="" />
                                </div>
                                <div className="c6">
                                    <img src="./images/shuna.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div>
            </div> */}
        </div>
            
    )
}

export default Slime