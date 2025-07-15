import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <h1>KARAKORAM</h1>
          <h2>SKI EXPEDITION</h2>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#expedition">EXPEDITION</a></li>
            <li><a href="#team">TEAM</a></li>
            <li><a href="#gallery">GALLERY</a></li>
            <li><a href="#partners">PARTNERS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>KARAKORAM</h1>
            <h2>SKI EXPEDITION</h2>
            <p>EXPLORING THE UNEXPLORED</p>
          </div>
        </section>

        <section id="expedition" className="expedition">
          <div className="section-content">
            <h2>THE EXPEDITION</h2>
            <p>
              A pioneering ski expedition to the heart of the Karakoram range, 
              exploring uncharted territories and skiing down some of the most 
              remote and challenging slopes on the planet.
            </p>
            <div className="expedition-details">
              <div className="detail">
                <h3>LOCATION</h3>
                <p>Karakoram Range, Pakistan</p>
              </div>
              <div className="detail">
                <h3>DURATION</h3>
                <p>45 Days</p>
              </div>
              <div className="detail">
                <h3>ELEVATION</h3>
                <p>5000-7000m</p>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="section-content">
            <h2>THE TEAM</h2>
            <div className="team-members">
              <div className="member">
                <div className="member-image"></div>
                <h3>ALEX JOHNSON</h3>
                <p>Expedition Leader</p>
              </div>
              <div className="member">
                <div className="member-image"></div>
                <h3>MARIA RODRIGUEZ</h3>
                <p>Mountain Guide</p>
              </div>
              <div className="member">
                <div className="member-image"></div>
                <h3>JAMES WILSON</h3>
                <p>Photographer</p>
              </div>
              <div className="member">
                <div className="member-image"></div>
                <h3>SARAH CHEN</h3>
                <p>Medical Officer</p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery">
          <div className="section-content">
            <h2>GALLERY</h2>
            <div className="gallery-grid">
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
            </div>
          </div>
        </section>

        <section id="partners" className="partners">
          <div className="section-content">
            <h2>OUR PARTNERS</h2>
            <div className="partners-grid">
              <div className="partner"></div>
              <div className="partner"></div>
              <div className="partner"></div>
              <div className="partner"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
