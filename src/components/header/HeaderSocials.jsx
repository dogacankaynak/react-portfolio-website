import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/dogacankaynak/' target="_blank"><SiLinkedin/></a>
        <a href='https://github.com/dogacankaynak' target="_blank"><SiGithub/></a>
        <a href='https://www.instagram.com/dogacankaynak/' target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials