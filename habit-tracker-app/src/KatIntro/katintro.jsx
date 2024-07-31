import React from 'react';
import './katintro.css';
import avatar from './katavatar.jpg'

function KatIntro() {
    return (
      <div className="kat-intro">
        <img src={avatar} alt="Kat's avatar" className='avatar'/>
        <div className='kat-intro-text'>
            <h2>Kat</h2>
            <h3>About Me!</h3>
            <p>
            Hi! I'm Danielle, and I live just outside Newcastle-upon-Tyne with my husband, son and two cats, Boo and Otis.
            </p>
            <p>
            I love to be creative and have an addiction to trying new hobbies.
            </p>
            <p className="emphasis">
            Collecting craft supplies is definitely a hobby in its own right!
            </p>
            <p>
            I find crafting helps me to slow down and quiet my busy mind. I love the rythm of knitting in particular and find creating something really complex gives me a sense of satisfaction and keeps my brain and hands busy.
            </p>
            <p className="emphasis">
            Now I just need to work out how to knit a fullstack app!
            </p>
        </div>
      </div>
    );
  }
  export default KatIntro;