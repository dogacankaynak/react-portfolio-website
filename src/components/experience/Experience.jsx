import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Background</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Education</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bilkent University (2014-2020)</h4>
                <small className='text-light'>Bachelor Science in Computer Science Faculty of Engineering </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>King's College London PreUniversity Summer School (06-07/2011)</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>TED Ankara College Foundation Schools (2003-2014)</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>{/* diğer konteynıra geçiş*/}
        <div className="experience__backend">
        <h3>Professional Experience</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>ANOVA R&D, Ankara - Artificial Intelligence Engineer (04/2021 - Now)</h4>
                <small className='text-light'>Made surveilance and service UI for military vehicle using C#</small>
                <small className='text-light'>Implemented ML algorithm for sensor calibration in TUBITAK project</small>
                <small className='text-light'>Developed test UI for radar cooling system using C#</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>METEKSAN DEFENCE, Ankara - Internship (08-09/2019)</h4>
                <small className='text-light'>Learned C# and developed HTML skills</small>
                <small className='text-light'>Developed 3 applications to share data through intranet using IIS server</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>NETAS, Istanbul - Internship (08-09/2018)</h4>
                <small className='text-light'>Learned SOQL for Salesforce and developed HTML skills</small>
                <small className='text-light'>Became Apex Specialist</small>
                <small className='text-light'>Be more familiar with CRM programs & cloud systems</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Radio Bilkent, Ankara - Voluntary Work Event & Marketing (2016-2019)</h4>
                <small className='text-light'>Achieved sponsorhip record(5 times higher than previous one)</small>
                <small className='text-light'>Worked as head of Promotion team on my last year</small>
                <small className='text-light'>Worked as sponsorship manager of Kısa Paslar for a year(more than 130K subscriber on YouTube)</small>
                <small className='text-light'>Participated in organizing events & festivals</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MITASAN, Istanbul - Voluntary Work (06-08/2010)</h4>
                <small className='text-light'>Made business analytics to suggest office solutions</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience