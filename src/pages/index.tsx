import React, { ReactElement } from 'react';
import { graphql, Link } from 'gatsby';
import { IoLogoNodejs, IoMdGitPullRequest, IoMdRocket } from 'react-icons/io';

import Hero from '../components/Hero';
import Layout from '../components/Layout';

import '../util/konami';

import '../styles/index.scss';

import { HomepageData } from '../types';

import leafsIllustrationFront from '../images/illustrations/leafs-front.svg';
import leafsIllustrationMiddle from '../images/illustrations/leafs-middle.svg';
import leafsIllustrationBack from '../images/illustrations/leafs-back.svg';
import dotsIllustration from '../images/illustrations/dots.svg';
import InstallTabs from '../components/InstallTabs';
import GetStartedSection from '../components/GetStartedSection';

import expressLogo from '../images/logos/express-logo.png';
import electronLogo from '../images/logos/electron-logo.svg';
import eslintLogo from '../images/logos/eslint-logo.svg';
import webTorrentLogo from '../images/logos/web-torrent-logo.png';
import standardjsLogo from '../images/logos/standard-logo.svg';

interface NodeFeatureProps {
  icon?: ReactElement;
  heading: string;
  description: string;
}

const styled = (icon: ReactElement): ReactElement =>
  React.cloneElement(icon, { alt: 'Node Feature', className: 'feature-icon' });

const features = [
  {
    icon: styled(<IoLogoNodejs />),
    heading: 'JavaScript',
    description:
      'Node.js provides support for the JavaScript programming language',
  },
  {
    icon: styled(<IoMdGitPullRequest />),
    heading: 'Open Source',
    description:
      'Node.js is open source and actively maintained by contributors all over the world',
  },
  {
    icon: styled(<IoMdRocket />),
    heading: 'Everywhere',
    description: 'Node.js has been adapted to work in a wide variety of places',
  },
];

const NodeFeature = ({
  icon,
  heading,
  description,
}: NodeFeatureProps): JSX.Element => {
  return (
    <div className="node-features__feature">
      {icon && icon}
      <h4>{heading}</h4>
      <p>{description}</p>
    </div>
  );
};

export default function Index({
  data: {
    page: {
      frontmatter: {
        displayTitle,
        subTitle,
        description,
        learnLinkText,
        beginnerGuideHeaderText,
        beginnerGuideBodyText,
        doMoreWithNodeHeaderText,
        doMoreWithNodeBodyText,
        logoSectionText,
      },
    },
  },
}: HomepageProps): JSX.Element {
  return (
    <Layout title={displayTitle} description={description}>
      <main className="home-page">
        <Hero title={displayTitle} subTitle={subTitle} />

        <section className="node-demo-container">
          <div className="node-demo">
            <InstallTabs />
          </div>
          <img
            className="leafs-front animations"
            src={leafsIllustrationFront}
            alt=""
          />
          <img
            className="leafs-middle animations"
            src={leafsIllustrationMiddle}
            alt=""
          />
          <img
            className="leafs-back animations"
            src={leafsIllustrationBack}
            alt=""
          />
          <img className="dots" src={dotsIllustration} alt="" />
        </section>

        <section className="node-features">
          {features.map(feature => (
            <NodeFeature
              key={feature.heading}
              icon={feature.icon}
              heading={feature.heading}
              description={feature.description}
            />
          ))}
        </section>

        <GetStartedSection
          learnLinkText={learnLinkText}
          beginnerGuideHeaderText={beginnerGuideHeaderText}
          beginnerGuideBodyText={beginnerGuideBodyText}
          doMoreWithNodeHeaderText={doMoreWithNodeHeaderText}
          doMoreWithNodeBodyText={doMoreWithNodeBodyText}
        />
        <section className="trusted-by">
          <h4 className="t-headline">
            {/* Trusted by development teams around the world */}
            {logoSectionText}
          </h4>
          <div className="logos-container">
            <img src={expressLogo} alt="Express logo" width="20%" />
            <img src={electronLogo} alt="Electron logo" width="20%" />
            <img src={eslintLogo} alt="esLint Logo" />
            <img src={webTorrentLogo} alt="WebTorrent Logo" width="20%" />
            <img
              src={standardjsLogo}
              alt="Standard - JavaScript Style Guide"
              width="20%"
            />
          </div>
        </section>

        <div className="download-lts-container">
          <Link to="/learn" className="circular-container">
            {learnLinkText}
          </Link>
        </div>
      </main>
    </Layout>
  );
}
interface HomepageProps {
  data: HomepageData;
}

export const query = graphql`
  query pageQuery {
    page: markdownRemark(fields: { slug: { eq: "homepage" } }) {
      frontmatter {
        title
        displayTitle
        subTitle
        description
        learnLinkText
        beginnerGuideHeaderText
        beginnerGuideBodyText
        doMoreWithNodeHeaderText
        doMoreWithNodeBodyText
        nodeFeatureHeader1
        nodeFeatureHeader2
        nodeFeatureHeader3
        nodeFeature1
        nodeFeature2
        nodeFeature3
        nodeFeatureAltText
        logoSectionText
      }
    }
  }
`;
