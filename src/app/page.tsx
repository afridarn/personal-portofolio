import type { SiteData } from "@/types";
import siteData from "../../data/site.json";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const data = siteData as SiteData;

export default function Home() {
  const logoText = "// afrida";

  return (
    <div className="nb-root">
      <Navbar logoText={logoText} />
      <main>
        <Hero
          data={{
            name: data.name,
            initials: data.initials,
            role: data.role,
            bio: data.bio,
            availableForWork: data.availableForWork,
          }}
        />
        <ExperienceSection experiences={data.experiences} />
        <ProjectsSection projects={data.projects} />
        <SkillsSection skills={data.skills} />
        <ContactSection contact={data.contact} />
      </main>
      <footer className="nb-footer">
        <span className="footer-txt">
          {data.name.toLowerCase().replace(" ", "")}.dev — {new Date().getFullYear()}
        </span>
        {data.availableForWork && <span className="footer-badge">Open to work</span>}
      </footer>
    </div>
  );
}
