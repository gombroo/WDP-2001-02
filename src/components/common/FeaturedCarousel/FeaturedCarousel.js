import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FeaturedCarousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import FeaturedCategory from '../FeaturedCategory/FeaturedCategory';

const FeaturedCarousel = ({ featuredCategories }) => {

  const [activeCategory, setCategory] = useState(0);

  return (
    <div className={styles.root}>

      {featuredCategories
        .slice(activeCategory * 1, (activeCategory + 1) * 1)
        .map(item => (
          <FeaturedCategory key={item.title} {...item} />
        ))}

      <div className='row'>
        <div
          className={styles.arrow}
          onClick={activeCategory > 0 ?
            () => setCategory(activeCategory - 1)
            :
            null}>
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </div>
        <div
          className={styles.arrow}
          onClick={activeCategory === featuredCategories.length - 1 ?
            null
            :
            () => setCategory(activeCategory + 1)}>
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
