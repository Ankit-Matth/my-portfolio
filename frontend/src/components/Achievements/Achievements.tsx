import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import "./Achievements.css";

interface AchievementsProps {
  isFluid: boolean;
}

const leftSection = [
  {
    year: "24th May 2022",
    title: "3rd Prize, Digital Art Talentum",
    subtitle:
      "Organized by the Social Media Club and the Department of Computer Science, BRCM CET. It was a graphic design competition where I created a poster for the college using Canva. I was in my 1st year of B.Tech when I won this prize.",
    link: "https://drive.google.com/drive/folders/18M063S76uQYIYhqKz1hKxi39BX_0HfcQ?usp=drive_link"
  },
  {
    year: "14 Oct 2023",
    title: "Completed Hacktoberfest 2023",
    subtitle:
      "Received a reward kit and tree plantation recognition for 10 PRs (6 to DocsGPT) during Hacktoberfest 2023. It is an annual event that encourages contributions to open-source projects.",
    link: "https://www.linkedin.com/posts/ankit-matth_hacktoberfest2023-hacktoberfestabr2023-hacktoberfest-activity-7125144823749050369-M1Al?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfvHdEBJMubMELED_qugsz56HLc-rizsCk"
  },
  {
    year: "Oct 2023",
    title: "MLH Swag, Open Source Week",
    subtitle:
      "Received MLH swag for participating in the Global Hack Week: Open Source Week (from 16 to 23 Oct in 2023), organized by Major League Hacking in collaboration with Hacktoberfest.",
    link: "https://www.linkedin.com/posts/ankit-matth_mlhabrswag-hacktoberfest2023-globalabrhackabrweek-activity-7179147413750763520-FUvB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfvHdEBJMubMELED_qugsz56HLc-rizsCk"
  },
  {
    year: "27th April 2024",
    title: "3rd Rank, KIMO Tech Competition",
    subtitle:
      "Achieved 3rd rank in KIMO Tech Competition, an online test on aptitude, programming, and logical reasoning during my 3rd year.",
    link: "https://drive.google.com/drive/folders/1FiZ_0EVJpZ-ZVQwOqNDCOpfbq1KzXL07?usp=drive_link"
  },
  {
    year: "Feb 2025",
    title: "Campus Placement",
    subtitle:
      "Offered a Software Developer role at SachTech Solution Pvt Ltd (Mohali, Chandigarh) through campus placement in my 8th semester. Although I cleared it, I declined the offer to prepare for the TCS NQT off-campus drive.",
    link: "https://drive.google.com/drive/folders/1omvulBfWnuVoj2SJvufi1wathZw_pgNc?usp=drive_link"
  },
];

const rightSection = [
    {
    year: "27th April 2023",
    title: "1st Position, C Language Quiz",
    subtitle:
      "It was an intra-college quiz with 40–50 logical and output-based C programming questions, held during my 2nd year of B.Tech.",
    link: "https://www.linkedin.com/posts/ankit-matth_winner-of-c-language-quiz-activity-7057662549986603008-T_0c?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfvHdEBJMubMELED_qugsz56HLc-rizsCk"
  },
  {
    year: "Oct 2023",
    title: "T-shirt from DocsGPT",
    subtitle:
      "Received a T-shirt for 6 PRs in DocsGPT during Hacktoberfest 2023. DocsGPT is an open-source project (by Arc53, UK) that generates documentation for codebases. My contributions were in React.js, Tailwind CSS, and TypeScript.",
    link: "https://www.linkedin.com/posts/ankit-matth_hacktoberfest2023-activity-7147959854362427392-N680?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfvHdEBJMubMELED_qugsz56HLc-rizsCk"
  },
  {
    year: "Feb 2024",
    title: "1st Position, HackUniv 2024",
    subtitle:
      "Secured 1st place in HackUniv 2024 at GJUST, Hisar with project Personal Doctor, a healthcare platform. I handled backend (Node.js, Express, MongoDB) while my teammate managed frontend.",
    link: "https://www.linkedin.com/posts/ankit-matth_webwizards-1st-frontend-activity-7166456689557225472-hyeJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfvHdEBJMubMELED_qugsz56HLc-rizsCk"
  },
  {
    year: "27 Aug 2024",
    title: "My First Earning",
    subtitle:
      "Earned ~$30 from crypto airdrops (The TON Network, powered by Telegram). I automated processes using my programming skills. This was my first earning through coding.",
    link: "https://drive.google.com/drive/folders/1CQS0UtADoZKuTtSY7UqVhVNJHeebaRjm?usp=drive_link"
  },
  {
    year: "June 2025",
    title: "Appeared for TCS Prime Role Interview",
    subtitle:
      "Cleared the TCS National Qualifier Test (March 2025) and appeared for the Prime Role interview at TCS Noida Campus on 26th June 2025. It took 4 months of consistent preparation, risks, and challenges.",
    link: "https://www.linkedin.com/posts/ankit-matth_tcs-mohali-tcs-activity-7344208227020001284-ybGI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfvHdEBJMubMELED_qugsz56HLc-rizsCk"
  }
];

const Achievements: React.FC<AchievementsProps> = ({ isFluid }) => {
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0, 1])); 
  
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 450px)").matches;
    
    // Initialize first items as visible
    if (isMobile) {
      setVisibleItems(new Set([0]));
    } else {
      setVisibleItems(new Set([0, 1]));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));

          // First always visible (lock)
          if ((!isMobile && (index === 0 || index === 1)) || (isMobile && index === 0)) {
            return;
          }

          const isNearBottom =
            entry.boundingClientRect.top < window.innerHeight &&
            entry.boundingClientRect.top > window.innerHeight * 0.65;

          if (!isNearBottom) return;

          setVisibleItems((prev) => {
            const newSet = new Set(prev);

            if (entry.isIntersecting) {
              if (isMobile) {
                newSet.add(index);
              } else {
                if (index % 2 === 0) {
                  newSet.add(index);
                  if (itemsRef.current[index + 1]) newSet.add(index + 1);
                }
              }
            } else {
              if (isMobile) {
                newSet.delete(index);
              } else {
                if (index % 2 === 0) {
                  newSet.delete(index);
                  newSet.delete(index + 1);
                }
              }
            }

            return newSet;
          });
        });
      },
      { threshold: 0.4 }
    );


    // Only observe even-indexed items (left side) for desktop, all items for mobile
    itemsRef.current.forEach((item, idx) => {
      if (item) {
        if (isMobile || idx % 2 === 0) {
          observer.observe(item);
        }
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    itemsRef.current.forEach((item, idx) => {
      if (item) {
        const isVisible = visibleItems.has(idx);
        const hasVisibleClass = item.classList.contains("visible-item");
        
        if (isVisible && !hasVisibleClass) {
          item.classList.add("visible-item");
          item.classList.remove("hidden-item");
        } else if (!isVisible && hasVisibleClass) {
          item.classList.remove("visible-item");
          item.classList.add("hidden-item");
        }
      }
    });
  }, [visibleItems]);

  return (
    <Container id="achievements" fluid={isFluid} className={isFluid ? "px-5" : ""}>
      <h1 id="achievementsHeading">My Achievements</h1>
      <div className="timeline-wrapper">
        <div className="timeline-section">
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {leftSection.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index * 2] = el!)}
                data-index={index * 2}
                className="timeline-item hidden-item"
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <div className="achievement-card">
                    <h3 className="achievement-title">{item.title}</h3>
                    <p className="achievement-subtitle">{item.subtitle}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="achievement-link"
                      >
                        See More
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {rightSection.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index * 2 + 1] = el!)}
                data-index={index * 2 + 1}
                className="timeline-item hidden-item"
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <div className="achievement-card">
                    <h3 className="achievement-title">{item.title}</h3>
                    <p className="achievement-subtitle">{item.subtitle}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="achievement-link"
                      >
                        See More
                      </a>
                    )}
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