import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import './frontApp.css';

function Front() {
  const sections = [
    {
      title: 'Transparent Supply Chains',
      content: 'Discover the stories behind your favorite products...',
    },
    {
      title: 'Empowering Small Sustainable Businesses',
      content: 'Uncover hidden gems and support artisans...',
    },
    {
      title: 'Collaborative Sustainability Communities',
      content: 'Join a vibrant community of change-makers...',
    },
  ];

  return (
    <div className="app-container">
      <section>
        <div className="nav_left">
          <div className="nav-link">
            <a href='#'>Home</a>
            <a href='#'>Market Place</a>
            <a href='#'>Forum</a>
            <a href='#'>About</a>
            <a href='#'>Our Solution</a>
          </div>
        </div>
      </section>

      <div className="parallax-container">
        <Parallax pages={4}>
          <ParallaxLayer
            offset={0}
            factor={1}
            style={{
              backgroundImage: 'url(https://wallpaperaccess.com/full/3819108.jpg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'darken',
              display: 'flex',
              justifyContent: 'space-between', // Arrange the two containers
            }}
          >
            {/* First Container */}
            <div className="flex-container">
              <div className="flex-content">
                <h1>Welcome to Our Sustainable Platform</h1>
                <p>Your gateway to responsible commerce and collaboration.</p>
              </div>
            </div>

            {/* Second Container */}
            <div className="flex-container">
              <div className="flex-content">
                <h2 className="interactive-text">Explore Our Initiatives</h2>
                <p>Discover innovative solutions for a greener future.</p>
              </div>
            </div>
          </ParallaxLayer>

          <div className="layer-container">
            {sections.map((section, index) => (
              <ParallaxLayer key={index} offset={index + 1} speed={0.5 + index * 0.1} className='layer'>
                <div className="section-content">
                  <h2 className="interactive-text">{section.title}</h2>
                  <p>{section.content}</p>
                </div>
              </ParallaxLayer>
            ))}
          </div>

          
          
        </Parallax>
      </div>
    </div>
  );
}

export default Front;
