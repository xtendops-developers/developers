import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const features = [
  {
    title: 'Develops with Accountability in mind',
    description: (
      <>        
        Nulla a est convallis, varius nisl vel, eleifend ipsum. Quisque
        eget sodales augue, vitae scelerisque urna. Quisque imperdiet ante
        diam, ac feugiat felis laoreet quis. 
      </>
    ),
  },
  {
    title: 'Best of the Best',
    description: (
      <>
        Phasellus facilisis dolor a tincidunt viverra. Morbi semper justo sit
        amet sapien condimentum, at aliquam eros tincidunt. Quisque a ante orci.
      </>
    ),
  },
  {
    title: 'Fast and Precise',
    description: (
      <>
        Nunc vel dictum risus. Proin rhoncus vitae dui vel euismod. Sed sodales est eget
        velit ultricies porttitor. Phasellus ac mi ultrices,
        commodo tortor tincidunt, mattis turpis. Vestibulum nisi nisi,
        hendrerit ac justo sit amet, vehicula rutrum neque. 
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">XtendOps Development Team</h1>
          <p style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
XtendOps combines leading edge cloudbase technologies with a world-class managed workforce solution.
We’re a modern offshoring entity, built around amazing people and innovative digital solutions. Agile and adaptable we quickly react to ever changing client needs. We work hand in hand with you to design a customized outsourcing strategy to suit your needs and optimize for your success. Our focus isn’t simply on supporting your business, but to improve operations, customer experience & expand your bottom line.</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to="https://github.com/xtendops-developers">
              Check our Github Organization
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
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
      <main style={{ height: '100vh', background: '#4f99b6'}}>
      </main>
      <main style={{ height: '70vh'}}>
      </main>
    </Layout>
  );
}

export default Home;
