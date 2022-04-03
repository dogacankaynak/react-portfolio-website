import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'feedforward neural network',
    github: 'https://github.com/dogacankaynak',
  },
  {
    id: 1,
    image: IMG1,
    title: 'feedforward neural network',
    github: 'https://github.com/dogacankaynak',
  },
  {
    id: 1,
    image: IMG1,
    title: 'feedforward neural network',
    github: 'https://github.com/dogacankaynak',
  },
  {
    id: 1,
    image: IMG1,
    title: 'feedforward neural network',
    github: 'https://github.com/dogacankaynak',
  },
  {
    id: 1,
    image: IMG1,
    title: 'feedforward neural network',
    github: 'https://github.com/dogacankaynak',
  },
  {
    id: 1,
    image: IMG1,
    title: 'feedforward neural network',
    github: 'https://github.com/dogacankaynak',
  }
]
  


const Portfolio = () => {
  return (
    <section id ='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github})=>{
            return(
              <article key ={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt ={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio