import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Talencee</h1>
        <p>Connecting Talent with Opportunity</p>
        <button>Get Started</button>
      </section>

      {/* ABOUT SECTION */}
      <section className="section">
        <h2>Who We Are</h2>
        <p>
          Talencee helps job seekers find the right opportunities and companies
          hire the right talent efficiently.
        </p>
      </section>

      {/* SERVICES */}
      <section className="section dark">
        <h2>Our Services</h2>
        <ul>
          <li>Job Listings</li>
          <li>Career Guidance</li>
          <li>Hiring Solutions</li>
          <li>Resume Screening</li>
        </ul>
      </section>

      {/* JOBS */}
      <section className="section">
        <h2>Latest Jobs</h2>

        {loading && <p>Loading jobs...</p>}

        {!loading && jobs.length === 0 && (
          <p>No jobs available right now.</p>
        )}

        <div className="jobs">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h3>{job.title}</h3>
              <p>{job.location}</p>
              <p>{job.description}</p>
              <button>Apply</button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section dark">
        <h2>What People Say</h2>
        <p>“Talencee helped me land my dream job!”</p>
        <p>“Very smooth hiring experience.”</p>
      </section>

      {/* CTA */}
      <section className="section">
        <h2>Ready to Get Started?</h2>
        <button>Contact Us</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Talencee. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;