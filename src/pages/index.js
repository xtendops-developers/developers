import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

/*
const features = [
  {
    title: "Develops with Accountability in mind",
    description: (
      <>
        Nulla a est convallis, varius nisl vel, eleifend ipsum. Quisque eget
        sodales augue, vitae scelerisque urna. Quisque imperdiet ante diam, ac
        feugiat felis laoreet quis.
      </>
    ),
  },
  {
    title: "Best of the Best",
    description: (
      <>
        Phasellus facilisis dolor a tincidunt viverra. Morbi semper justo sit
        amet sapien condimentum, at aliquam eros tincidunt. Quisque a ante orci.
      </>
    ),
  },
  {
    title: "Fast and Precise",
    description: (
      <>
        Nunc vel dictum risus. Proin rhoncus vitae dui vel euismod. Sed sodales
        est eget velit ultricies porttitor. Phasellus ac mi ultrices, commodo
        tortor tincidunt, mattis turpis. Vestibulum nisi nisi, hendrerit ac
        justo sit amet, vehicula rutrum neque.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
} */



function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">XtendOps Development Team</h1>
          <p style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
            XtendOps combines leading edge cloudbase technologies with a
            world-class managed workforce solution. We’re a modern offshoring
            entity, built around amazing people and innovative digital
            solutions. Agile and adaptable we quickly react to ever changing
            client needs. We work hand in hand with you to design a customized
            outsourcing strategy to suit your needs and optimize for your
            success. Our focus isn’t simply on supporting your business, but to
            improve operations, customer experience & expand your bottom line.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to="https://github.com/xtendops-developers"
            >
              Check our Github Organization
            </Link>
          </div>
        </div>
      </header>
      <main>
        {/* {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )} */}

        <div className={styles.section}>
          <div className="container home-section text--center margin-bottom--xl">
            <div className="row">
              <div className="col">
                <img
                  className={styles.featureImage}
                  src={useBaseUrl("img/home-programmer.svg")}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  Develops with Accountability in mind
                </h2>
                <p className="padding-horiz--md">
                  What we firmly believe in. It is embedded to us from start
                  prior to joining the team.
                </p>
              </div>
              <div className="col">
                <img
                  className={styles.featureImage}
                  src={useBaseUrl("img/home-auto.svg")}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  Automation? We love that!
                </h2>
                <p className="padding-horiz--md">
                  Down from the very tidbits of development. We have automation
                  for that! I mean who wouldn't love it? All your development
                  worries are all handled. wink wink
                </p>
              </div>
              <div className="col">
                <img
                  className={styles.featureImage}
                  src={useBaseUrl("img/home-language.svg")}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  So Clean.. So Good..
                </h2>
                <p className="padding-horiz--md">
                  Ever dreamt of maintainable code? A codebase that scales? We
                  have system in place to combat such things! Head over to{" "}
                  <a href="http://developers.xtendops.com/docs">Docs</a> page to
                  have a taste!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="home-lang pad">
          <div className="container">

          <Tabs
            className="unique-tabs"
            defaultValue="tech"
            values={[
              {label: 'Technology Stack', value: 'tech'},
              {label: 'Tools and Integrations', value: 'tools'},
            ]}>
            <TabItem value="tech">
              <div className="tech-stack">
                <h3>Technology Stack</h3>
                <div className="row">
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/typescript.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">TypeScript</h5>
                        <small class="avatar__subtitle">
                          Typed JavaScript at Any Scale.
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/nodejs.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">NodeJS</h5>
                        <small class="avatar__subtitle">
                          A JavaScript runtime built on Chrome's V8 JavaScript
                          engine
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/flutter.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Flutter</h5>
                        <small class="avatar__subtitle">
                          Mobile UI Framework
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/react.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">React</h5>
                        <small class="avatar__subtitle">
                          A JavaScript library for building user interfaces
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/redux.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Redux</h5>
                        <small class="avatar__subtitle">
                          A Predictable State Container for JS Apps
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/webpack.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Webpack</h5>
                        <small class="avatar__subtitle">
                          Open-source JavaScript module bundler
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/material-ui.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Material-UI</h5>
                        <small class="avatar__subtitle">
                          The world's most popular React UI framework
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/tailwindcss.jpg"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Tailwind CSS</h5>
                        <small class="avatar__subtitle">
                          A utility-first CSS framework
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/nestjs.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">NestJS</h5>
                        <small class="avatar__subtitle">
                          Progressive Node.js framework
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/adonisjs.jpeg"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">AdonisJS</h5>
                        <small class="avatar__subtitle">
                          A Laravel-style Framework for Node.js
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/express.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">ExpressJS</h5>
                        <small class="avatar__subtitle">
                          Node.js web application framework
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/typeorm.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">TypeORM</h5>
                        <small class="avatar__subtitle">
                          Amazing ORM for TypeScript and JavaScript
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/passportjs.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">PassportJS</h5>
                        <small class="avatar__subtitle">
                          Simple, unobtrusive authentication for Node.js
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/npm.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">joi/class-validator</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/socket.io.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">socket.io</h5>
                        <small class="avatar__subtitle">
                          The fastest & most reliable real-time engine
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/svelte.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Svelte</h5>
                        <small class="avatar__subtitle">
                          Cybernetically enhanced web apps
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/jest.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Jest</h5>
                        <small class="avatar__subtitle">
                          Delightful JavaScript Testing
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/mysql.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">MySQL</h5>
                        <small class="avatar__subtitle">
                          Open-source relational database management system
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/ubuntu.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Ubuntu</h5>
                        <small class="avatar__subtitle">
                          Enterprise Open Source and Linux
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/nginx.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Nginx</h5>
                        <small class="avatar__subtitle">
                          High Performance Load Balancer, Web Server & Reverse
                          Proxy
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabItem>
            <TabItem value="tools">
              <div className="tech-stack">
                <h3>Tools and Integrations</h3>
                <div className="row">
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/github.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">GitHub</h5>
                        <small class="avatar__subtitle">
                          IT service management company
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/digitalocean.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">DigitalOcean</h5>
                        <small class="avatar__subtitle">
                          The developer cloud
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/heroku.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Heroku</h5>
                        <small class="avatar__subtitle">
                          Cloud Application Platform
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/docker.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Docker</h5>
                        <small class="avatar__subtitle">
                          Empowering App Development for Developers
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/googleAPI.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Google APIs</h5>
                        <small class="avatar__subtitle">
                          Allow communication with Google Services
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/slack.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Slack API</h5>
                        <small class="avatar__subtitle">
                          Integrate complex services with Slack
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/twilio.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Twilio</h5>
                        <small class="avatar__subtitle">
                          Communication APIs for SMS, Voice, Video and
                          Authentication
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/bit.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">bit</h5>
                        <small class="avatar__subtitle">
                          The shared component cloud
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/swagger.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Swagger</h5>
                        <small class="avatar__subtitle">
                          API Documentation & Design Tools for Teams
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/compodoc.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">CompoDoc</h5>
                        <small class="avatar__subtitle">
                          The missing documentation tool for your Angular
                          application
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/codecov.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Codecov</h5>
                        <small class="avatar__subtitle">
                          The Leading Code Coverage Solution
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4 margin-bottom--md">
                    <div className="avatar">
                      <img
                        class="avatar__photo avatar__photo--lg"
                        src="img/tech/snyk.png"
                      />
                      <div className="avatar__intro">
                        <h5 className="avatar__name">Snyk</h5>
                        <small class="avatar__subtitle">
                          Develop fast. Stay secure.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabItem>
          </Tabs>

          </div>
        </div>

        <div className="home-showcase pad">
          <div className="container">
            <h1 className="text--center">Showcase</h1>
            <p className="text--center margin-bottom--lg">Develop with accountability in mind. Own it with pride ⚡!</p>
            <div className="row">
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcase card--full-height">
                  <div class="card__image">
                    <video
                      className="vidShow"
                      src="vid/recruitment.mp4"
                      autoPlay
                      loop
                    ></video>
                  </div>
                  <div class="card__body">
                    <div class="avatar">
                      <div class="avatar__intro margin-left--none">
                        <h4 class="avatar__name">XtendOps Recruitment</h4>
                        <small class="avatar__subtitle">
                          A Recruitment App Project for Extend Business Processing Outsourcing.
                        </small>
                      </div>
                    </div>
                  </div>
                  <div class="card__footer">
                    <div class="button-group button-group--block">
                      <a
                        className="button button--primary"
                        href="https://careers.xtendops.com/"
                        target="_blank"
                      >
                        Website
                      </a>
                      <a
                        className="button button--secondary"
                        href="https://github.com/xtendops-developers/recruitment"
                        target="_blank"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcase card--full-height">
                  <div class="card__image">
                    <video
                      className="vidShow"
                      src="vid/xconnect.webm"
                      autoPlay
                      loop
                    ></video>
                  </div>
                  <div class="card__body">
                    <div class="avatar">
                      <div class="avatar__intro margin-left--none">
                        <h4 class="avatar__name">XtendOps Connect</h4>
                        <small class="avatar__subtitle">
                          A cross-account platform for Extend Business Processing Outsourcing
                        </small>
                      </div>
                    </div>
                  </div>
                  <div class="card__footer">
                    <div class="button-group button-group--block">
                      <a
                        className="button button--primary"
                        href="https://xconnect.xtendops.com/"
                        target="_blank"
                      >
                        Website
                      </a>
                      <a
                        className="button button--secondary"
                        href="https://github.com/xtendops-developers/xconnect"
                        target="_blank"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col col--4 margin-bottom--lg">
                <div class="card showcase card--full-height">
                  <div class="card__image">
                    <video
                      className="vidShow"
                      src="vid/api.webm"
                      autoPlay
                      loop
                    ></video>
                  </div>
                  <div class="card__body">
                    <div class="avatar">
                      <div class="avatar__intro margin-left--none">
                        <h4 class="avatar__name">
                          XtendOps Full Scale Company API
                        </h4>
                        <small class="avatar__subtitle">
                          Geared to be the Main API Server of the Company
                        </small>
                      </div>
                    </div>
                  </div>
                  <div class="card__footer">
                    <div class="button-group button-group--block">
                      <a
                        className="button button--primary"
                        href="https://api.xtendops.com/"
                        target="_blank"
                      >
                        Website
                      </a>
                      <a
                        className="button button--secondary"
                        href="https://github.com/xtendops-developers/api"
                        target="_blank"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>

        {/*<div className="home-join pad">
          <div className="container">Do you want to be part of us?</div>
      </div> */ }
      </main>
    </Layout>
  );
}

export default Home;
