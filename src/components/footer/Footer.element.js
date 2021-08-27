
import styled, {css}from 'styled-components'


const display = css`
    display: flex;
    align-items: center;
    justify-content: center;

`
const media = css`
    @media screen and (max-width:768px){
        width:50%;
        margin: auto;
        padding-bottom: 3rem;
        
    }
`

export const FooterSection = styled.section`
    padding: 4rem 0;
    background-color: #BC4123;
`
export const FooterContainer = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: auto;
    @media screen and (max-width:768px){
        width: 680px;
       
    }
`
export const FooterContent = styled.div`
    width: 100%;
    ${display}
    flex-direction: column;
    
`
export const FooterUpperArea = styled.div`
    ${display}
    justify-content: space-between;
    width: 100%;
    h1, p{
        color: #fff;
    }
    @media screen and (max-width:960px){
        flex-wrap:wrap;
    }

    @media screen and (max-width:768px){
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`
export const FooterMiddleArea = styled.div`
    ${display}
    flex-direction: column;
    padding: 1.7rem 1rem;
    p{
        margin-bottom: 1.5rem;
        color:#fff;
    }
`

export const AboutUs = styled.div`
    width: calc(100% / 4);
    ul{
        ${display}
        margin-top: 1.5rem;

    }
    li{
        ${display}
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color:gray ;
        margin-right: 1rem;
        font-size: 1.6rem;
        color:#fff;
    }
    ${media}
`
export const GetTouch = styled.div`
    width: calc(100% / 4);
    ${display}
    flex-direction: column;
    align-items: flex-start;
    margin-left: 3vw;
    Ul{
        ${display}
        flex-direction: column;
        align-items: flex-start;
        

        li{
            padding: 10px 0;
            span{
                margin-left: 1rem;
                color:#fff;
            }
            i{
                font-size: 1.2rem;
                color:#fff;
            }
        }
    }
    ${media}
   

`
export const UseFullLinks = styled.div`
    width: calc(100% / 4);
    ${display}
    flex-direction: column;
    align-items: flex-start;
    margin-top: -50px;

    ul{
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        li{
            padding: 10px 0;
            color:#fff;
        }
    }
    ${media}
    
`
export const LeatestPost = styled.div`
    width: calc(100% / 4);
    ${media}
`
export const MiddleText = styled.div`
    ${display}
    flex-direction: column;
    width: 80%;
`
export const MiddleButton = styled.div`
     ${display}
     column-gap: 8px;
`
export const FooterDownArea = styled.div`
    ${display}
    justify-content: space-between;
    padding: 1rem 0;
    width: 100%;
    background-color: #94351d;
`

export const FooterDownAreaContent = styled.div`
    ${display}
    justify-content: space-between;
    max-width: 1140px;
    width: 100%;
    margin: auto;
`


export const CopyRight = styled.div`
    p{
        color:#fff;
    }
`
export const ShortLinks = styled.div`
    /* width: 100%; */
    ul{
        ${display}
        justify-content: space-between;

        li{
            border-right: 2px solid #fff;
            color:#fff;
            padding: 0 10px;
        }
        li:last-child{
            border-right: none;;
        }
    }
`
export const ImgContainer = styled.div`
    ${display}
    flex-wrap: wrap;
    padding: 0 1rem;
    gap: 8px;
`
export const Image = styled.img`
    width: 100px;
    height: 80px;
`




export const Button = styled.button`
    font-size: 1.3rem;
    padding: 8px 1.8rem;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: ${({bgcolor})=>(bgcolor?bgcolor:"#868685")};
    color: ${({color})=>(color?color:'#fff')};
   
    
`