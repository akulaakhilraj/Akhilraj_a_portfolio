// const { useMemo, useState } = React;
const { useMemo, useState, useEffect } = React;

/* Smooth scroll helper */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ============= NAVBAR ============= */
function Navbar() {
  return (
    <div className="nav">
      <div className="container nav-inner">
        <div className="brand">AR</div>
        <div className="nav-links">
          {["home", "about", "skills", "experience", "projects", "contact"].map(
            (id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(id);
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* ============= HERO (purple layout) ============= */
// function Hero() {
//   const FILE_ID = "13kRibuvDJVXFJ1mue34dRFChyHNl7Mqy"; // your drive photo
//   const profileUrl = `https://drive.google.com/uc?export=view&id=${FILE_ID}`;

//   return (
//     <section className="hero" id="home">
//       <div className="container hero-grid">
//         {/* LEFT TEXT */}
//         <div className="hero-left">
//           <h2 className="hero-pre">Hi, I'm</h2>
//           <h1 className="hero-name">Akhil Raj Akula</h1>

//           <div className="hero-ml-line">
//             <span className="hero-ml">Machine Learning</span>
           
//           </div>

//           <p className="hero-role">Data Engineer &amp; Data Scientist</p>

//           <p className="hero-desc">
//             I design and develop efficient data pipelines, create insightful
//             visualizations, and build machine learning solutions. Passionate
//             about data-driven decision making and continuous learning.
//           </p>

//           <div className="btn-row">
//             <button
//               className="btn hero-btn primary"
//               type="button"
//               onClick={() => scrollToId("projects")}
//             >
//               View My Work
//             </button>
//             <a
//               className="btn hero-btn outline"
//               href="https://docs.google.com/document/d/1p1ofsprXIXUnNf4pN_nEaq3VSfqmIPT9/edit"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Download Resume
//             </a>
//           </div>

//           <div className="hero-stats">
//             <div className="stat-card">
//               <div className="stat-number">3 +</div>
//               <div className="stat-label">Years Experience</div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-number">10 +</div>
//               <div className="stat-label">Projects Completed</div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-number">7 +</div>
//               <div className="stat-label">Technologies</div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT PHOTO */}
//         <div className="hero-right">
//           <div className="photo-orbit">
//             <div className="photo-circle">
//               <img
//                 src={profileUrl}
//                 alt="Akhil Raj Akula"
//                 className="photo-img"
//                 referrerPolicy="no-referrer"
//                 onError={(e) => {
//                   e.currentTarget.src = `https://lh3.googleusercontent.com/d/${FILE_ID}`;
//                 }}
//               />
//             </div>

//             {/* Floating icons */}
//             <div className="orbit-icon orbit-icon-top">≡</div>
//             <div className="orbit-icon orbit-icon-left">📈</div>
//             <div className="orbit-icon orbit-icon-right">{"</>"}</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function Hero() {
  const FILE_ID = "13kRibuvDJVXFJ1mue34dRFChyHNl7Mqy"; // your drive photo
  const profileUrl = `https://drive.google.com/uc?export=view&id=${FILE_ID}`;

  // ---- rotating role text ----
  const roles = [
    "Machine Learning Engineer",
    "Data Scientist",
    "Data Engineer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2000); // 5 seconds
    return () => clearInterval(id);
  }, []);

  const currentRole = roles[roleIndex];
  // ----------------------------

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        {/* LEFT TEXT */}
        <div className="hero-left">
          <h2 className="hero-pre">Hi, I'm</h2>
          <h1 className="hero-name">Akhil Raj Akula</h1>

          {/* 👉 This line now changes every 5 sec */}
          <div className="hero-ml-line">
            <span className="hero-ml">{currentRole}</span>
            
          </div>
          <p className="hero-desc">
            I design and develop efficient data pipelines, create insightful
            visualizations, and build machine learning solutions. Passionate
            about data-driven decision making and continuous learning.
          </p>

          <div className="btn-row">
            <button
              className="btn hero-btn primary"
              type="button"
              onClick={() => scrollToId("projects")}
            >
              View My Work
            </button>
            <a
              className="btn hero-btn outline"
              href="https://docs.google.com/document/d/1p1ofsprXIXUnNf4pN_nEaq3VSfqmIPT9/edit"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">3 +</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6 +</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">7 +</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>

        {/* RIGHT PHOTO (unchanged) */}
        <div className="hero-right">
          <div className="photo-orbit">
            <div className="photo-circle">
              <img
                src={profileUrl}
                alt="Akhil Raj Akula"
                className="photo-img"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = `https://lh3.googleusercontent.com/d/${FILE_ID}`;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



/* ============= SECTION TITLE ============= */
function SectionTitle({ title }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className="line"></div>
    </div>
  );
}

/* ============= ABOUT ============= */
function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle title="Meet Akhil" />
        <div className="card">
          <p>
            I’m Akhil Raj — a data scientist who doesn’t just build models, but
            builds momentum. I specialize in transforming raw, high-dimensional
            data into clear, actionable intelligence that drives decisions,
            reduces risk, and unlocks opportunity.
          </p>
          <p>
            My work lives at the intersection of machine learning and data
            engineering. From predictive modeling and anomaly detection to
            scalable pipelines and real-time dashboards, I bring both technical
            depth and clarity to every project, working end-to-end with Python,
            SQL, TensorFlow, and cloud platforms.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============= SKILLS ============= */
function Skills() {
  const groups = useMemo(
    () => [
      {
        title: "Data Scientist Toolkit",
        items: [
          "Python",
          "SQL",
          "Jupyter",
          "Pandas",
          "NumPy",
          "Predictive Modeling",
          "EDA",
          "Hypothesis Testing",
          "A/B Testing",
        ],
      },
      {
        title: "ML & Modeling",
        items: [
          "XGBoost",
          "TensorFlow",
          "PyTorch",
          "SHAP",
          "Clustering",
          "Feature Engineering",
          "Model Deployment",
        ],
      },
      {
        title: "Data Engineering",
        items: ["Spark", "Airflow", "Kafka", "Snowflake", "dbt", "ETL Pipelines"],
      },
      {
        title: "Cloud & DevOps",
        items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "MLflow", "Git"],
      },
      {
        title: "Visualization & Tools",
        items: ["Tableau", "Power BI", "Looker"],
      },
    ],
    []
  );

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionTitle title="Technical Skills" />
        <div className="skills-grid">
          {groups.map((g) => (
            <div className="card skills-card" key={g.title}>
              <h3 className="skills-title">{g.title}</h3>
              <div className="badges">
                {g.items.map((x) => (
                  <span className="badge" key={x}>
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle title="Experience" />
        <div className="card experience-card">
          <div className="experience-left">
            <div className="exp-logo-circle">
              <span className="exp-logo-text">DT</span>
            </div>
          </div>
          <div className="experience-right">
            <h3 className="exp-role">Data Scientist</h3>
            <div className="exp-meta">
              Digient Technology Private Limited, Chennai, India &nbsp;|&nbsp; June 2021 – Nov 2023
            </div>
            <ul className="exp-list">
              <li>
                Built regression, classification, and deep learning models for
                analytics and signal-processing problems.
              </li>
              <li>
                Optimized simulation thresholds, saving 30% CPU time using AWS EC2, MLflow, and Docker
              </li>
              <li>
                Designed ETL pipelines with Airflow and PostgreSQL, accelerating report delivery by 25%
              </li>
              <li>
                Developed predictive maintenance models with SHAP interpretation, reducing failures by 20%
              </li>
              <li>
                Managed ML lifecycle with Airflow, MLflow, and Terraform; delivered insights via Tableau
              </li>
            </ul>
            <div className="exp-tags">
              <span className="badge">Python</span>
              <span className="badge">ML</span>
              <span className="badge">SQL</span>
              <span className="badge">Spark</span>
              <span className="badge">Airflow</span>
              <span className="badge">AWS</span>
            </div>
          </div>
        </div>
          <div className="card experience-card">
          <div className="experience-left">
            <div className="exp-logo-circle">
              <span className="exp-logo-text">IP</span>
            </div>
          </div>
          <div className="experience-right">
            <h3 className="exp-role">Data Engineer</h3>
            <div className="exp-meta">
              India Plays, Chennai, India &nbsp;|&nbsp; June 2020 – May 2021
            </div>
            <ul className="exp-list">
              <li>
                Designed and built scalable ETL / ELT pipelines to process real-time gameplay events, player telemetry, and transaction logs for analytics and ML use cases.
              </li>
              <li>
                Developed and optimized data models and data warehouses to support insights on player behavior, retention, churn, monetization, and in-game activity trends.
              </li>
              <li>
               Implemented streaming data solutions using Spark / Kafka to enable near real-time dashboards and live decision-making for product and game teams.
              </li>
              <li>
                Collaborated with game developers, data scientists, and business teams to deliver reliable data systems supporting personalization, fraud detection, and A/B testing.
              </li>
            </ul>
            <div className="exp-tags">
              <span className="badge">Python</span>
              <span className="badge">SQL</span>
              <span className="badge">Kafka</span>
              <span className="badge">ELT Pipelines</span>
               <span className="badge">Power BI</span>
              <span className="badge">Data Modeling</span>
              <span className="badge">Warehousing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





/* ============= PROJECTS ============= */
function Projects() {
  const projects = [
    {
      title: "Suspension Travel Depth Estimation",
      desc: "Built Random Forest and Neural Network models using sensor data. Automated ML pipeline to reduce processing time and improve prediction accuracy.",
      tags: ["Python", "TensorFlow", "Airflow", "Scikit-learn"],
    },
    {
      title: "Customer Segmentation & Revenue Forecasting",
      desc: "Segmented customer behavior with K-Means / DBSCAN on large datasets, engineered features, and built dashboards that improved marketing ROI.",
      tags: ["SQL", "Hive", "Tableau", "Python"],
    },
    {
      title: "Scalable Data Pipeline",
      desc: "PySpark pipeline on cloud-style architecture processing millions of records daily, enabling real-time ingestion and transformation.",
      tags: ["PySpark", "Airflow", "AWS", "Lambda"],
    },
    {
      title: "API-Driven Dashboard",
      desc: "Backend API serving ML predictions with a responsive dashboard; CI/CD with GitHub Actions.",
      tags: ["Flask / Node.js", "EC2", "Bootstrap", "GitHub Actions"],
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionTitle title="Projects" />
        <div className="projects">
          {projects.map((p) => (
            <div className="card project-card" key={p.title}>
              <h3 className="project-title">{p.title}</h3>
              <p className="sub">{p.desc}</p>
              <div className="badges">
                {p.tags.map((t) => (
                  <span className="badge" key={t}>
                    {t}
                  </span>
                
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============= CONTACT ============= */
function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q2dow3l", 
        "template_ndlxbaf", 
        e.target,
        "nUbifAO69q1ke2_bG" 
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle title="Contact Me" />
        <div className="card">
          <form className="form" onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button className="btn primary" type="submit">
              Send Message
            </button>
            {status && (
              <div className="small" style={{ marginTop: 10 }}>
                {status}
              </div>
            )}
          </form>
          <div style={{ marginTop: 16 }} className="small">
            Or email me directly at <b>akulaakhilraj@gmail.com</b>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============= FOOTER ============= */
function Footer() {
  return (
    <div className="footer">
      <div className="container small">
        © {new Date().getFullYear()} Akhil Raj Akula
      </div>
    </div>
  );
}

/* ============= ROOT APP ============= */
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
