// import React from 'react'

// const AboutUs = () => {
//   return (
//     <div>
//       <h1 className='heading'>This is AboutUs Page</h1>
//     </div>
//   )
// }

// export default AboutUs

import React from 'react';
import './AboutPage.css'; // Import the CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our company, mission, and team.</p>
      </header>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide exceptional products and services that
          enhance the lives of our customers. We are committed to innovation,
          quality, and customer satisfaction.
        </p>
      </section>

      <section className="about-section">
        <h2>Our History</h2>
        <p>
          Founded in 2010, we have grown from a small startup into a leading
          player in our industry. Over the years, we have expanded our
          offerings and built a reputation for excellence.
        </p>
      </section>

      <section className="about-section">
        <h2>Meet the Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Chief Operating Officer</p>
          </div>
          <div className="team-member">
            <img src="team-member3.jpg" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
          <li>Teamwork</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
