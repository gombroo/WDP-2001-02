import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotion from '../../features/Promotion/Promotion';
import Feedback from '../../features/Feedback/FeedbackContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
