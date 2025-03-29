import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Melissa Luc",
  EMAIL: "melissa.ml.luc@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "I'm using Astro Nano template",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "instagram",
    HREF: "https://instagram.com/melissaluc_art",
    ICON: "instagram"
  },
  { 
    NAME: "github",
    HREF: "https://github.com/melissaluc",
    ICON: "github"
  },
  { 
    NAME: "linkedin",
    HREF: "https://linkedin.com/in/melissa-l-946b979b ",
    ICON: "linkedin"
  }
];
