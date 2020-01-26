import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeaturedSection from '../../features/FeaturedSection/FeaturedSection';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeaturedSection />
    <FeatureBoxes />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
