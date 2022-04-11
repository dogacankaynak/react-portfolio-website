import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/python_logo.png'
import IMG2 from '../../assets/cplusplus_logo.png'
import IMG3 from '../../assets/java_logo.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'AI Personal Trainer',
    github: 'https://github.com/dogacankaynak/AI-Personal-Trainer',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Feedforward Neural Network',
    github: 'https://github.com/dogacankaynak/feedForwardNeuralNetwork',
  },
  {
    id: 3,
    image: IMG1,
    title: 'Tracking Amazon Product',
    github: 'https://github.com/dogacankaynak/Tracking-Amazon-Product-Python',
  },
  {
    id: 4,
    image: IMG2,
    title: 'Red-Black Tree Implementation',
    github: 'https://github.com/dogacankaynak/Red-Black-Tree-Cplusplus',
  },
  {
    id: 5,
    image: IMG3,
    title: 'Real Estate(Desktop Application)',
    github: 'https://github.com/dogacankaynak/REMSYS-Java',
  },
  
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