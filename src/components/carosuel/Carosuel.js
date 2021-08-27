import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Data } from './Data'

const CarosuelArea = styled.section`
    padding: 4rem 2rem;
    
`
const CarouselContainer = styled.div`
    background-color: gray;
    width: 100%;

`
const CarosuelContent = styled.section`
    width: 100%;
    display: flex;
    overflow: hidden;
    /* max-width: 1200px;
    width: 100%;
    position: absolute;
    top: 50%;
     left: 50%;
    transform:translate(2%, -50%); */
`
const CarosuelItem = styled.div`
    width: 100%;
    height: 80px;
    margin: 5px;
    padding: 10px;
    
`
const Item = styled.div`
    min-width: 100%;
    height: 80px;
    font-size: 2rem;
    font-weight: 300;
    text-align:center;
    margin-top:-10px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    
`

function Carosuel() {
    const settings = {
        speed:2000,
        infinite:true,
        slidesToShow:6,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }

    return (
        <CarosuelArea>
            <CarouselContainer>
                <Slider {...settings}>
                    {Data.map((item, i)=>{
                       return <CarosuelItem key={i}>
                           <Item>{item.title}</Item>
                       </CarosuelItem>
                   })}
                </Slider>
                   
            </CarouselContainer>
        </CarosuelArea>
        
        
            
    )
}

export default Carosuel;
