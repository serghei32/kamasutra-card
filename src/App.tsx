import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './Components/Card';
import { Button } from './Components/Button';
import { ButtonSave } from './Components/ButtonSave';
import { Wrapper } from './Components/Wrapper';
import { Container } from './Components/Container';
import { Title } from './Components/Title';
import { Text } from './Components/Text';
import { Link } from './Components/Link';
import styled from 'styled-components';
import { ButtonNew } from './Components/ButtonNew';
import { ButtonSec } from './Components/ButtonSec';
import { ButtonThree } from './Components/ButtonThree';

function App() {
  return (
    <>
      <Wrapper>
        <Card testCard >
          <img src="./image.png" alt="image" />
          <Title>Headline</Title>
          <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
          <Container>
            <Button> See more </Button>
            <Button color={'red'} fontSize={'20px'}> See more </Button>
            <Button as={ButtonSave}> Save</Button>  {/* берем за основу Button и назначаем ей свойство от ButtonSave те он берет все от Button  + сверху остальное от ButtonSave */}
          </Container>
        </Card>

        <Card vocationCard >
          <img src="./image.png" alt="image" />
          <Title>Headline</Title>
          <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
          <Container>
            <Button> See more </Button>
            <ButtonSave > See more </ButtonSave>
            <Button as={Link}> Ссылка </Button>
            <Button as={ButtonSave}> Save1</Button>  {/* берем за основу Button и назначаем ей свойство от ButtonSave те он берет все от Button  + сверху остальное от ButtonSave */}
          </Container>
        </Card>



        <Card testCard>
          <ButtonNew > New one</ButtonNew>
          <ButtonNew green> New one</ButtonNew>
          <ButtonNew black> New one</ButtonNew>
          <ButtonNew blue> New one</ButtonNew>
          <ButtonNew blue> New one</ButtonNew>
        </Card>

        <Card vocationCard>
          <ButtonSec sendMassage> Send Massage</ButtonSec>
          <ButtonSec makeReport> Make Order</ButtonSec>
          <ButtonSec getOrder> get report</ButtonSec>
          <ButtonSec byNow> Vtoraia knopka</ButtonSec>
          <ButtonSec getStarted> Vtoraia knopka</ButtonSec>
        </Card>


        <Card jobCard>
          <ButtonThree btnType= {'primary'}>123456</ButtonThree>
          <ButtonThree btnType= {'outlined'}>123456</ButtonThree>
          <ButtonThree btnType={'second'}>123456</ButtonThree>
          <ButtonThree size >123456</ButtonThree>
          <ButtonThree paddingType={"padding50px"}>50</ButtonThree>
          <ButtonThree paddingType={"padding10px"}>10</ButtonThree>
          <ButtonThree paddingType={"padding15px"}>15</ButtonThree>




        </Card>





      </Wrapper>

      <Fooder>
        <img className='logo' src="logo192.png" alt="" />

      </Fooder>
    </>

  );
}

export default App;

const Fooder = styled.div`
  display: flex;
  height: 40px;
  background-color: white;
  justify-content: center;
  align-items: center;
  `



