import type { SiteData } from "@/types";

interface HeroProps {
  data: Pick<SiteData, "name" | "initials" | "role" | "bio" | "availableForWork">;
}

export default function Hero({ data }: HeroProps) {
  const [firstName, ...rest] = data.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="about" className="hero">
      <div className="hero-content">
        {data.availableForWork && <span className="hero-label">Available for work</span>}
        <h1 className="hero-name">
          {firstName}
          <br />
          <em>{lastName}.</em>
        </h1>
        <p className="hero-role">{data.bio}</p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">
            View projects
          </a>
          <a href="#contact" className="btn-secondary">
            Hire me
          </a>
        </div>
      </div>
      <div className="hero-avatar">
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/avatar.png`} alt={data.name} />
      </div>
    </section>
  );
}
