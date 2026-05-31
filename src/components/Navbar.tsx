import Link from "next/link";

interface NavbarProps {
  logoText: string;
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ logoText }: NavbarProps) {
  return (
    <nav className="nb-nav">
      <span className="nb-logo">{logoText}</span>
      <div className="nb-navlinks">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="nb-navlink">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
