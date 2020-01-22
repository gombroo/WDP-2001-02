import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

export class Gallery extends React.Component {
  render() {
    const { name = 'nie ma', price = '$100.00', promo = '$50.00', stars } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col-6'}>
              <div className={styles.boxLeft}>
                <img
                  src={
                    'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=650&w=650'
                  }
                  className={'img-fluid'}
                  alt={''}
                />
                <div className={styles.heading}>
                  <h3>furniture gallery</h3>
                </div>
                <div className={styles.submenu}>
                  <ul>
                    <li>FEATURED</li>
                    <li>TOP SELLER</li>
                    <li>SALE OFF</li>
                    <li>TOP RATED</li>
                  </ul>
                </div>
                <ul className={styles.buttons}>
                  <li>
                    <Button
                      className={styles.button}
                      variant='outline'
                      data-toggle={'tooltip'}
                      data-placement={'right'}
                      title={'Add to favorite'}
                    >
                      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </Button>
                  </li>
                  <li>
                    <Button
                      className={styles.button}
                      variant='outline'
                      data-toggle={'tooltip'}
                      data-placement={'right'}
                      title={'Add to compare'}
                    >
                      <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                    </Button>
                  </li>
                  <li>
                    <Button
                      className={styles.button}
                      variant='outline'
                      data-toggle={'tooltip'}
                      data-placement={'right'}
                      title={'Follow'}
                    >
                      <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </Button>
                  </li>
                  <li>
                    <Button
                      className={styles.button}
                      variant='outline'
                      data-toggle={'tooltip'}
                      data-placement={'right'}
                      title={'Add to cart'}
                    >
                      <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                    </Button>
                  </li>
                </ul>
                <div className={styles.inbox}>
                  <div className={styles.priceCircle}>
                    <span className={styles.promoPrice}>{promo}</span>
                    <span className={styles.standardPrice}>{price}</span>
                  </div>
                  <div className={styles.rate}>
                    <h5>{name}</h5>
                    <div className={styles.stars}>
                      {[1, 2, 3, 4, 5].map(i => (
                        <a key={i} href='#'>
                          {i <= stars ? (
                            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                          ) : (
                            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-6'}>
              <div className={styles.boxRight}>
                <img
                  src={
                    'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=650&w=940'
                  }
                  className={'img-fluid'}
                  alt={''}
                />
                <div className={styles.promoOffer}>
                  <div></div>
                  <span></span>
                  <button></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Gallery.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  stars: PropTypes.number,
  price: PropTypes.number,
  promo: PropTypes.string,
};

export default Gallery;
