import React from "react";
import {Container,Header,Logo,H1,P,Button,Image,ContainerItens,ContainerCaixa,Card} from "./style";
import { BsCart4 } from "react-icons/bs";
import mainImage from './assets/combo-balde-frango-coca.png';
import burguerPreferido from './assets/burguer-menu-preferido 1.png'
import nanguetsMolhoVermelho from './assets/nugets-batata-molho.png'
import localizaGoogle from './assets/localiza-google.png'
import Slider from './Slider/slider';

function App() {
   
    return(
        
        <Container>
        
        <Header>
        <div>
        <Logo>KFC</Logo>
        </div>
        <ul>
        <li>About</li>
        <li>Find </li>
        <li>Contacts</li>
        <li style={{color: '#b6000f',fontSize: '18px'}}><BsCart4/></li>
       
        </ul>
        </Header>
       
        <ContainerItens>
        <H1>BARGAIN 
        BUCKET MENU CAMPAIGN
        </H1>
        <P>Original recipe chicken and fries,and penty of ite.
        Somentimes that's all you need to turn an overage.
        day intro a great one. 
        </P>  
        <Button className='button-main'>ORDER NOW</Button> 
        <Image src={mainImage}/>
        </ContainerItens>
        <Slider/>
        
       <ContainerCaixa>
       
       <Card>
       <Image className='menuImg'src={burguerPreferido}></Image>
        <h1 className='titulo-burguer'>ANY DAY OFFERS</h1>
        <p className='legenda-burguer'>New Phenomenon Burguer Taste</p>
        <h2 className='valor-burguer'>12.90 TL</h2>
       </Card>
        
       <Card style={{ backgroundColor: '#b6000f' }}>
        <Image style={{ backgroundColor: '#FFF' }}className='menuImg' src={nanguetsMolhoVermelho}></Image>
        <h1 style={{ color: '#FFF' }}  className='titulo-burguer'>OTHER FLAVORS</h1>
        <p  style={{ color: '#EDC537' }} className='legenda-burguer'>Save Room We Made Nanguts</p>
        <h2 style={{ color: '#FFF' }}   className='valor-burguer'>3.90 TL</h2>
        </Card>
        
        <Card className='color-card'>
        <Image className='menuImg' src={localizaGoogle}></Image>
        <h1 className='titulo-burguer'>FIND A KFC STORE NEAR YOU</h1>
        </Card>

       </ContainerCaixa>
       </Container>
    );          
}

export default App;