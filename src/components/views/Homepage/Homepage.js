import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeaturedSection from '../../features/FeaturedSection/FeaturedSection';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotion from '../../features/Promotion/Promotion';
import Blog from '../../features/Blog/Blog';
import Feedback from '../../features/Feedback/FeedbackContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeaturedSection />
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
    <Blog />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
