import React from 'react';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        {/* phone desktop */}
        <div className={`col text-left d-none d-md-block ${styles.phoneNumber}`}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560 -
            222
          </p>
        </div>

        {/* logo desktop */}
        <div className='col text-center d-none d-md-block'>
          <a href='#'>
            <img src='/images/logo.png' alt='Bazar' />
          </a>
        </div>

        {/* logo mobile */}
        <div className='col text-left d-block d-md-none'>
          <a href='#'>
            <img src='/images/logo.png' alt='Bazar' />
          </a>
        </div>

        <div className={`col text-right ${styles.cart}`}>
          <a href='#' className={styles.cartBox}>
            <div className={styles.cartIcon}>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
            </div>
            <div className={styles.cartCounter}>98765</div>
          </a>

          {/* phone mobile */}
          <div className={`col text-right d-block d-md-none p-0 ${styles.phoneNumber}`}>
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560
              - 222
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// CompanyClaim.propTypes = {};

export default CompanyClaim;
