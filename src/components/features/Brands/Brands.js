import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';

import Swipeable from '../../common/Swipeable/Swipeable';
import BrandItem from '../../common/BrandItem/BrandItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

class Brands extends React.Component {
  state = {
    activePage: 0,
  };

  render() {
    const { activePage } = this.state;
    const { brands } = this.props;

    return (
      <div className={styles.root}>
        {brands[0] && (
          <Swipeable>
            <div className='container'>
              <div className='row flex-nowrap justify-content-center ml-1 mr-1'>
                <div className={'col ' + styles.leftArrow}>
                  <button>
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </button>
                </div>
                {brands.map(brand => (
                  <div key={brand.id} className={styles.brandBox}>
                    <BrandItem {...brand} />
                  </div>
                ))}
                <div className={'col ' + styles.rightArrow}>
                  <button>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </button>
                </div>
              </div>
            </div>
          </Swipeable>
        )}
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
    })
  ),
};

export default Brands;
