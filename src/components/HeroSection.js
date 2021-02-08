import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-banner-text'>
        <h1>Creating your Custom Software.</h1>
        <p>LineBreak software specializes in creating custom software that is tailored to you.</p>
        <div className='padding-top'><button class="button button1">Let's Work Together</button></div>
      </div>
    </div>
  );
}

export default HeroSection;