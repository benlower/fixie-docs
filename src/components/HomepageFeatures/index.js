import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Harness the Power of LLMs',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Fixie is a platform for building apps using large language models (LLMs). Learn more about the&nbsp;
        <Link to="/docs/fundamentals/architecture">platform architecture</Link>.
      </>
    ),
  },
  {
    title: '5 Minute Quickstart',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Have 5 minutes? Build and deploy your first agent using our <Link to="/docs/getstarted">quickstart</Link>. Go deeper with more in-depth <Link to="/docs/tutorials">tutorials</Link>.
      </>
    ),
  },
  {
    title: 'Key Use Cases',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Create an agent that can <Link to="/docs/fundamentals/document-qa">enable Q&amp;A</Link> on any topic. <Link to="/docs/fundamentals/document-qa">Deploy LangChain</Link> agents on Fixie's production-grade infrastructure.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
