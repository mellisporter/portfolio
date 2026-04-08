import { useState } from "react";

/*
  IMAGE SETUP:
  1. Take screenshots of each site
  2. Put them in your /public/images/ folder
  3. Name them: sca.png, cobbemc.png, casscounty.png, rushmore.png, shine.png, backlog.png
  
  The cards reference these paths below. Once deployed to Vercel they'll load from /images/
*/

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
    id: 6,
    title: "Back.log",
    category: "Web App",
    description: "Personal CRUD application for storing and managing video game collection data. Built during General Assembly's Software Engineering Immersive.",
    tech: ["Django", "Python", "PostgreSQL", "HTML", "CSS"],
    link: "https://github.com/mellisporter/backlog-app",
    image: "/images/backlog.png",
  },
];

const categories = ["All", "Drupal", "WordPress", "Web App"];

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
        border: hovered ? "1px solid #444" : "1px solid #222",
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
              opacity: hovered ? 1 : 0.8,
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
            <span style={{ color: "#444", fontSize: 13 }}>Screenshot coming soon</span>
          </div>
        )}

        <span style={{
          position: "absolute",
          top: 14,
          left: 14,
          background: "rgba(0,0,0,0.65)",
          color: "#bbb",
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
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#555",
                fontSize: 13,
                textDecoration: "none",
                flexShrink: 0,
                marginLeft: 16,
                transition: "color 0.2s",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => e.target.style.color = "#fff"}
              onMouseLeave={(e) => e.target.style.color = "#555"}
            >
              Visit &#8599;
            </a>
          )}
        </div>

        <p style={{
          fontSize: 14,
          lineHeight: 1.7,
          color: "#888",
          margin: "0 0 18px",
        }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              fontSize: 11,
              color: "#666",
              background: "#1c1c1c",
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
                color: "#777",
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
                    color: "#777",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 500,
                    padding: "7px 16px",
                    border: "1px solid #2a2a2a",
                    borderRadius: 6,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#fff";
                    e.target.style.borderColor = "#555";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#777";
                    e.target.style.borderColor = "#2a2a2a";
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
            color: "#999",
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

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingBottom: 36 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "8px 22px",
                borderRadius: 24,
                border: active === cat ? "1px solid #fff" : "1px solid #2a2a2a",
                background: active === cat ? "#fff" : "transparent",
                color: active === cat ? "#0a0a0a" : "#777",
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
        borderTop: "1px solid #161616",
        padding: "36px 40px",
        textAlign: "center",
      }}>
        <p style={{ color: "#444", fontSize: 13, margin: 0 }}>
          Matt Porter &nbsp;&middot;&nbsp; Herndon, VA &nbsp;&middot;&nbsp; 703-638-8874 &nbsp;&middot;&nbsp; matthew.ellis.porter@gmail.com
        </p>
      </footer>
    </div>
  );
}
