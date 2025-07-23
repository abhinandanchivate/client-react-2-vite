import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-content">
        <h1>Welcome to Asset Management Portal</h1>
        <p>Track, manage, and optimize your organizational assets with ease.</p>

        <div className="landing-buttons">
          <a href="/asset/create" className="btn primary">
            Create Asset
          </a>
          <a href="/asset/view" className="btn">
            View Assets
          </a>
        </div>
      </div>
      <div className="landing-image">
        <img
          src="./assets/asset-management-illustration.svg"
          alt="Asset Illustration"
        />
      </div>
    </section>
  );
};

export default Landing;
