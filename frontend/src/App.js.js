import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/content")
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(() => {
        setContent({
          heroTitle: "We Are Talencee",
          heroSubtitle:
            "A Web Design & Creative Agency Based in NCR. We craft meaningful digital experiences that drive growth.",

          // ✅ ONLY CHANGE IS HERE
          aboutText:
            "01. ABOUT US\n\nUnlocking creative horizons, Talencee is a digital agency driven by design, innovation, and impact. We craft meaningful online experiences, build visionary brands, and help businesses turn bold ideas into lasting success stories.",

          services: ["Talent Hiring", "Recruitment Support", "Career Growth"],
          features: ["Vetted Professionals", "Fast Hiring", "Industry Experts"],
          testimonials: [
            { name: "Ankit", text: "Talencee helped us close a role in just 7 days." },
            { name: "Rhea", text: "Professional hiring experience from start to end." }
          ]
        });
      });

    fetch("http://localhost:5000/api/jobs")
      .then(res => res.json())
      .then(data => setJobs(data.jobs || []))
      .catch(() => {
        setJobs([
          { _id: "1", title: "Frontend Developer", location: "Remote" },
          { _id: "2", title: "Backend Developer", location: "Bangalore" },
          { _id: "3", title: "MERN Stack Developer", location: "Delhi NCR" },
          { _id: "4", title: "UI/UX Designer", location: "Remote" }
        ]);
      });
  }, []);

  if (!content) return <div className="loading">Loading...</div>;

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Talencee</div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#features">Why Us</a>
          <a href="#jobs">Jobs</a>
          <a href="#contact">Contact</a>
          <button onClick={() => setShowModal(true)}>Get Started</button>
        </div>
      </nav>

      {/* HERO / ABOUT */}
      <section className="hero">
        <div className="hero-text">
          <h1>{content.heroTitle}</h1>
          <p className="hero-sub">{content.heroSubtitle}</p>

          <div className="about-box">
            <p style={{ whiteSpace: "pre-line" }}>{content.aboutText}</p>
          </div>

          <button onClick={() => setShowModal(true)}>Hire Talent</button>
        </div>

        <div className="hero-images">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="" />
          <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786" alt="" />
          <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad" alt="" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <h2>Our Services</h2>
        <div className="card-grid">
          {content.services.map((s, i) => (
            <div key={i} className="card animate">{s}</div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="section dark" id="features">
        <h2>Why Talencee?</h2>
        <div className="card-grid">
          {content.features.map((f, i) => (
            <div key={i} className="card animate">{f}</div>
          ))}
        </div>
      </section>

      {/* JOBS */}
      <section className="section" id="jobs">
        <h2>Open Positions</h2>
        <div className="card-grid">
          {jobs.map(job => (
            <div key={job._id} className="job-card animate">
              <h3>{job.title}</h3>
              <p>{job.location}</p>
              <button onClick={() => setShowModal(true)}>Apply</button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section dark">
        <h2>What Clients Say</h2>
        <div className="card-grid">
          {content.testimonials.map((t, i) => (
            <div key={i} className="testimonial animate">
              <p>“{t.text}”</p>
              <strong>{t.name}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@talencee.com</p>
        <p>Phone: +91 98765 43210</p>
      </section>

      {/* CTA MODAL */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Get Started</h3>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Subject" />
            <textarea placeholder="Message" />
            <input type="file" />
            <button>Submit</button>
            <button className="close" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      <footer className="footer">
        © 2025 Talencee. All rights reserved.
      </footer>
    </>
  );
}

export default App;