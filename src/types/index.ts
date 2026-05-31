export type CardColor = "bg" | "accent1" | "accent2" | "accent3" | "accent4" | "accent5";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  cardColor?: CardColor;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  cardColor?: CardColor;
  url?: string;
}

export interface Skill {
  name: string;
  chipColor?: CardColor;
}

export interface ContactItem {
  id: string;
  label: string;
  value: string;
  icon: string;
  href: string;
}

export interface SiteData {
  name: string;
  initials: string;
  role: string;
  location: string;
  bio: string;
  availableForWork: boolean;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  contact: ContactItem[];
}
