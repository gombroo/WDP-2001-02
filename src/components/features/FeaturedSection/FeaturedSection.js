import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FeaturedCarousel from '../../common/FeaturedCarousel/FeaturedCarousel';
import FeaturedBox from '../../common/FeaturedBox/FeaturedBox';

import styles from './FeaturedSection.module.scss';

class FeaturedSection extends Component {
  state = {
    activeProduct: 0,
  };

  render() {
    const { hotDeals } = this.props;
    const { activeProduct } = this.state;

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className={styles.root}>
              <div className={styles.header}>
                Hot deals
                <div className={styles.dots}>
                  <ul>
                    <li>
                      <a href='#'> </a>
                    </li>
                    <li>
                      <a href='#' className={styles.active}>
                        {' '}
                      </a>
                    </li>
                    <li>
                      <a href='#'> </a>
                    </li>
                  </ul>
                </div>
              </div>
              {hotDeals
                .slice(activeProduct * 1, (activeProduct + 1) * 1)
                .map(item => (
                  <FeaturedBox
                    key={item.id} {...item}
                  />
                ))}
            </div>
          </div>

          <div className='col-8'>
            <FeaturedCarousel />
          </div>
        </div>
      </div>
    );
  }
}

FeaturedSection.propTypes = {
  hotDeals: PropTypes.array,
};

export default FeaturedSection;
