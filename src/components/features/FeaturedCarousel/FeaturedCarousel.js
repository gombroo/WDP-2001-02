import React from 'react';
import styles from './FeaturedCarousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FeaturedCarousel = () => (
  <div className={styles.root}>
    <div className='row'>
      <div className={styles.photo}>
        <img
          src='https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
          alt=''
        />
        <div className={styles.layer}></div>
        <div className={styles.title}>
          indoor
          <strong> furniture</strong>
          <br />
          <span className={styles.subtitle}> save up to 50% of all furniture</span>
          <br />
          <button className={styles.shopnow}>Shop Now</button>
        </div>
      </div>
    </div>
    <div className='row'>
      <div className={styles.arrow}>
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>{' '}
      </div>
      <div className={styles.arrow}>
        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
      </div>
    </div>
  </div>
);

export default FeaturedCarousel;
