import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import styles from './MenuBar.module.scss';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    let iconType;

    if (this.state.menuOpen) {
      iconType = faTimes;
    } else {
      iconType = faBars;
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col'>
              <ProductSearch />
            </div>
            <div className={styles.hamburger}>
              <FontAwesomeIcon
                onClick={() => this.handleMenuClick()}
                className={styles.icon}
                icon={iconType}
              />
            </div>
            <nav
              className={
                styles.menu + ` col-auto ${this.state.menuOpen ? styles.active : ''}`
              }
            >
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
  }
}
MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
