import React from "react";
import Container from "react-bootstrap/Container";
import "./Achievements.css";

interface AchievementsProps {
  isFluid: boolean;
}

const educationData = [
  {
    year: "2021 - 2025",
    title: "High School Degree",
    subtitle: "Completed high school with focus on science and mathematics, achieving 95% marks. Participated in various extracurricular activities and won several awards.",
    details: "Computer Science"
  },
  {
    year: "2019 - 2021", 
    title: "Bachelor's Degree",
    subtitle: "Pursued undergraduate degree in engineering with specialization in computer science. Maintained excellent academic record throughout.",
    details: "Engineering"
  },
  {
    year: "2017 - 2019",
    title: "Master's Degree", 
    subtitle: "Advanced studies in computer engineering with focus on software development and system design principles.",
    details: "Computer Engineering"
  }
];

const experienceData = [
  {
    year: "2023 - Present",
    title: "UI/UX Designer",
    subtitle: "Working as UI/UX designer creating intuitive and user-friendly interfaces for web and mobile applications with modern design principles.",
    details: "Design & Development"
  },
  {
    year: "2022 - 2023",
    title: "Full-Stack Developer", 
    subtitle: "Developed and maintained full-stack web applications using modern technologies and frameworks for various client projects.",
    details: "Web Development"
  },
  {
    year: "2021 - 2022",
    title: "Frontend Developer",
    subtitle: "Specialized in frontend development creating responsive and interactive user interfaces using React, Vue.js and modern CSS frameworks.",
    details: "Frontend Development"
  }
];

const Achievements: React.FC<AchievementsProps> = ({ isFluid }) => {
  return (
    <Container id="achievements" fluid={isFluid} className={isFluid ? "px-5" : ""}>
      <h1 id="achievementsHeading">My Achievements</h1>
      
      <div className="timeline-wrapper">
        {/* Education Section */}
        <div className="timeline-section">
          <h2 className="section-title education-title">EDUCATION</h2>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {educationData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <div className="achievement-card">
                    <h3 className="achievement-title">{item.title}</h3>
                    <p className="achievement-subtitle">{item.subtitle}</p>
                    <span className="achievement-details">{item.details}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="timeline-section">
          <h2 className="section-title experience-title">EXPERIENCE</h2>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {experienceData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <div className="achievement-card">
                    <h3 className="achievement-title">{item.title}</h3>
                    <p className="achievement-subtitle">{item.subtitle}</p>
                    <span className="achievement-details">{item.details}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Achievements;