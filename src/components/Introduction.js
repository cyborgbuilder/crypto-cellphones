import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import Fade from 'react-reveal/Fade';
const Story = () => {
  return (
    <Container>
      {/* <ColorBar /> */}
      <Wrap>

      <Right>
        <Fade left>
        <Player>
        <ReactPlayer  url='/images/looping.mp4' config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true' height='' width='' />
        </Player>
        </Fade>
        </Right>

        
        <Left>
        <Fade right>
          <h1>100 UNIQUE CRYPTO CELL PHONES</h1>
          <h1><span>GET READY TO MAKE THE RIGHT CALL!</span></h1>
          <p>Welcome to universe of the Crypto Cell Phones. Crypto Cell Phones are cell phone life forms from the planet CELLTON deep in the universe. CELLTON is a planet with two factions. One faction in New Crypto, City which is fighting for a one world control and digital domination. Frank Crypto is a ruthless mad scientist and the Mayor of New Crypto, City. He has a secret army of mutated Zombie Crypto Cell Phones that he controls. Frank Crypto orders his Zombie Crypto Cell phones to destroy and raid the homes and businesses of the second faction of Crypto Cell Phones living in Utility Village. Mark Utility is the Mayor of Utility Village and is constantly fighting off Zombie Crypto Cell Phone attacks with his fellow Utility villagers. Mark Utility is also working hard to bring balance to CELLTON and keep cryptocurrency decentralized as well as a free CELLTON for all Crypto Cell Phones. Join us as we find out who will win control over CELLTON.</p>
          </Fade>
        </Left>
        

        
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: black;
    display: flex;
    justify-content: center;

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
  padding-top: 50px;

  @media only screen and (max-width: 1200px){
    width: 100%;
    text-align: center;

}

  span{
    font-size: 34px;

    @media only screen and (max-width: 1200px){
      font-size: 26px;
  }
  }

  h1{
    font-size: 52px;

    @media only screen and (max-width: 1200px){
      font-size: 42px;
  }
  }

  p{
    font-size: 19px;
    text-align: left;
    margin-top: 30px;
    padding: 10px;
    line-height: 2.5rem;

    @media only screen and (max-width: 1200px){
      font-size: 16px;
      text-align: center;
  }
  }
`

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 1200px){
    width: 100%;
    justify-content: center;
    margin: 50px 0;
}
`

const Player = styled.div`
  width: 90%;

  
  @media only screen and (max-width: 1200px){
    width: 100%;
}

`
export default Story