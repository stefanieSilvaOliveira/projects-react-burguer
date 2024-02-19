import styled from 'styled-components';
import breakpoints from './brakpoints';


export const Container = styled.div`    
      
       min-height: 100%;
       overflow: hidden;
       background-color: #F8F2DC;
  
       @media ${breakpoints.sm}{
            min-height: 50%
       }

`;

export const Header = styled.header`
      width: 100%;
      display: flex;
      justify-content: space-between;
      background-color:  #F8F2DC;
      cursor: pointer;
      transition: all 0.2s ease-in ;
        
      
      ul{
        display: flex;
        margin-left: 600px;

          
      }

     li{
    
        list-style: none;
        margin: 20px 50px 20px 70px;
        font-size: 16px;
        font-weight: 600;
        color: #000; 
       
         
    }

    @media ${breakpoints.sm}{
       height: 100%;
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: center;  
       background: #b6000f;

       ul{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 10px 0 10px;
      }

     li{
            display: flex;
            margin: 10px 10px 10px 20px;
            font-size: 13px;
            color: #fff;
            
    }

    }
`;

export const Logo = styled.div`
      margin-top: 10px;
      margin-left: 50px;
      font-size: 30px;
      font-weight: 600;
      color: #b6000f;


      div{
        display: flex;
        justify-content: space-between;
      }

      @media ${breakpoints.sm}{
            display:flex;
            font-size: 18px;
            margin: 20px 10px 0 30px;
            color: #000;
           
      }     
`;

export const ContainerItens = styled.div`
    
       display: flex;
       justify-content: space-between;   
       background: #b6000f; 

       @media ${breakpoints.sm}{
            height: 50%;
            width: 100%;
            background:  #F8F2DC;
           
      }           
`;

export const H1 = styled.h1`
        position: absolute;
        margin-top: 100px;
        margin-left: 120px;
        width: 400px;
        font-weight: 600;
        font-size: 40px;
        color: #FFF;

        @media ${breakpoints.sm}{
           text-align: center;
            margin: 90px 20px 0 -30px;
            width: 350px;
            height: 200px;
            font-size: 25px;
            color: #000;
           
      }        
`;

export const P = styled.p`
      width: 400px;
      display: flex;
      margin-top: 100px;
      margin-left: 95px;
      text-align: center;
      font-weight: 200;
      font-size: 15px;
      color: #FFF;
      justify-content: center;
      align-items: center;

      @media ${breakpoints.sm}{
          
        display: flex;
        height: 50px;
        width: 250px;
        margin-top: 200px;
        margin-left: 20px;
        margin-right: -30px;
        font-size: 13px;
        font-weight: 400;
        color: #75706F;

      }
      
`;

export const Button = styled.button`

      &.button-main{
      width: 150px;
      height: 30px;
      margin-top: 300px;
      margin-left: -690px;
      border-radius: 20px;
      border: 1px solid #FFF;
      background: #b6000f;
      font-weight: 400;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #FFF;
      cursor: pointer;
      outline: none;
      }

      &:hover{
      opacity: 0.8;
      background: #FFF;
      color: #000;
      transition: ease-in 2ms all;
      }

      &:active{
      opacity: 0.5;
      }

      @media ${breakpoints.sm}{
          

           &.button-main{
            width: 150px;
            height: 30px;
            font-size: 13px;
            font-weight: 400;
            margin-right: 80px;
            background: #fdb137;
            color: #000;
           }    
      }     

`;

export const Image = styled.img`
         width: 400px;
         height: 400px;
         margin-right: 200px;
         transform: rotate(-0deg); 

         @media ${breakpoints.sm}{
            display: none;
           
      }     
     
`;

export const ContainerCaixa = styled.div`    
      display: grid;
      grid-template-columns: 200px 200px 200px;
      gap: 200px;
      margin-top: 100px;
      margin-left: 100px;
      cursor: pointer;
   
     .menuImg{
      width: 90px;
      height: 90px;
      margin-left: 60%;
      margin-top: -5%;
     border-radius: 50%;
     background: #edc537;
    }

    .titulo-burguer{
      font-size: 15px;
      font-weight: bolder;
      margin-top: -30%;
      width: 150px;
     
    }

    .legenda-burguer{
      margin-top: 5%;
      width: 100px;
      font-size: 14px;
      font-weight: 300;
    }

    .valor-burguer{
      font-size: 15px;
      font-weight: bolder;
      margin-top: 5%;
      color: #870000;
    }

`

export const Card = styled.div`    
    border: 2px solid #b6000f;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
    width: 300px;
    height: 150px;
    background: #FFF;

    @media ${breakpoints.sm}{
            
            display: none;

       }
`



