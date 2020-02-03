import React from 'react';
import PropTypes from 'prop-types';

import styles from './BrandItem.module.scss';

const BrandItem = ({ image }) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={image} alt='Brand Item' />
      </div>
    </div>
  );
};

BrandItem.propTypes = {
  image: PropTypes.string,
};

export default BrandItem;
