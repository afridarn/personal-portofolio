import type { Project } from "@/types";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="nb-section">
      <div className="section-header">
        <div className="section-num">02</div>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((proj) => {
          const card = (
            <div className={`proj-card card-${proj.cardColor ?? "bg"}`}>
              <div className="proj-name">{proj.name}</div>
              <p className="proj-desc">{proj.description}</p>
              <div className="proj-tags">
                {proj.tags.map((tag) => (
                  <span key={tag} className="proj-tag">{tag}</span>
                ))}
              </div>
            </div>
          );
          return proj.url ? (
            <a key={proj.id} href={proj.url} target="_blank" rel="noopener noreferrer" className="proj-link">
              {card}
            </a>
          ) : (
            <div key={proj.id}>{card}</div>
          );
        })}
      </div>
    </section>
  );
}
