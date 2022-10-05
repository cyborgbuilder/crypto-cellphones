import React from 'react'
import styled from 'styled-components'
const Team = () => {
  return (
    <Container>
        {/* <Content> */}
            <Wrap>
                <Left>
                    <h1>TEAM</h1>
                    
                    <TeamSection>
                        <Card>
                            <img src='/images/5.png' />                        
                            <h2>Chris</h2>
                            <h3>Director</h3>
                        </Card>

                        <Card>
                            <img src='/images/2.png' />                        
                            <h2>Jayden</h2>
                            <h3>Artist</h3>
                        </Card>

                        <Card>
                            <img src='/images/3.png' />                        
                            <h2>Isaiah</h2>
                            <h3>Music</h3>
                        </Card>

                        <Card>
                            <img src='/images/4.png' />                        
                            <h2>Aaliyah</h2>
                            <h3>Artist</h3>
                        </Card>

                        <Card>
                            <img src='/images/6.png' />                        
                            <h2>Jodine</h2>
                            <h3>Artist</h3>
                        </Card>
                    </TeamSection>

                    <p>We are a family team passionate about dog’s + cats and the digital world. We hope to do our part helping 4 legged friends get good homes while being creative in the NFT space through our Crypto Cell Phones NFT Collection.
Jayden and Aaliyah have a background in art and Chris has a background in marketing as well as branding. Isaiah is our young music man and up and coming guitar player. We also worked with an amazing artist Jodine. We can’t wait to introduce you to the world of Crypto Cell Phones. 
</p>
                </Left>
            </Wrap>
        {/* </Content> */}
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #03c1eb;
    display: flex;
    justify-content: center;
    animation: background 10s infinite;

    @media only screen and (max-width: 1200px){
    }
    
    
`

const Wrap = styled.div`
    width: 95%;

    @media only screen and (max-width: 1200px){
        width: 99%;
    }
`

const Left = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 1200px){
        width: 100%;
        display: flex;
        justify-content: center;
    }

    h1{
        font-size: 80px;

        @media only screen and (max-width: 1200px){
            font-size: 60px;
        }
    }

    p{
        font-size: 17px;
        margin: 20px;

        @media only screen and (max-width: 1200px){
            font-size: 14px;
        }
    }


`
const TeamSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 30px 0;
`

const Card = styled.div`
    width: 17%;
    height: 350px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 20px;

    @media only screen and (max-width: 1200px){
        width: 35%;
        height: 200px;
    }

    img{
        width: 100%;
        height: 80%;
       
    }

    h3{
        color: #03c1eb;
    }
`

export default Team