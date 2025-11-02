"use client";
export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">
          <svg width="280" height="80" viewBox="0 0 560 160">
            <defs>
              <style>{`@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');`}</style>
            </defs>
            <g transform="translate(10,10) scale(0.5)">
              <rect x="24" y="24" width="64" height="64" rx="6" className="line"/>
              <rect x="44" y="44" width="24" height="24" rx="4" className="fill"/>
              <rect x="168" y="24" width="64" height="64" rx="6" className="line"/>
              <rect x="188" y="44" width="24" height="24" rx="4" className="fill"/>
              <rect x="24" y="168" width="64" height="64" rx="6" className="line"/>
              <rect x="44" y="188" width="24" height="24" rx="4" className="fill"/>
            </g>
            <text x="150" y="90" fontFamily="Pacifico" fontSize="48">TasteLens</text>
          </svg>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#testimonials">Testimonials</a>
        </div>
      </nav>

      <div className="hero">
        <h1>AI-Powered<br />Visual Menu<br />Experience</h1>
        <p className="subtitle">Transform text menus into visual dining experiences instantly</p>

        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="qr-animation">📱</div>
            <p style={{ marginTop: "180px" }}>Scan QR<br />& Explore Menu</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="section">
        <div className="feature-badge">Core Innovation</div>
        <h2 className="feature-title">See every dish before you order</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon-placeholder">🔍</div>
            <h3>Automated Menu Digitization</h3>
            <p>OCR extracts dishes, finds photos from trusted sources.</p>
          </div>

          <div className="feature-card">
            <div className="icon-placeholder">📸</div>
            <h3>Real Photos, Real Reviews</h3>
            <p>Authentic dish photos, verified reviews, accurate ratings.</p>
            <div className="benefits-list">
              <span className="benefit-tag">Authentic images</span>
              <span className="benefit-tag">Verified reviews</span>
              <span className="benefit-tag">Rating insights</span>
            </div>
          </div>

          <div className="feature-card">
            <div className="icon-placeholder">⚡</div>
            <h3>Instant QR Access</h3>
            <p>No app install — diners scan & explore instantly.</p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div id="how-it-works" className="demo-section">
        <div className="feature-badge" style={{ color: "white" }}>How It Works</div>
        <h2 style={{ fontSize: "42px", marginBottom: "40px" }}>Three simple steps</h2>

        <div className="stats-grid">
          <div className="stat-card"><div className="stat-number">1</div><div className="stat-label">Upload Menu</div></div>
          <div className="stat-card"><div className="stat-number">2</div><div className="stat-label">AI understands dishes</div></div>
          <div className="stat-card"><div className="stat-number">3</div><div className="stat-label">Scan QR & explore</div></div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="testimonials">
        <h2 className="feature-title">Loved by diners & restaurants</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card"><div className="avatar"></div><p>Instant visual menus change everything.</p></div>
          <div className="testimonial-card"><div className="avatar"></div><p>Way easier to order food now.</p></div>
          <div className="testimonial-card"><div className="avatar"></div><p>We set it up in minutes.</p></div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Turn your menu visual in minutes</h2>
        <div className="app-buttons">
          <button onClick={() => window.location.href='/upload'} className="app-button">
            🚀 Get Started Free
          </button>
          <a href="mailto:hello@tastelens.com" className="app-button" style={{ background: "transparent", border: "2px solid white", color: "white" }}>📧 Contact Us</a>
        </div>
      </div>
    </main>
  );
}
