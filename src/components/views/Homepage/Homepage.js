import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeaturedSection from '../../features/FeaturedSection/FeaturedSectionContainer';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import Promotion from '../../features/Promotion/Promotion';
import Blog from '../../features/Blog/BlogContainer';
import Brands from '../../features/Brands/BrandsContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeaturedSection />
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
    <Blog />
    <Gallery />
    <Feedback />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
