import React, { useEffect, useState } from 'react'
import {HeroSection, HeroContainer, HeroContent, HeroHeading, HeroOverview, HeroBtn, RightArrow, LeftArrow, Image, HeroSlider} from "./HeroSection.element"
// import {SliderData as slider} from './SliderData'

function HeroArea({slider}) {
    const [current, setCurrent] = useState(0)
    const length = slider.length

    setTimeout(()=>{
        return setCurrent(current===(length-1) ? 0 : current+1)
    }, 1000)

    // useEffect(()=>{
    //     console.log(current);
    //     setTimeout(()=>{
            
    //         return setCurrent(current===(length-1) ? 0:current+1)}, 
            
    //     2000)
    // }, [current, length])
    
    const nextSlide = ()=>{
        return setCurrent(current===(length-1) ? 0:current+1)
    }
    
    const previousSlide = ()=>{
        return setCurrent(current===0?length-1:current-1)
    }


    return (
        <>
            <HeroSection>
                <RightArrow onClick={nextSlide}>
                    <i className="fas fa-arrow-right"></i>
                </RightArrow>
                <LeftArrow onClick={previousSlide}>
                <i className="fas fa-arrow-left"></i>
                </LeftArrow>
                <HeroContainer>
                    {slider.map((item, i)=>{
                            return (
                                <HeroSlider key={i}>
                                {i===current&& <HeroContent>
                                    <Image src={item.image} />
                                    <HeroHeading>{item.heading}</HeroHeading>
                                    <HeroOverview>{item.overView}</HeroOverview>
                                    <HeroBtn>Visite Room</HeroBtn>
                                </HeroContent> }    
                                </HeroSlider>
                            )
                    })}
                    
                    
                </HeroContainer>
            </HeroSection>
        </>
    )
}

export default HeroArea;
