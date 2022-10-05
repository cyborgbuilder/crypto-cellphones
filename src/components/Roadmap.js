import React from 'react'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';

const Roadmap = () => {
  return (
    <Container>
        <Wrap>
            <Header>
            <h1>ROADMAP</h1>
            </Header>
        <Map>

            <Slide bottom>
            <LeftAlign>
                <h1>25%</h1>
                <p>we will using our Crypto Cell Phones to call Back to Pack Rescue Shelter and donate $1,000</p>
            </LeftAlign>    
            </Slide>
            
            <Slide bottom>
            <RightAlign>
            <h1>50%</h1>
                <p>We’ll be launching our own Crypto Cell Phones merchandise</p>
            </RightAlign>    
            </Slide>

            <Slide bottom>
            <LeftAlign>
                <h1>75%</h1>
                <p>we will using our Crypto Cell Phones to call Back to Pack Rescue Shelter and donate $3,500</p>
            </LeftAlign>    
            </Slide>


            <Slide bottom>
            <RightAlign>
            <h1>100%</h1>
            <p>we’ll begin developing of our first Crypto Cell Phones video game.</p>
            </RightAlign>    
            </Slide>
        
        </Map>

        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: black;

`

const Wrap = styled.div`
    width: 90%;
    margin-top: 100px ;

    p{
        font-size: 24px;
        margin-top: 10px;
        
        
    @media only screen and (max-width: 1200px){
        font-size: 16px;
    }
     }
`

const LeftAlign = styled.div`
    text-align: left;
    margin-top: 80px;
    border-bottom: 1px solid rgb(35, 46, 202);
    padding: 20px 0;
    border-radius: 25px;
    
    @media only screen and (max-width: 1200px){
        margin-top: 40px;
    }

    // h1{
    //     animation: letterMover 10s infinite;
        
    // }

    p{
        animation: letterMover 10s infinite linear;
        
    }

`

const RightAlign = styled.div`
    text-align: right;
    margin-top: 80px;
    border-bottom: 1px solid rgb(35, 46, 202);
    padding: 20px 0;
    border-radius: 25px;

    
    @media only screen and (max-width: 1200px){
        margin-top: 40px;
    }

    // h1{
    //     animation: letterMoverLeft 10s infinite linear;
    // }

    
    p{
        animation: letterMoverLeft 10s infinite;
    }

`    
const Map = styled.div`
    margin: 100px 0;

    @media only screen and (max-width: 1200px){
        margin: 50px 0;
    }
      
    h1{
        font-size: 45px; 
        color: #03c1eb;

        
    @media only screen and (max-width: 1200px){
        font-size: 27px;
    }
        
        
    }

   

`

const Header = styled.div`
    display: flex;
    justify-content: center;
    font-size: 50px;

    @media only screen and (max-width: 1200px){
        font-size: 30px;
    }
    

`
export default Roadmap