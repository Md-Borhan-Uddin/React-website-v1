import styled from "styled-components"

export const InfoArea = styled.section`
    width: 100%;
    @media screen and (min-width:1200px){
        max-width: 1300px;
    }
    
`
export const InfoContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: auto;
    padding: 5rem 0;
    position: relative;
    h1{
        font-size: 3rem;
        margin-bottom: 2rem;
        text-align:center;
    }

    &::after{
        content:"";
        position: absolute;
        width: 150px;
        height: 2px;
        background-color: #bc4123;
        top: 24%;
        left: 35%;
    }
    &::before{
        content:"";
        position: absolute;
        width: 150px;
        height: 2px;
        background-color: #bc4123;
        top: 24%;
        right: 33%;
    }
    
    @media screen and (max-width:768px){
        max-width: 768px;

        &::after{
            top: 18%;
            left: 25%;
        }
        &::before{
            top: 18%;
            right: 22.5%;
        }
    }

`
export const Squaer = styled.div`
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: #bc4123;
    top: 23%;
    left: 50%;
    transform: rotate(45deg);

    @media screen and (max-width:768px){
        top: 17%;
    }

   
`



export const InfoContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    column-gap: 2rem;
    margin-top: 5rem;

    @media screen and (max-width:768px){
        flex-direction: column;
        
    }

`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    /* border-radius: 10px; */
    transition: all 0.3s ease;
    border-radius: 10px;
    /* @media screen and (max-width:768px){
        
        padding-right: 1rem;
        padding-left: 1rem;
        
    } */
  
    
    
`


export const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: all 0.3s ease;
    overflow: hidden;
    border-radius: 10px;
    position: relative;

    @media screen and (max-width:768px){
        /* width: 768px; */
        
        padding-right: 1rem;
        padding-left: 1rem;
        overflow: hidden;
        
    }

    /* &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3));
    } */


    &:hover ${Image}{
        transform: scale(1.05);

    }

    

    
`

export const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: flex-start; */

    @media screen and (max-width:768px){
        margin-left: 2rem;
    }

    p{
        font-size: 1.3rem;
        font-weight: 300;
    }
    h1{
        margin-bottom: 1rem;
    }
`