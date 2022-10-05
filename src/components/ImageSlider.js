import React,{Component} from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './ImageSlider.css'

export default class PauseOnHover extends Component {
 
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
           
          }
        },
        {
          breakpoint: 280,
          settings: {
            slidesToShow: 2,
           
          }
        }
      ]

    };
    
    return (

      <Container> 
        <Header>
          
          <a href='https://opensea.io/collection/cryptocellphonesnft' target='_blank'><img src='/images/badge.png' /></a>
          <h1>Click</h1>
        </Header>
        <Wrapper>
        <Slider {...settings}>
            <Wrap>
            <a href='https://opensea.io/collection/cryptocellphonesnft' target='_blank'><img src="/images/10.png"/></a>
            </Wrap>
            <Wrap>
            <a href='https://opensea.io/collection/cryptocellphonesnft' target='_blank'><img src="/images/New1.png"  /></a>
            
            </Wrap>
           
            <Wrap>
            <a href='https://opensea.io/collection/cryptocellphonesnft' target='_blank'><img src="/images/12.png"  /></a>
            
            </Wrap>

            <Wrap>
            <a href='https://opensea.io/collection/cryptocellphonesnft' target='_blank'><img src="/images/13.png"/></a>
            
            </Wrap>
           

            <Wrap>
            <a href='https://opensea.io/collection/cryptocellphonesnft' target='_blank'><img src="/images/New3.png"  /></a>
 
            </Wrap>

            <Wrap>
            <a href='https://opensea.io/collection/cryptocellphonesnft' target='_blank'><img src="/images/New4.png"  /></a>

            </Wrap>

            <Wrap>
            <a href='https://opensea.io/collection/cryptocellphonesnft' target='_blank'><img src="/images/New5.png"  /></a>
            
            </Wrap>
            
            
        </Slider>
        </Wrapper>
      </Container>
    );
  }
}

const Container = styled.div`
background-color:black;
// padding-right:100px;
// padding-left:100px;
height: 120vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media only screen and (max-width: 1200px){
  height: 80vh;
}



ul li button {
  &:before{
      font-size:8px;
      color:white;

  }
}
ul li.slick-active button:before{
  color:white;
}



`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 50px;
    margin: 20px 0;
  }

  img{
    margin: 20px 0;
  }

`
const Wrapper = styled.div`
 width: 90%;
 


`

const Wrap=styled.div`
 cursor:pointer;
 align-content:center;
 justify-content:center;

    

    img {
        border:4px solid transparent;
        border-radius:3px;
        width:100%;
        height:100%;
        
        object-fit:cover;
        display:flex;
      }

    }

    Slider{
        margin-top: 100px;
      
    }
 `
