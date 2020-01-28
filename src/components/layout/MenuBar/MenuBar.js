import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col '>
          <ProductSearch />
        </div>

        <div href='#' className={'col' + styles.hamburger}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <nav className={'col-auto ' + styles.menu}>
          <NavLink to='/' activeClassName='active'>Home</NavLink>
          <NavLink to='/shop/all' activeClassName='active'>Furniture</NavLink>
          <NavLink to='/shop/chair' activeClassName='active'>Chair</NavLink>
          <NavLink to='/shop/table' activeClassName='active'>Table</NavLink>
          <NavLink to='/shop/sofa' activeClassName='active'>Sofa</NavLink>
          <NavLink to='/shop/bedroom' activeClassName='active'>Bedroom</NavLink>
          <NavLink to='/blog' activeClassName='active'>Blog</NavLink>
        </nav>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
