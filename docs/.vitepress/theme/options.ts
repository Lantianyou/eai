export interface NavLink {
  text: string;
  link: string;
}

export interface Profile {
  name: string;
  englishName: string;
  url: string;
  description: string;
  nav: NavLink[];
}

/**
 * Identity of the site, in one place.
 * Edit this file to change the wordmark, nav links and footer.
 */
export const profile: Profile = {
  name: "兰天游",
  englishName: "Tianyou Lan",
  url: "https://lantianyou.com/",
  description:
    "兰天游（Tianyou Lan）的个人主页，记录具身智能数据基础设施、软件工程与机器学习的思考和实践。",
  nav: [
    { text: "GitHub", link: "https://github.com/lantianyou" },
    { text: "X", link: "https://x.com/dtlantianyou" },
    { text: "Email", link: "mailto:dtlantianyou@gmail.com" },
  ],
};
