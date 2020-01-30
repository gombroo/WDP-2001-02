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
    const { navCategories } = this.props;

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
                icon={this.state.menuOpen ? faTimes : faBars}
              />
            </div>
            <nav
              className={
                styles.menu + ` col-auto ${this.state.menuOpen ? styles.active : ''}`
              }
            >
              {navCategories.map(category => (
                <NavLink key={category.id} to={category.link} activeClassName='active'>{category.name}</NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
MenuBar.propTypes = {
  children: PropTypes.node,
  navCategories: PropTypes.array,
};

export default MenuBar;
