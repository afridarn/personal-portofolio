import type { Metadata } from "next";
import "./globals.css";
import siteData from "../../data/site.json";
import { theme } from "./theme";

export const metadata: Metadata = {
  title: `${siteData.name} — ${siteData.role}`,
  description: siteData.bio,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cssVars = `
    --nb-bg: ${theme.bg};
    --nb-accent1: ${theme.accent1};
    --nb-accent2: ${theme.accent2};
    --nb-accent3: ${theme.accent3};
    --nb-accent4: ${theme.accent4};
    --nb-accent5: ${theme.accent5};
    --nb-ink: ${theme.ink};
    --nb-shadow: ${theme.shadow};
  `.trim();

  return (
    <html lang="en" style={{ ["--nb-bg" as string]: theme.bg }}>
      <body style={{ ["cssText" as string]: `:root { ${cssVars} }` }}>
        <style>{`:root { ${cssVars} }`}</style>
        {children}
      </body>
    </html>
  );
}
