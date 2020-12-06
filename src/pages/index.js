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
        What we firmly believe in. It is embedded to us from start prior to joining
        the team.
      </>
    ),
  },
  {
    title: 'Automation? We love that!',
    description: (
      <>
        Down from the very tidbits of development. We have automation for that! I mean who
        wouldn't love it? All your development worries are all handled. wink wink
      </>
    ),
  },
  {
    title: 'So Clean.. So Good..',
    description: (
      <>
        Ever dreamt of maintainable code? A codebase that scales? We have system in place
        to combat such things! Head over to <a href="http://developers.xtendops.com/docs">Docs </a>
        page to have a taste!
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
      <main style={{ background: '#4f99b6' }}>
        could talk about technology stack
        <ul>
          <li>typescript</li>
          <li>nodejs</li>
          <li>flutter</li>
          <li>react</li>
          <li>redux</li>
          <li>webpack</li>
          <li>material-ui</li>
          <li>tailwindcss</li>
          <li>nestjs</li>
          <li>adonisjs</li>
          <li>expressjs</li>
          <li>typeorm</li>
          <li>passportjs</li>
          <li>joi/class-validator</li>
          <li>socket.io</li>
          <li>sveltte</li>
          <li>jest</li>
          <li>mysql</li>
          <li>ubuntu</li>
          <li>nginx</li>
        </ul>
        tools and integrations
        <ul>
          <li>github</li>
          <li>digitial ocean</li>
          <li>heroku</li>
          <li>docker</li>
          <li>google api</li>
          <li>slack api</li>
          <li>twilio</li>
          <li>bit.dev</li>
          <li>swagger</li>
          <li>compodoc</li>
          <li>codecov</li>
          <li>snyk</li>
        </ul>
      </main>
      <main style={{ height: '70vh'}}>
        could showcase projects
      </main>
      <main style={{ height: '30vh'}}>
        Do you want to be part of us?
      </main>
    </Layout>
  );
}

export default Home;
