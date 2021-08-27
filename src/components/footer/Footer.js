import React, { useEffect, useRef } from 'react'
import {FooterSection, FooterContainer, FooterContent,FooterUpperArea,AboutUs,GetTouch,UseFullLinks,LeatestPost,FooterMiddleArea,MiddleText, MiddleButton,FooterDownArea,CopyRight,ShortLinks, ImgContainer, Image, Button, FooterDownAreaContent} from './Footer.element'

function Footer() {
    
    // const Items = useRef()
    
    
    // useEffect(()=>{
    //     const currentItem = Items.current
    //     for(let i=0; i>=currentItem.length; i++){

    //     }
    //     console.log(Items.chaildNodes);
    //     return 
    // },[Items])

    return (
        <>
        <FooterSection>
            <FooterContainer>
                <FooterContent>
                    <FooterUpperArea>
                        <AboutUs>
                            <h1>About Us</h1>
                            <p>In this article, I am going to show you how to create a footer design using HTML and CSS code. In the meantime,</p>
                            <ul>
                                <li><i className="fab fa-facebook-square"></i></li>
                                <li><i className="fab fa-google    "></i></li>
                                <li><i className="fab fa-twitter    "></i></li>

                            </ul>
                        </AboutUs>
                        <GetTouch>
                            <h1>Get Into Touch</h1>
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i><span>234/A Dhaka</span></li>
                                <li><i className="fas fa-phone    "></i><span>+0398347489734</span></li>
                                <li><i className="fas fa-envelope    "></i><span>info@gmail.com</span></li>
                                <li><i className="fas fa-clock    "></i><span>Mon-Sun, 9am-10pm</span></li>
                            </ul>
                        </GetTouch>
                        <UseFullLinks>
                            <h1>Use Full Links</h1>
                            <ul>
                                <li><a>Blog</a></li>
                                <li><a>Category</a></li>
                                <li><a>Chart</a></li>
                            </ul>
                        </UseFullLinks>
                        <LeatestPost>
                            <h1>Leatest Blog</h1>
                            <ImgContainer>
                                <Image src="https://1.bp.blogspot.com/-bMGcwzwmcWA/YJ-HdIkZpyI/AAAAAAAAAWI/JH9ak0_4kLEp4DPqA6vEhiy-O3AQKmcaACLcBGAsYHQ/s16000/Screenshot%2B%25281075%2529.webp"></Image>
                                <Image src="https://1.bp.blogspot.com/-bMGcwzwmcWA/YJ-HdIkZpyI/AAAAAAAAAWI/JH9ak0_4kLEp4DPqA6vEhiy-O3AQKmcaACLcBGAsYHQ/s16000/Screenshot%2B%25281075%2529.webp"></Image>
                                <Image src="https://1.bp.blogspot.com/-bMGcwzwmcWA/YJ-HdIkZpyI/AAAAAAAAAWI/JH9ak0_4kLEp4DPqA6vEhiy-O3AQKmcaACLcBGAsYHQ/s16000/Screenshot%2B%25281075%2529.webp"></Image>
                                <Image src="https://1.bp.blogspot.com/-bMGcwzwmcWA/YJ-HdIkZpyI/AAAAAAAAAWI/JH9ak0_4kLEp4DPqA6vEhiy-O3AQKmcaACLcBGAsYHQ/s16000/Screenshot%2B%25281075%2529.webp"></Image>
                            </ImgContainer>
                        </LeatestPost>
                    </FooterUpperArea>
                    <FooterMiddleArea>
                        <MiddleText>
                            <p>In this article, I am going to show you how to create a footer design using HTML and CSS code. In the meantime, I have designed and shown many more types of footer sections. Hope you like this design too. </p>
                        </MiddleText>
                        <MiddleButton>
                            <Button color="#0b172a">Click Me</Button>
                            <Button bgcolor="#0b172a" color="#bc4123">Click Me</Button>
                            <Button>Click Me</Button>
                        </MiddleButton>
                    </FooterMiddleArea>
                   
                </FooterContent>
            </FooterContainer>
                   
            
        </FooterSection>
         <FooterDownArea>
             <FooterDownAreaContent>
                <CopyRight>
                    <p>In this article, I am going to show you how to create a footer  </p>
                </CopyRight>
                <ShortLinks>
                    <ul>
                        <li><a>About</a></li>
                        <li><a>Tearms</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </ShortLinks>
             </FooterDownAreaContent>
         
     </FooterDownArea>
     </>
    )
}

export default Footer;
