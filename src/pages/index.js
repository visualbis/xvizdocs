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
        url: '/docs/gauges/AdvancedGauge',
        description: (
            <>
                Compare and visualize the actual value against a target value.
      </>
        ),
    }, {
        title: <>Gantt</>,
        imageUrl: 'img/icons/gantt-chart-icon.png',
        url: '/docs/special/GanttChart',
        description: (
            <>
                A handy Project Management tool within Power BI with advanced customization features
      </>
        ),
    },
    {
        title: <>Bullet Chart</>,
        imageUrl: 'img/icons/bullet-chart-icon.png',
        url: '/docs/special/BulletChart',
        description: (
            <>
                Bullet chart is a variation of a bar chart that was developed as a replacement for gauges and meters.
      </>
        ),
    },
    {
        title: <>Funnel Chart</>,
        imageUrl: 'img/icons/funnel-chart-icon.png',
        url: '/docs/visuals/FunnelChart',
        description: (
            <>
                A two-in-one visual which serves as both Funnel & Pyramid chart.
                It functions in two different modes viz., the default mode and the 3D mode.
      </>
        ),
    },
    {
        title: <>Hierarchical Filter</>,
        imageUrl: 'img/icons/hierarchical-filter-chart-icon.png',
        url: '/docs/filters/HierarchicalFilter',
        description: (
            <>
                The Hierarchical Filter for Power BI is a selector component like a slicer, just that it can display multiple category values in an expandable tree view used to displayed hierarchical nodes for filtering.
      </>
        ),
    },
    {
        title: <>Hierarchical Tree</>,
        imageUrl: 'img/icons/hierarchical-tree-chart-icon.png',
        url: '/docs/utils/HierarchyTree',
        description: (
            <>
                The Hierarchical Tree is an advanced custom visual of the xViz suite built for Power BI to showcase hierarchies in a more visually appealing manner.
      </>
        ),
    },
    {
        title: <>Hierarchical Variance Table</>,
        imageUrl: 'img/icons/hierarchical-variance-table-chart-icon.png',
        url: '/docs/tables/HierarchyVarianceTable',
        description: (
            <>
                The xViz Hierarchical Variance table provides user the ability to view and analyze hierarchical data with much more detailing added to it.
      </>
        ),
    },
    {
        title: <>Horizon Chart</>,
        imageUrl: 'img/icons/horizon-chart-icon.png',
        url: '/docs/visuals/HorizonChart',
        description: (
            <>
                Analyze time-series outliers and predominant patterns with color bands that diverge.
      </>
        ),
    },
    {
        title: <>Linear Gauge</>,
        imageUrl: 'img/icons/linear-gauge-chart-icon.png',
        url: '/docs/gauges/LinearGauge',
        description: (
            <>
                Compare progress of desired value against target value.
      </>
        ),
    },
    {
        title: <>Marimekko Chart</>,
        imageUrl: 'img/icons/marimekko-chart-icon.png',
        url: '/docs/visuals/MarimekkoChart',
        description: (
            <>
                Visualize categorical data over two percentage scale variables.
      </>
        ),
    },
    {
        title: <>Multi Axes Chart</>,
        imageUrl: 'img/icons/multi-axes-chart-icon.png',
        url: '/docs/visuals/MultipleAxesChart',
        description: (
            <>
                Display up to five separate axis values each with their own series type spanning column, line, spline and area.
      </>
        ),
    },
    {
        title: <>Parallel Coordinates</>,
        imageUrl: 'img/icons/parallel-coordinated-icon.png',
        url: '/docs/utils/ParallelCoordinates',
        description: (
            <>
                Parallel coordinates visualization is used to plot multivariate numerical data.
      </>
        ),
    },
    {
        title: <>Tag Cloud</>,
        imageUrl: 'img/icons/tag-cloud-icon.png',
        url: '/docs/utils/TagCloud',
        description: (
            <>
                A tag cloud is a visual representation of words that come along with your data.
      </>
        ),
    },
    {
        title: <>Variance Chart</>,
        imageUrl: 'img/icons/variance-chart-icon.png',
        url: '/docs/visuals/VarianceChart',
        description: (
            <>
                Analyze comparisons of two values across three distinct visualizations (comparison chart, variance chart and variance percentage) integrated into one visual control.
      </>
        ),
    }
];

function Feature({ url, imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames('col col--3', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <Link to={useBaseUrl(url)}><img className={styles.featureImage} src={imgUrl} alt={title} /></Link>
                </div>
            )}
            <Link to={useBaseUrl(url)}>
                <h3>{title}</h3>
            </Link>
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
                    <Link to={"https://community.xviz.com/"}><img src={useBaseUrl('img/community.png')} alt="xViz" /></Link>

                    <p className="hero__subtitle">Explore our advanced custom visuals</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={"https://xviz.com/pricing/"}>
                            See Plans & Pricing
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
