module.exports = {
    title: 'xViz',
    tagline: 'Advanced Custom Visuals for Power BI',
    url: 'https://xviz.com',
    baseUrl: '/',
    favicon: "img/xviz.png",
    organizationName: 'visualbis', // Usually your GitHub org/user name.
    projectName: 'xvizdocs', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'xViz',
            logo: {
                alt: 'xViz Logo',
                src: 'img/logo.svg',
            },
            links: [
               { to: "docs/general/Getting-Started", label: "Docs", position: "right" }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Videos',
                    items: [

                        {
                            label: 'Videos',
                            href: 'https://xviz.com/videos/',
                        },
                        {
                            label: 'Webinars',
                            href: 'https://xviz.com/webinars/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Developers',
                            href: 'https://community.xviz.com/',
                        },
                        {
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/company/xviz/'
                        }
                    ]
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'Blog',
                            href: 'https://xviz.com/blogs/',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/xvizsuite',
                        }
                    ]
                }
            ],
            logo: {
                alt: 'xViz Logo',
                src: 'img/xviz-logo-white.png',
                href: 'https://xviz.com/',
            },
            copyright: `Copyright © ${new Date().getFullYear()} Visual BI`
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js')
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
};
