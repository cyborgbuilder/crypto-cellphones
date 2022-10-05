import React from 'react'
import styled from 'styled-components'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Home = () => {
  return (
    <Container>
        <Button><a href='https://opensea.io/collection/cryptocellphonesnft' target='_blank'>View On Opensea</a></Button> 
        <SocialSection>
        <a href='https://twitter.com/cryptocellphone' target='_blank'><FaTwitter style={{margin: '0 5px'}}/></a>
                    <a href='https://www.facebook.com/cryptocellphone' target='_blank'><FaFacebook style={{margin: '0 5px'}}/></a>
                    <a href='https://www.instagram.com/cryptocellphone/' target='_blank'><FaInstagram style={{margin: '0 5px'}}/></a>
                    <a href='https://discord.gg/ebxvN5FQ' target='_blank'><FaDiscord style={{margin: '0 5px'}}/></a>
                    <a href='https://www.youtube.com/channel/UC-kaPByZShrk7_WoiSNthFg' target='_blank'><FaYoutube style={{margin: '0 5px'}}/></a>
        </SocialSection>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #0000004A 70%, #000000 100%), url('/NFT_banner3.png');
    background-size: cover;
    background-repeat:no-repeat;
    background-position:center center;
    display: flex;
    justify-content: center;
    position: relative;
    // background-attachment: fixed;

    @media only screen and (max-width: 1200px){
      height: 100vh;
    }


`

const Button = styled.button`
padding: 20px 35px;;
background-color: rgb(35, 46, 202);
border: none;
outline: none;
border-radius: 5px;
position: absolute;
bottom: 1%;


// text-transform: uppercase;
letter-spacing: 1.4px;
font-size: 22px;


a{
  text-decoration: none;
}

  
@media only screen and (max-width: 1200px){
  font-size: 16px;
}



transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


&:hover{
  transform: scale(1.01);
      cursor: pointer;
      color: gray;
}
`

const SocialSection = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 50px;

    @media only screen and (max-width: 1200px){
      font-size: 30px;
    }

`
export default Home