// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fixie Developer Portal',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://benlower.github.io/fixie-docs',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'benlower', // Usually your GitHub org/user name.
  projectName: 'fixie-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/favicon.ico',
      navbar: {
        title: 'Fixie Developer Portal',
        logo: {
          alt: 'Fixie Logo',
          src: 'img/favicon.ico',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'docs',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {to: '/docs/intro', label: 'Docs', position: 'left'},
          {to: '/docs/getstarted', label: 'Quickstart', position: 'left'},
          {to: '/docs/apireference', label: 'API', position: 'left'},
          {
            href: 'https://github.com/fixie-ai',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Fixie Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Quickstart',
                to: '/docs/getstarted',
              },
              {
                label: 'Fixie Fundamentals',
                to: '/docs/fundamentals/architecture',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/MsKAeKF8kU',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/fixieai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fixie-ai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fixie.ai, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
