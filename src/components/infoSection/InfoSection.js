import React from 'react'
import image from '../../images/hero-4.jpg'
import {InfoArea,InfoContainer, InfoContent, ImgContainer, TextContainer, Image, Squaer} from './InfoSection.Element'

function InfoSection() {
    return (
        <InfoArea>
            
            <InfoContainer>
                <h1>See Our Room</h1>
                <Squaer></Squaer>
                <InfoContent>
                    <ImgContainer>
                        <Image src={image}></Image>
                    </ImgContainer>
                    <TextContainer>
                        <h1>What is Lorem Ipsum?</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    </TextContainer>
                </InfoContent>
            </InfoContainer>
            
        </InfoArea>
    )
}

export default InfoSection;
