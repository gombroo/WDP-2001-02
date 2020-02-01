import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeaturedCategory.module.scss';

const FeaturedCategory = ({ title, titleStrong, subtitle, photo }) => {
  return (
    <div className='row'>
      <div className={styles.photo}>
        <img
          src={photo}
          alt=''
        />
        <div className={styles.layer}></div>
        <div className={styles.title}>
          <span>{title}</span>
          <strong> {titleStrong}</strong>
          <br />
          <span className={styles.subtitle}>{subtitle}</span>
          <br />
          <button className={styles.shopnow}>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

FeaturedCategory.propTypes = {
  title: PropTypes.string,
  titleStrong: PropTypes.string,
  subtitle: PropTypes.string,
  photo: PropTypes.string,
};

export default FeaturedCategory;
