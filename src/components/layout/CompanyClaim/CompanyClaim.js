import React from 'react';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row d-flex align-items-center justify-content-between py-2 py-md-0'>
        {/* phone */}
        <div
          className={`col-12 col-md order-3 order-md-1 d-block text-center text-md-left ${styles.phoneNumber}`}
        >
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560 -
            222
          </p>
        </div>

        {/* logo */}
        <div className='col order-1 order-md-2 d-block text-center'>
          <a href='#'>
            <img src='/images/logo.png' alt='Bazar' />
          </a>
        </div>

        <div
          className={`col order-2 order-md-3 d-block text-left text-sm-center ${styles.cart}`}
        >
          <a href='#' className={styles.cartBox}>
            <div className={styles.cartIcon}>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
            </div>
            <div className={styles.cartCounter}>98765</div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

// CompanyClaim.propTypes = {};

export default CompanyClaim;
