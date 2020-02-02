import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './FeaturedCategory.module.scss';

const FeaturedCategory = ({ title, titleStrong, subtitle, photo, isUnmounted }) => {

  useEffect(() => {
    document.querySelectorAll('#fadeCategory').forEach(item => {
      !isUnmounted
        ? item.classList.add(styles.fadeIn)
        : item.classList.add(styles.fadeOut);
    });
  }, [isUnmounted]);

  return (
    <div className='row' id='fadeCategory'>
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
  isUnmounted: PropTypes.bool,
};

export default FeaturedCategory;
