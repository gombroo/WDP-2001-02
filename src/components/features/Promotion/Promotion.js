import React from 'react';
import PropTypes from 'prop-types';

import styles from './Promotion.module.scss';

const Promotion = ({ title, subtitle, discount, image }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={'col-sm-12 col-md-6'}>
          <div className={`${styles.box} ${styles.one}`}>
            <p>Guest Room</p>
            <p>Sofa</p>
            <p>-20%</p>
          </div>
        </div>
        <div className={'col-sm-12 col-md-6 py-3 py-md-0'}>
          <div className={`${styles.box} ${styles.two}`}>
            <p>
              <span>Office</span> Chair
            </p>
            <p>Collection</p>
            <p>$200.00</p>
          </div>
          <div className={`${styles.box} ${styles.three}`}>
            <p>
              <span>Special</span> Collection
            </p>
            <p>Save up 45% of furniture</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Promotion.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.node,
  discount: PropTypes.string,
};

export default Promotion;
