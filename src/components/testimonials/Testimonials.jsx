import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/me.png'
 
// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Altay Güvenir',
    review: 'Buraya yazısı gelir'
  },
  {
    avatar: AVTR1,
    name: 'Meteksan',
    review: 'Buraya yazısı gelir'
  },
  {
    avatar: AVTR1,
    name: 'Radyo Bilkent',
    review: 'Buraya yazısı gelir'
  }
]


const Testimonials = () => {
  return (
    <section id ='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      //Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide key = {index} className="testimonial">
                <div className="client__avatar"><img src={avatar}/></div>
                <h5 className ='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials