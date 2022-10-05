import React from 'react'
import styled from 'styled-components'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
        <Wrap>
            <Left>
                <img src='/images/5.png' />
            </Left>
            <Right>
            
                <h1>JOIN OUR <span>COMMUNITY</span></h1>
                <p>Get Ready to make the  <span>right call!</span></p>
                
                <SocialLinks>
                    <a href='https://twitter.com/cryptocellphone' target='_blank'><FaTwitter style={{margin: '0 5px'}}/></a>
                    <a href='https://www.facebook.com/cryptocellphone' target='_blank'><FaFacebook style={{margin: '0 5px'}}/></a>
                    <a href='https://www.instagram.com/cryptocellphone/' target='_blank'><FaInstagram style={{margin: '0 5px'}}/></a>
                    <a href='https://discord.gg/ebxvN5FQ' target='_blank'><FaDiscord style={{margin: '0 5px'}}/></a>
                    <a href='https://www.youtube.com/channel/UC-kaPByZShrk7_WoiSNthFg' target='_blank'><FaYoutube style={{margin: '0 5px'}}/></a>
                </SocialLinks>

                <img src='/images/logo2.png' />

                <p>© 2022 • Powered by Crypto Cell Phones</p>
            </Right>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 80vh;
    background: linear-gradient(360deg, #0000004A 70%, #000000 100%), url('https://i.pinimg.com/originals/4f/fd/bd/4ffdbd79a2ced290fbbc0c6693c2a5fc.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;

`
const Wrap = styled.div`
    width: 90%;
    display: flex;
    text-align: center;

    @media only screen and (max-width: 1200px){
        flex-direction: column;
        height: 100vh;
    }


`

const Left = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    @media only screen and (max-width: 1200px){
        width: 100%;
    }
    img{
        width: 87%;
        position: absolute;
        bottom: 0;
        left: 0;
        
    }
`

const Right = styled.div`
    width: 50%;
    padding-top: 60px;

    @media only screen and (max-width: 1200px){
        width: 100%;
    }
    img{
        width: 15%;
        margin-top: 30px;

        @media only screen and (max-width: 1200px){
            width: 30%;
        }
    }
    h1{
        font-size: 64px;

        @media only screen and (max-width: 1200px){
            font-size: 45px;
        }
    }

    p{
        font-size: 20px;

        @media only screen and (max-width: 1200px){
            font-size: 16px;;
        }
    }
`

const SocialLinks = styled.div`
    display: flex;
    font-size: 50px;
    margin-top: 50px;
    justify-content: center;

`
export default Footer