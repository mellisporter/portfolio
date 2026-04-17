import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Senior Consulting Advisors",
    category: "WordPress",
    description: "Full website design and development for a senior care consulting firm. Custom page layouts, location finder, accessibility features, blog architecture, and integrated call-to-action flows.",
    tech: ["WordPress", "CSS", "JavaScript", "SEO", "Section 508"],
    link: "https://floridaseniorconsulting.com",
    image: "/images/sca.png",
  },
  {
    id: 2,
    title: "Cobb EMC",
    category: "Drupal",
    description: "Enterprise Drupal site for one of the largest electric cooperatives in Georgia. Content architecture, navigation hierarchy, billing integrations, outage reporting, and member services portal.",
    tech: ["Drupal", "PHP", "CSS", "JavaScript", "Google Analytics"],
    link: "https://www.cobbemc.com/",
    image: "/images/cobbemc.png",
  },
  {
    id: 3,
    title: "Cass County Electric Cooperative",
    category: "Drupal",
    description: "Drupal site for a North Dakota electric cooperative. Content organization, member account integrations, event pages, rate information, and publications system. Configured taxonomy to support self-service updates by staff.",
    tech: ["Drupal", "PHP", "CSS", "JavaScript", "SmartHub Integration"],
    link: "https://casscountyelectric.com/",
    image: "/images/casscounty.png",
  },
  {
    id: 4,
    title: "Rushmore Electric Power Cooperative",
    category: "Drupal",
    description: "Drupal site for a South Dakota wholesale electric supplier. Service pages, career listings, utility finder tool, and internal intranet features including reservation calendars.",
    tech: ["Drupal", "PHP", "CSS", "JavaScript", "Intranet Features"],
    link: "https://rushmore.coop/",
    image: "/images/rushmore.png",
  },
  {
    id: 5,
    title: "SHiNE Help Center",
    category: "Drupal",
    description: "Built the complete help center for SHiNE, a proprietary low-code CMS platform on Drupal. Full article and tutorial library, all documentation, video walkthroughs. Handled 100% of client onboarding.",
    tech: ["Drupal", "Documentation", "Video", "Training", "Content Architecture"],
    link: "https://www.shine.coop/help-center",
    image: "/images/shine.png",
  },
  {
    id: 10,
    title: "Georgia Magazine",
    category: "Drupal",
    description: "Digital magazine built on Drupal with a taxonomy-driven content architecture. Configured structured categories for digital issues, back issues, and yearly archives, powering custom views that allow readers to browse by issue, date, and topic.",
    tech: ["Drupal", "Taxonomy", "Custom Views", "Content Architecture", "PHP"],
    link: "https://www.georgiamagazine.org/",
    image: "/images/georgiamagazine.png",
  },
  {
    id: 6,
    title: "Infinity",
    category: "Web App",
    description: "Personal project currently in development. A fantasy football platform with unique game modes that go beyond traditional fantasy formats. Built with a modern web stack and real-time features.",
    tech: ["Next.js", "React", "Supabase", "Vercel", "JavaScript"],
    link: "https://playinfinity.io/",
    image: "/images/infinity.png",
  },
  {
    id: 7,
    title: "JRNY",
    category: "Web App",
    description: "Fitness tracking application built end-to-end from wireframes. Uses PostgreSQL one-to-many relationships to track and analyze user fitness data over time.",
    tech: ["Django", "Python", "PostgreSQL", "HTML", "CSS"],
    link: "https://github.com/mellisporter/jrny-app",
    image: "/images/jrny.png",
    demo: "https://www.youtube.com/watch?v=9d0E54UEoxQ",
  },
  {
    id: 8,
    title: "Back.log",
    category: "Web App",
    description: "Personal CRUD application for storing and managing video game collection data. Built during General Assembly's Software Engineering Immersive.",
    tech: ["Django", "Python", "PostgreSQL", "HTML", "CSS"],
    link: "https://github.com/mellisporter/backlog-app",
    image: "/images/backlog.png",
    demo: "https://www.youtube.com/watch?v=4DO1YQazwEE",
  },
  {
    id: 9,
    title: "CoTeach",
    category: "Web App",
    description: "Video platform for teachers to upload and share educational content. Built with a separate frontend and backend architecture for scalability.",
    tech: ["React", "Express.js", "MongoDB", "Node.js", "CSS"],
    link: "https://github.com/mellisporter/CoTeach_frontend",
    image: "/images/coteach.png",
    demo: "https://www.youtube.com/watch?v=MtPHbPc5WUc",
  },
  {
    id: 11,
    title: "Automated Looker Studio Report",
    category: "Google Analytics",
    description: "Built an automated reporting dashboard that pulls GA4 web traffic data, custom data blends, and custom queries to generate interactive monthly usage reports for cooperative clients. Replaced a manual reporting process and saved the team 40 minutes per report each month.",
    tech: ["Looker Studio", "Google Analytics 4", "BigQuery", "Data Blending", "Automation"],
    link: "https://lookerstudio.google.com/reporting/82b3790a-5ab9-4a2b-b7dc-ef822fc9ec96",
    image: "/images/lookerstudio.png",
  },
];

const categories = ["All", "Drupal", "WordPress", "Web App", "Google Analytics"];

function Card({ project }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#141414",
        borderRadius: 12,
        overflow: "hidden",
        border: hovered ? "1px solid #555" : "1px solid #252525",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        cursor: "default",
      }}
    >
      <div style={{
        height: 260,
        overflow: "hidden",
        position: "relative",
        background: "#111",
      }}>
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              opacity: hovered ? 1 : 0.85,
              transition: "opacity 0.3s ease, transform 0.5s ease",
              transform: hovered ? "scale(1.03)" : "scale(1)",
            }}
          />
        ) : (
          <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            flexDirection: "column",
            gap: 8,
          }}>
            <span style={{ fontSize: 40, opacity: 0.3 }}>
              {project.category === "Drupal" ? "\u{1F527}" : project.category === "WordPress" ? "\u{1F310}" : "\u{1F3AE}"}
            </span>
            <span style={{ color: "#555", fontSize: 13 }}>Screenshot coming soon</span>
          </div>
        )}

        <span style={{
          position: "absolute",
          top: 14,
          left: 14,
          background: "rgba(0,0,0,0.7)",
          color: "#ddd",
          fontSize: 11,
          fontWeight: 600,
          padding: "4px 12px",
          borderRadius: 20,
          backdropFilter: "blur(10px)",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          zIndex: 3,
        }}>
          {project.category}
        </span>
      </div>

      <div style={{ padding: "22px 26px 26px" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 10,
        }}>
          <h3 style={{
            fontSize: 19,
            fontWeight: 700,
            margin: 0,
            color: "#fff",
            lineHeight: 1.3,
          }}>
            {project.title}
          </h3>
          <div style={{ display: "flex", gap: 10, flexShrink: 0, marginLeft: 16 }}>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0a0a0a",
                  fontSize: 12,
                  textDecoration: "none",
                  fontWeight: 600,
                  background: "#e0e0e0",
                  padding: "5px 14px",
                  borderRadius: 6,
                  transition: "all 0.2s ease",
                  letterSpacing: "0.3px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#e0e0e0";
                }}
              >
                Demo &#9654;
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  fontSize: 12,
                  textDecoration: "none",
                  fontWeight: 600,
                  padding: "5px 14px",
                  border: "1px solid #555",
                  borderRadius: 6,
                  transition: "all 0.2s ease",
                  letterSpacing: "0.3px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#fff";
                  e.target.style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "#555";
                  e.target.style.background = "transparent";
                }}
              >
                Visit &#8599;
              </a>
            )}
          </div>
        </div>

        <p style={{
          fontSize: 14,
          lineHeight: 1.7,
          color: "#ccc",
          margin: "0 0 18px",
        }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              fontSize: 11,
              color: "#aaa",
              background: "#1e1e1e",
              padding: "4px 10px",
              borderRadius: 4,
              fontWeight: 500,
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#e8e8e8",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Playfair+Display:wght@700;800&display=swap"
        rel="stylesheet"
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <header style={{ padding: "60px 0 40px" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 24,
          }}>
            <div>
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 48,
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-1px",
                lineHeight: 1.1,
                margin: 0,
              }}>
                Matt Porter
              </h1>
              <p style={{
                fontSize: 17,
                color: "#bbb",
                marginTop: 12,
                fontWeight: 300,
                letterSpacing: "0.3px",
              }}>
                Web Developer &nbsp;/&nbsp; Drupal &nbsp;/&nbsp; WordPress &nbsp;/&nbsp; CMS Platforms
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", paddingTop: 8 }}>
              {[
                { label: "Email", href: "mailto:matthew.ellis.porter@gmail.com" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/mellisporter" },
                { label: "GitHub", href: "https://github.com/mellisporter" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ccc",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 500,
                    padding: "7px 16px",
                    border: "1px solid #444",
                    borderRadius: 6,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#fff";
                    e.target.style.borderColor = "#888";
                    e.target.style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ccc";
                    e.target.style.borderColor = "#444";
                    e.target.style.background = "transparent";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <p style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "#ddd",
            maxWidth: 720,
            marginTop: 32,
            fontWeight: 300,
          }}>
            Working on CMS platforms since 2010, from early projects in high school to
            enterprise-level development. Most recently supported an account of 600+ websites
            ranging from public-facing sites to internal intranets, handling maintenance, updates,
            and new builds. I focus on understanding what the client actually needs and building
            from there, whether that means content architecture, custom functionality, or SEO
            strategy. Every project should look good, work well, and get found. This portfolio
            includes a collection of full-time, contract, and personal work.
          </p>
        </header>

        {/* Speaking & Workshops */}
        <div style={{ paddingBottom: 36 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 28,
            fontWeight: 800,
            color: "#fff",
            marginBottom: 8,
          }}>
            Speaking & Workshops
          </h2>
          <p style={{
            fontSize: 14,
            color: "#bbb",
            marginBottom: 24,
            fontWeight: 300,
          }}>
            Presented at national conferences and led hands-on client workshops on web development, CMS platforms, and content strategy.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}>
            {[
              {
                src: "/images/texascommunicators.jpg",
                caption: "Texas Communicators Conference",
                location: "Round Rock, TX — 2026",
              },
              {
                src: "/images/connect2025.png",
                caption: "NRECA Connect Conference",
                location: "Kansas City, MO — 2025",
              },
              {
                src: "/images/rushmoreworkshop.png",
                caption: "Rushmore Electric Workshop",
                location: "South Dakota — 2024",
              },
            ].map((item) => (
              <div key={item.caption} style={{
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid #252525",
                background: "#141414",
              }}>
                <div style={{
                  height: 220,
                  overflow: "hidden",
                }}>
                  <img
                    src={item.src}
                    alt={item.caption}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div style={{ padding: "14px 18px" }}>
                  <p style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    margin: 0,
                  }}>
                    {item.caption}
                  </p>
                  <p style={{
                    fontSize: 12,
                    color: "#999",
                    margin: "4px 0 0",
                  }}>
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Appian Cert */}
        <div style={{
          padding: "16px 20px",
          marginBottom: 28,
          background: "#141414",
          border: "1px solid #252525",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
        }}>
          <span style={{ fontSize: 14, color: "#ddd", fontWeight: 400 }}>
            Recently certified as an <strong style={{ color: "#fff" }}>Appian Associate Developer</strong>.
          </span>
          <a
            href="https://community.appian.com/members/mattp872778"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              fontSize: 12,
              fontWeight: 600,
              textDecoration: "none",
              padding: "5px 14px",
              border: "1px solid #555",
              borderRadius: 6,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#fff";
              e.target.style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#555";
              e.target.style.background = "transparent";
            }}
          >
            View certification &#8599;
          </a>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingBottom: 36 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "8px 22px",
                borderRadius: 24,
                border: active === cat ? "1px solid #fff" : "1px solid #444",
                background: active === cat ? "#fff" : "transparent",
                color: active === cat ? "#0a0a0a" : "#ccc",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s ease",
                letterSpacing: "0.3px",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(480px, 100%), 1fr))",
          gap: 28,
          paddingBottom: 80,
        }}>
          {filtered.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #1a1a1a",
        padding: "36px 40px",
        textAlign: "center",
      }}>
        <p style={{ color: "#777", fontSize: 13, margin: 0 }}>
          Matt Porter &nbsp;&middot;&nbsp; Herndon, VA &nbsp;&middot;&nbsp; 703-638-8874 &nbsp;&middot;&nbsp; matthew.ellis.porter@gmail.com
        </p>
      </footer>
    </div>
  );
}