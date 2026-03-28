import {
  ArrowUp,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhilash-chaurasiya-1814b2138/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/AB007-code",
    icon: Github,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/abhik082",
    icon: Instagram,
  },
];

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-border/60 bg-card/40 px-4 py-16 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_1fr] md:items-start">
          <div className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary/80">
                Abhilash Portfolio
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Full Stack Developer and AI Automation Engineer
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              I build scalable MERN and Next.js applications, backend systems,
              automation workflows, and AI-powered products focused on real
              performance and clean user experience.
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:abhilash.vc888@gmail.com"
                  className="transition-colors hover:text-primary"
                >
                  abhilash.vc888@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a
                  href="tel:+919538450441"
                  className="transition-colors hover:text-primary"
                >
                  +91 9538-450-441
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span>Koramangala, Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/80">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/80">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ label, href, icon }) => {
                const Icon = icon;

                return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/40 px-4 py-3 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Abhilash Chaurasiya. All rights
            reserved.
          </p>

          <a
            href="#hero"
            className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary/20"
          >
            Back to top
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
