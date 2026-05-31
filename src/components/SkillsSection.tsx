import type { Skill } from "@/types";

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="nb-section">
      <div className="section-header">
        <div className="section-num">03</div>
        <h2 className="section-title">Skills</h2>
      </div>
      <div className="skills-row">
        {skills.map((skill) => (
          <span key={skill.name} className={`skill-chip card-${skill.chipColor ?? "bg"}`}>
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
