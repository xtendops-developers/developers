module.exports = {
  title: "XtendOps Development Team",
  tagline: "Develop with accountability in mind. Own it with pride ⚡!",
  url: "https://qrrcrghooj.herokuapp.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "XtendOps", // Usually your GitHub org/user name.
  projectName: "developers", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "XtendOps Developers",
      logo: {
        alt: "XtendOps Developers",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          to: "api/",
          activeBasePath: "api",
          label: "Company API",
          position: "left",
        },
        {
          to: "team/",
          activeBasePath: "team",
          label: "Meet the Team",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} XtendOps Development Team`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/xtendops-developers/developers",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/xtendops-developers/developers",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
