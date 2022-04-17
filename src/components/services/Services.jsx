import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id = 'services'>
      <h5>What Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container services__container">
      <article className="service">
          <div className="service__head">
            <h3>Programming Languages</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Java</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Python</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>C#</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>MATLAB</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Swift</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>C++</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Javascript</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Certification & Achievements</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>TOEFL Score: 101/120</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Entrepreneur Award, Senior Design Project Personal Award</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>NVIDIA Certificate (Fundamental of Deep Learning for Multiple Data Types)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Apex Specialist, Salesforce</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Licensed Basketball & Tennis Player</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Personal Skills</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Team Player</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Analytical Skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Quick Comprehension</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Adaptability</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Initiative</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Leadership</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Languages</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Turkish</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>English</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>German</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Interest & Hobbies</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Machine Learning</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Application Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Automation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Reading Autobiographies</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sports(Specifically Basketball & Tennis)</p>
            </li>
          </ul>
        </article>
        {/*END OF CART*/ }
        <article className="service">
          <div className="service__head">
            <h3>Voluntary Work</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Member of TABID(Technology R&D Science Innovation Association)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Chairman of the Community Service Committee in Bahcelievler Rotaract</p>
            </li>
          </ul>
        </article>
        {/*END OF CART*/ }
      </div>
    </section>
  )
}

export default Services