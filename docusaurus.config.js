/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const path = require('path');

const customFields = {
  ria: {
    businessUrls: {
      portfolio: '',
      steer: 'https://steer.software',
    },
    socialUrls: {
      linkdin: '',
      github: 'https://github.com/riapacheco',
      twitter: '',
    },
    avatar:
      'https://avatars2.githubusercontent.com/u/53801436?s=460&u=24a361c7cb532e96ff36122fae9d593c73897066&v=4',
  },
};
module.exports = {
  title: 'Yutes',
  tagline: 'Wanna use some Yutes?',
  url: 'https://patkellydesigns.github.io',
  baseUrl: '/ria-yutes/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/light-logo.png',
  organizationName: 'patkellydesigns', // Usually your GitHub org/user name.
  projectName: 'ria-yutes', // Usually your repo name.
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        reloadPopup: '@theme/PwaReloadPopup',
        swCustom: path.resolve(__dirname, 'src/sw.js'),

        offlineModeActivationStrategies: ['appInstalled', 'queryString'],

        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/dark-logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/dark-logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/dark-logo.png',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/dark-logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    customFields,
    navbar: {
      title: 'Yutes',

      logo: {
        alt: 'Yutes Logo',
        src: 'img/dark-logo.png',
        srcDark: 'img/light-logo.png',
      },
      items: [
        {
          to: 'docs/what',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},

        {
          href: 'https://github.com/riapacheco/ria-yutes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Yutes',
              to: 'docs/what',
            },
            {
              label: 'Our Style Guide',
              to: 'docs/style',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/riapacheco/ria-yutes',
            },
          ],
        },
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Yutes Logo',
        src: 'img/light-logo.png',
        href: 'https://riapacheco.github.io/ria-yutes',
      },

      copyright: `Copyright © ${new Date().getFullYear()} Yutes, Inc. Built with Docusaurus.`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          editUrl:
            'https://github.com/riapacheco/ria-yutes/edit/master/documentation/',
        },

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/riapacheco/ria-yutes/edit/master/documentation/blog/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
