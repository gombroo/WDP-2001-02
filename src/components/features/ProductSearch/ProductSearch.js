import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <div className={styles.select}>
        <button className={styles.dropbtn}>Select a category</button>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />

        <div className={styles.option}>
          <a href='#'>FURNITURE</a>
          <a href='#'>CHAIR</a>
          <a href='#'>TABLE</a>
          <a href='#'>SOFA</a>
          <a href='#'>BED</a>
        </div>
      </div>
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
