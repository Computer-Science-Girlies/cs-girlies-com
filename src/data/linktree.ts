export type LinktreeIcon =
  | "code"
  | "community"
  | "globe";

export type LinktreeSocialIcon =
  | "instagram"
  | "linkedin"
  | "tiktok"
  | "youtube";

export type LinktreeLink = {
  label: string;
  href: string;
  action: string;
  icon: LinktreeIcon;
};

export type LinktreeFooterLink = {
  label: string;
  href: string;
};

export type LinktreeSocialLink = {
  label: string;
  href: string;
  icon: LinktreeSocialIcon;
};

export const linktreeProfile = {
  handle: "~/cs_girlies",
  tagline: "Let's make education open source 🙂‍↕️",
  avatar: "/logo.png",
};

export const linktreeLinks: LinktreeLink[] = [
  {
    label: "CSGIRLIES.COM",
    href: "https://csgirlies.com",
    action: "EXECUTE",
    icon: "globe",
  },
  {
    label: "JOIN THE COMMUNITY!",
    href: "https://discord.gg/wPm7NxPQEf",
    action: "RUN",
    icon: "community",
  },
  {
    label: "Hackathonnn",
    href: "https://cs-girlies-november.devpost.com/?ref_feature=challenge&ref_medium=discover&_gl=1*ocnf2f*_gcl_au*MTM3NjY5ODI4LjE3NzkzMDQwMzY.*_ga*NjEzMjczNjc0LjE3NzkzMDQwMzc.*_ga_0YHJK3Y10M*czE3Nzk0Njc3MTMkbzIkZzEkdDE3Nzk0Njc3MjAkajUzJGwwJGgw",
    action: "OPEN",
    icon: "code",
  },
];

export const linktreeSocialLinks: LinktreeSocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/cs.girlies?igsh=MWNnajdhYWxiM3E1OA==",
    icon: "instagram",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@cs.girlies?_r=1&_t=ZT-96ZtfTG3Hqf",
    icon: "tiktok",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/csgirlies/",
    icon: "linkedin",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CSGirlies",
    icon: "youtube",
  },
];

export const linktreeFooterLinks: LinktreeFooterLink[] = [
  {
    label: "Website",
    href: "https://csgirlies.com",
  },
  {
    label: "Discord",
    href: "https://discord.gg/wPm7NxPQEf",
  },
  {
    label: "Devpost",
    href: "https://cs-girlies-november.devpost.com/?ref_feature=challenge&ref_medium=discover&_gl=1*ocnf2f*_gcl_au*MTM3NjY5ODI4LjE3NzkzMDQwMzY.*_ga*NjEzMjczNjc0LjE3NzkzMDQwMzc.*_ga_0YHJK3Y10M*czE3Nzk0Njc3MTMkbzIkZzEkdDE3Nzk0Njc3MjAkajUzJGwwJGgw",
  },
];
