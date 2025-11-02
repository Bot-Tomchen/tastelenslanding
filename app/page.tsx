"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function Home() {
  // Track home page visit
  useEffect(() => {
    track("visit_home_page");
  }, []);

  return (
    <main>
      {/* Hero Section */}
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

          <button
            className="app-button"
            onClick={() => {
              track("click_get_started_now");
              window.location.href = "/upload";
            }}
          >
            🚀 Get Started Now
          </button>

          <a
            href="mailto:hello@tastelens.com"
            className="app-button"
            style={{ background: "transparent", border: "2px solid white", color: "white" }}
            onClick={() => track("click_contact")}
          >
            📧 Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
