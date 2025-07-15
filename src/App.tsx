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
            <li><a href="#activities">ACTIVITÉS</a></li>
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

        <section id="activities" className="activities">
          <div className="section-content">
            <h2 className="section-title">LES ACTIVITÉS</h2>
            <div className="activities-grid">
              <div className="activity-card">
                <div className="activity-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
                  <div className="activity-overlay">
                    <h3>SKI DE RANDONNÉE</h3>
                    <div className="activity-description">
                      <p>Explorez les pentes vierges et les paysages spectaculaires du Karakoram en ski de randonnée. Nos guides expérimentés vous emmèneront sur les meilleurs itinéraires adaptés à votre niveau.</p>
                      <a href="#" className="activity-button">DÉCOUVRIR</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="activity-card">
                <div className="activity-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
                  <div className="activity-overlay">
                    <h3>HÉLISKI</h3>
                    <div className="activity-description">
                      <p>Vivez l'expérience ultime de ski en accédant aux zones les plus reculées par hélicoptère. Dévalez des pentes immaculées avec des vues à couper le souffle sur les sommets environnants.</p>
                      <a href="#" className="activity-button">DÉCOUVRIR</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="activity-card">
                <div className="activity-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
                  <div className="activity-overlay">
                    <h3>ALPINISME</h3>
                    <div className="activity-description">
                      <p>Combinez ski et alpinisme pour une aventure complète dans le massif du Karakoram. Escaladez des sommets emblématiques et descendez des couloirs vertigineux.</p>
                      <a href="#" className="activity-button">DÉCOUVRIR</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="activity-card">
                <div className="activity-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
                  <div className="activity-overlay">
                    <h3>FORMATION AVALANCHE</h3>
                    <div className="activity-description">
                      <p>Apprenez les techniques essentielles de sécurité en montagne avec nos formations spécialisées. Maîtrisez l'utilisation du matériel de sécurité et l'évaluation des risques d'avalanche.</p>
                      <a href="#" className="activity-button">DÉCOUVRIR</a>
                    </div>
                  </div>
                </div>
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
      </main>
    </div>
  );
}

export default App;
