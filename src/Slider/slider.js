
import React from 'react';
import {Swiper,SwiperSlide,} from 'swiper/react';
import breakpoints from '../brakpoints';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import styled from 'styled-components'
import burguerFrango from '../assets/combo-batata-coca-lanche.png'
import burguerFrito from '../assets/combo-batata-frita-frango.png'
import burguerCombo from '../assets/combo-burrito-coca-frita.png'
import burguerPicanha from '../assets/batata-frita-comum.png'

function Slider(){

return(
   
   <CarroselConteiner> 
    <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={3}
    navigation={{ 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}  
  
  >
    <SwiperSlide>
    <img  className="burguerKfc" src={burguerFrango} alt="" />
    <h1>Burguer Kids</h1>
    </SwiperSlide>
    
    <SwiperSlide>
    <img className="burguerKfc" src={burguerFrito} alt="" />
    <h1>Box Meals</h1>
    </SwiperSlide>
    
    <SwiperSlide>
    <img  className="burguerKfc" src={burguerCombo} alt="" />
    <h1>Meals</h1>
    </SwiperSlide>
    
    <SwiperSlide>
    <img  className="burguerKfc"src={burguerPicanha} alt="" />
    <h1>Chicken</h1>
    </SwiperSlide>
    
    <SwiperSlide>
    <img  className="burguerKfc"src={burguerFrango} alt="" />
    <h1>Single Products</h1>
    </SwiperSlide>

    <SwiperSlide>
    <img  className="burguerKfc"src={burguerFrito} alt="" />
    <h1>Sauces</h1>
    </SwiperSlide>

    <SwiperSlide>
    <img  className="burguerKfc"src={burguerFrito} alt="" />
    <h1>Meals</h1>
    </SwiperSlide>

    <SwiperSlide>
    <img  className="burguerKfc"src={burguerCombo} alt="" />
    <h1>Meals</h1>
    </SwiperSlide>

    <SwiperSlide>
    <img  className="burguerKfc"src={burguerPicanha} alt="" />
    <h1>Meals</h1>
    </SwiperSlide>

    <SwiperSlide>
    <img  className="burguerKfc"src={burguerPicanha} alt="" />
    <h1>Meals</h1>
    </SwiperSlide>
    </Swiper>

  <div className="swiper-button-next"></div>
  <div className="swiper-button-prev"></div>
    </CarroselConteiner>
)};
  

const CarroselConteiner = styled.div`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 50px 0 50px;
          cursor: pointer;  
          background-color:  #F8F2DC;
          
          @media ${breakpoints.sm}{
          
       }
          

.burguerKfc{
    height: 100px;
    width:  100px; 
    margin: 20px 20px 0 30px;   

    @media ${breakpoints.sm}{
           margin: 70px 10px 0 70px;
           height: 70px;
           width: 70px;
       } 
 }   

h1{
  font-size: 15px;
  margin-left: 50px;
  font-weight: 300;

  @media ${breakpoints.sm}{
            font-size: 11px;
            font-weight: 400;
            text-align: center;
       }
}

.swiper-button-next::after,
.swiper-button-prev::after {   
    
      font-size: 20px;

      @media ${breakpoints.sm}{
            font-size: 13px;
            font-weight: 600;
           
       }
}

.swiper-button-next::after,
.swiper-button-prev::after {
     color: #b6000f;  

     @media ${breakpoints.sm}{
           height: 20px;
           width: 70px;
           
       }
}


.swiper-button-next::after,
.swiper-button-prev::after{
     margin-top: 450px;
    
}

`;   


export default Slider;  