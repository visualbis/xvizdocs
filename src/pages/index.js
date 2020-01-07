import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';





const features = [
    {
        title: <>Advanced Gauge</>,
        imageUrl: 'img/icons/advanced-gauge-chart-icon.png',
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
      </>
        ),
    },
    {
        title: <>Bullet Chart</>,
        imageUrl: 'img/icons/bullet-chart-icon.png',
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
        ),
    },
    {
        title: <>Funnel Chart</>,
        imageUrl: 'img/icons/funnel-chart-icon.png',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
      </>
        ),
    },
    {
        title: <>Hierarchical Tree</>,
        imageUrl: 'img/icons/hierarchical-filter-chart-icon.png',
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
      </>
        ),
    },
    {
        title: <>Hierarchical Variance Table</>,
        imageUrl: 'img/icons/hierarchical-variance-table-chart-icon.png',
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
        ),
    },
    {
        title: <>Horizon Chart</>,
        imageUrl: 'img/icons/horizon-chart-icon.png',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
      </>
        ),
    },
    {
        title: <>Linear Gauge</>,
        imageUrl: 'img/icons/linear-gauge-chart-icon.png',
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
      </>
        ),
    },
    {
        title: <>Marimekko Chart</>,
        imageUrl: 'img/icons/marimekko-chart-icon.png',
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
        ),
    },
    {
        title: <>Multi Axes Chart</>,
        imageUrl: 'img/icons/multi-axes-chart-icon.png',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
      </>
        ),
    },
    {
        title: <>Parallel Coordinates</>,
        imageUrl: 'img/icons/parallel-coordinated-icon.png',
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
      </>
        ),
    },
    {
        title: <>Tag Cloud</>,
        imageUrl: 'img/icons/tag-cloud-icon.png',
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
        ),
    },
    {
        title: <>Variance Chart</>,
        imageUrl: 'img/icons/variance-chart-icon.png',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
      </>
        ),
    }
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`${siteConfig.title} - extending PowerBI`}
            description="xViz custom Visuals">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <img className={styles.logoImage} src={useBaseUrl('img/xViz-1.svg')} alt="xViz" />
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/general/Getting-Started')}>
                            Get Started
                        </Link>
                    </div>
                    <br></br>
                    <img src={useBaseUrl('img/community.png')} alt="xViz" />

                    <p className="hero__subtitle">Explore our advanced custom visuals</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={"https://xviz.com/pricing/"}>
                            SEE PLANS & PRICING
                            </Link>
                    </div>
                </div>

            </header>
            <main>
                {features && features.length && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>

        </Layout >
    );
}

export default Home;
