import type { Experience } from "@/types";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="nb-section">
      <div className="section-header">
        <div className="section-num">01</div>
        <h2 className="section-title">Work Experience</h2>
      </div>
      <div className="exp-list">
        {experiences.map((exp) => (
          <div key={exp.id} className={`exp-item card-${exp.cardColor ?? "bg"}`}>
            <div className="exp-date">{exp.period}</div>
            <div className="exp-body">
              <div className="exp-company">{exp.company}</div>
              <div className="exp-jobtitle">{exp.role}</div>
              <p className="exp-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
