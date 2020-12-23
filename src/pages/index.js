/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Yutes is easy to Use',
    imageUrl: 'img/colors.svg',
    description: (
      <>
        Yutes was designed from the ground up to be easily installed and used to
        get your website styled up and ready for the ball.
      </>
    ),
  },
  {
    title: 'Typography that just works',
    imageUrl: 'img/fonts.svg',
    description: (
      <>
        Yutes lets you focus on design and takes care of the heavy lifting for
        you - without the bloat. Standardized Type System ez as 1,2, npm install
      </>
    ),
  },
  {
    title: 'Elegant forms made simple',
    imageUrl: 'img/forms.svg',
    description: (
      <>Utilities that make working with forms easier, flexible and not ugly!</>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
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

  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Use ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img
            src="img/light-logo.png"
            style={{borderRadius: '200%', width: '300px'}}
            alt="logo"
          />

          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Yea you do!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
