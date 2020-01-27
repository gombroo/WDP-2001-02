import React from 'react';
import PropTypes from 'prop-types';

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
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col'>
              <ProductSearch />
            </div>

            <div
              className={styles.hamburger}
              icon={faBars}
              open={this.state.menuOpen}
              onClick={() =>
                this.handleMenuClick(
                  document.querySelector('toggle').classList.add('active')
                )
              }
            />

            <div className={styles.hamburger}>
              <FontAwesomeIcon
                onClick={this.toggle}
                className={styles.icon}
                icon={faBars}
              />
            </div>
            <div className={styles.close}>
              <FontAwesomeIcon
                onClick={this.toggle}
                className={styles.icon}
                icon={faTimes}
              />
            </div>
            <div className={'col-auto ' + styles.menu}>
              <ul>
                <li>
                  <a href='#' className={styles.active}>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#'>Furniture</a>
                </li>
                <li>
                  <a href='#'>Chair</a>
                </li>
                <li>
                  <a href='#'>Table</a>
                </li>
                <li>
                  <a href='#'>Sofa</a>
                </li>
                <li>
                  <a href='#'>Bedroom</a>
                </li>
                <li>
                  <a href='#'>Blog</a>
                </li>
              </ul>
            </div>
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
