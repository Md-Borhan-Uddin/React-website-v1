import React, { useState,useRef, useEffect } from 'react'
import {HeroSection, HeroContainer, HeroContent, HeroHeading, HeroOverview, HeroBtn, RightArrow, LeftArrow, Image, HeroSlider, HeroSlide} from "./HeroSection.element"


function Slider({slider}){
    const [current, setCurrent] = useState(0)
    const timeout = useRef(null)
    const length = slider.length

    useEffect(()=>{
        timeout.current = setTimeout(()=>{
            return setCurrent(current===(length-1) ? 0:current+1)}, 2000)
            timeout.current = null
        return ()=>{
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }


    })
    const nextSlide = ()=>{
        return setCurrent(current===(length-1) ? 0:current+1)
    }
    
    const previousSlide = ()=>{
        return setCurrent(current===0?length-1:current-1)
    }

    return (
        <HeroSection>
            <HeroContainer>
                
                    {slider.map((item, i)=>{
                        return (
                            <HeroSlide key={i}>
                                {i===current &&
                                    <HeroSlider>
                                        <Image src={item.image}></Image>
                                        <HeroContent>
                                            <HeroHeading>{item.heading}</HeroHeading>
                                            <HeroOverview>{item.overView}</HeroOverview>
                                            <HeroBtn>View Room</HeroBtn>
                                        </HeroContent>
                                    </HeroSlider>
                                } 
                            </HeroSlide>
                       
                        )
                    })}
                    
                
                <RightArrow onClick={nextSlide}>
                    <i className="fas fa-arrow-right"></i>
                </RightArrow>
                <LeftArrow onClick={previousSlide}>
                    <i className="fas fa-arrow-left"></i>
                </LeftArrow>
            </HeroContainer>
        </HeroSection>
    )

}


export default Slider;