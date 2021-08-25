import styled from "styled-components";

export const HeroSection = styled.section`
    
    /* width: 100%; */
    height: 90vh;
    max-height: 1100px;
    position:relative;
    overflow: hidden;
    margin-top:-60px;

    /* @media screen and (max-width:576px){
        height: 70vh;
    } */

`
export const HeroContainer = styled.div`
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    overflow: hidden;
    display: flex;
    align-items:center;
    justify-content: center;
    position: relative;


`
export const HeroSlide = styled.div`
    width:100%;
    height: 100%;
    z-index:1;

`
export const HeroSlider = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content: center;

    &::before{
        content:"";
        position: absolute;
        top:0;
        bottom: 0;
        left:0;
        width:100%;
        z-index:1;
        height: 100vh;
        background: linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.1));
    }
`


export const Image = styled.img`
    width: 100vw;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
    object-fit: cover;
    object-position: center;
    transition: all 0.3s ease-in;
    margin-top: -67px;
    /* z-index:-1; */
`

export const HeroContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* height: 100%; */
    width: calc(100% - 100px);
    color: #000;
    position: relative;
    /* top:0;
    left:0; */
    z-index:10;
    
`



export const HeroHeading = styled.h1`
    /* margin-bottom: 1rem; */
    font-size: clamp(3rem, 8vw, 4rem);
    font-weight:400;

    
`
export const HeroOverview = styled.p`
    text-align:center;
    width: 70%;
    font-size: 1.4rem;
    color: #040e1d;
    margin-bottom:1.5rem;
    /* letter-spacing: 3px;
    z-index:1;
    font-weight: 600; */

    /* @media screen and (max-width:600px){
        font-size: 1.2rem;
        letter-spacing: 1px;
        margin-top: 1rem;
    } */
    // 
    

`
export const HeroBtn = styled.button`
    background-color:#BC4123;
    border:2px solid #BC4123;
    border-radius: 5px;
    padding: 0.7rem 2rem;
    font-size: 1.4rem;
    color: #040e1d;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in;
    z-index:1;

    &:hover{
        background-color: transparent;
        border:2px solid #040e1d;
        transition: all 0.3s ease-in;
        
    }

`

const Icon = styled.span`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #040e1d;
    top: 50%;
    z-index: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #BC4123;
    z-index:10;

    &:hover{
        opacity:0.7;
    }
`


export const RightArrow = styled(Icon)`
    right: 0;
    margin-right: 1rem;
`
export const LeftArrow = styled(Icon)`
    left:0;
    margin-left: 1rem;
`