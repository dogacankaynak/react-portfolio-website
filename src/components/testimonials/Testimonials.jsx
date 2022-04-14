import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/meteksanSavunma.jpg'
import AVTR2 from '../../assets/kamerrodoplu.jpg'

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Cengiz Eken',
    statue: 'Design Test Engineering Manager - Metaksan Inc. (2015-2022)',
    review: '...He was responsible for the web development process of a test result management system. During his internship period he put a very god effort and was able to succeed to create complete web-site using ASP.NET. As a dedicated engineering candidate, he was able to manage to be strong member of our department by not only doing his tasks but also transferring his experience to us regarding his profession.'
  },
  {
    avatar: AVTR2,
    name: 'Kamer Rodoplu',
    statue: 'Dean of Students (2019-2020)',
    review: 'Dogacan Kaynak, a senior student at the Department of Computer Engineering, started working in Marketing and Operations Department of Radio Bilkent in Fall 2016 and he was in charge of promotional activities of the radio during the 2018-19 Academic Year...As a dedicated member of the team Doğacan provided valued services to Bilkent Radio, and he acquired important work experience.'
  },
  
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
          data.map(({avatar, name, statue, review}, index) =>{
            return(
              <SwiperSlide key = {index} className="testimonial">
                <div className="client__avatar"><img src={avatar}/></div>
                <h2 className ='client__name'>{name}</h2>
                <h5 className ='client__name'>{statue}</h5>
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