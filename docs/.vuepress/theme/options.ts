export interface NavLink {
  text: string;
  link: string;
}

export interface Profile {
  name: string;
  description: string;
  nav: NavLink[];
}

/**
 * Identity of the site, in one place.
 * Edit this file to change the wordmark, nav links and footer.
 */
export const profile: Profile = {
  name: "Tianyou Lan",
  description:
    "Personal homepage of Tianyou Lan — notes on minds, machines, and the craft of software.",
  nav: [
    { text: "GitHub", link: "https://github.com/lantianyou" },
    { text: "X", link: "https://x.com/dtlantianyou" },
    { text: "Email", link: "mailto:dtlantianyou@gmail.com" },
  ],
};
