import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FeaturedCarousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import FeaturedCategory from '../FeaturedCategory/FeaturedCategory';

const FeaturedCarousel = ({ featuredCategories }) => {
  const [activeCategory, setCategory] = useState(0);
  const [isUnmounted, unmount] = useState(false);

  const unmountTrue = () => {
    unmount(true);
  };

  const unmountFalse = () => {
    setTimeout(() => unmount(false), 1000);
  };

  const handleCategoryChangeDown = () => {
    unmountTrue();
    setTimeout(() => setCategory(activeCategory - 1), 1100);
    unmountFalse();
  };

  const handleCategoryChangeUp = () => {
    unmountTrue();
    setTimeout(() => setCategory(activeCategory + 1), 1100);
    unmountFalse();
  };

  return (
    <div className={styles.root}>
      {featuredCategories
        .slice(activeCategory * 1, (activeCategory + 1) * 1)
        .map(item => (
          <FeaturedCategory key={item.title} isUnmounted={isUnmounted} {...item} />
        ))}

      <div className='row'>
        <div
          className={styles.arrow}
          onClick={activeCategory > 0 ? () => handleCategoryChangeDown() : null}
        >
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </div>
        <div
          className={styles.arrow}
          onClick={
            activeCategory === featuredCategories.length - 1
              ? null
              : () => handleCategoryChangeUp()
          }
        >
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

FeaturedCarousel.propTypes = {
  featuredCategories: PropTypes.array,
};

export default FeaturedCarousel;
