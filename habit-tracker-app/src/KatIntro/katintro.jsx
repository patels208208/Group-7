import React from 'react';
import './katintro.css';
import avatar from './katavatar.jpg'

function KatIntro() {
    return (
      <div className="kat-intro">
        <div className="avatar-container">
          <div className="avatar-bg"></div>
          <img src={avatar} alt="Kat's avatar" className="avatar" />
          <div className='kat-name'><p></p></div>
        </div>
        <div className='about-me'><p>About Kat</p></div>
        <div className='kat-intro-text'>
            <p>Hey, I'm <span className='highlight'>Kat</span> and I live in Sheffield with my housemate, Sam, and cat, Lili.</p>
            <p>I'm a French and Spanish teacher by profession, but I also speak Welsh, German, and a little Italian.</p>
            <span className='highlight'>I began my foray into coding as a teenager, building little websites to showcase my pixel art.</span>
            <p>I would like to build my own web app for use by schools to support their students with learning languages.</p>
            <span className='highlight'>I am a huge fan of frontend experimentation but I have recently discovered a love of databases!</span>
            <p>I'm really looking forward to working with everyone and building something we're chuffed with.</p>
        </div>
      </div>
    );
  }
  export default KatIntro;