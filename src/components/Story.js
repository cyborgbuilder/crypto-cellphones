import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
const Story = () => {
  return (
    <Container>
      <Wrap>
        <Left>
          <Fade left>
          <h1>STORY</h1>

            <p>Welcome to universe of the Crypto Cell Phones. Crypto Cell Phones are cell phone life forms from the planet CELLTON deep in the universe. CELLTON is a planet with two factions. One faction in New Crypto, City which is fighting for a one world control and digital domination. Frank Crypto is a ruthless mad scientist and the Mayor of New Crypto, City. He has a secret army of mutated Zombie Crypto Cell Phones that he controls. Frank Crypto orders his Zombie Crypto Cell phones to destroy and raid the homes and businesses of the second faction of Crypto Cell Phones living in Utility Village. Mark Utility is the Mayor of Utility Village and is constantly fighting off Zombie Crypto Cell Phone attacks with his fellow Utility villagers. Mark Utility is also working hard to bring balance to CELLTON and keep cryptocurrency decentralized as well as a free CELLTON for all Crypto Cell Phones. Join us as we find out who will win control over CELLTON.</p>

            
            <a href='https://opensea.io/collection/cryptocellphonesnft' target='_blank'><button>JOIN OUR DISCORD</button></a>
          </Fade>
        </Left>
        <Right>
          <Fade right>
          <img src='/images/story_img.png' />
          </Fade>
        </Right>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: black;


`
const Wrap = styled.div`
    width: 90%;
    display: flex;

          
    @media only screen and (max-width: 1200px){
      flex-direction: column;
  }


`

const Left = styled.div`
    width: 50%;

    @media only screen and (max-width: 1200px){
      width: 100%;
      text-align: center;
      margin: 30px 0;
  }

    h1{
      font-size: 70px;
      margin: 10px 0;

            
    @media only screen and (max-width: 1200px){
      font-size: 50px;
  }
    }

    p{
      font-size: 20px;
      margin: 20px 0;
      line-height: 2.1rem;

      @media only screen and (max-width: 1200px){
        font-size: 17px;
    }
    }
    button{
      border: none;
      outline: none;
      padding: 15px 20px;;
      font-size: 17px;
      border-radius: 5px;
      margin: 20px 0;
      background-color: rgb(35, 46, 202);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

      &:hover{
        transform: scale(1.01);
        cursor: pointer;
        color: black;
      }
    }



`

const Right = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media only screen and (max-width: 1200px){
      width: 100%;
      justify-content: center;
      margin: 30px 0;
  }

    img{
      width: 90%;
      border-radius: 15px;
    }
`
export default Story