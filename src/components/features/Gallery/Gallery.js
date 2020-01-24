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
import GalleryCarousel from '../GalleryCarousel/GalleryCarousel';

export class Gallery extends React.Component {

  render() {
    const { featured, topRated, topSeller, saleOff } = this.props;
    const initialProduct = [featured[0]];
    const price = initialProduct.map(standardPrice => standardPrice.price);
    const discount = initialProduct.map(price => price.promo.discount);
    const newPrice = price - discount;
    const title = initialProduct.map(title => title.name);
    const initialStars = initialProduct.map(star => star.stars);
    const picture = initialProduct.map(picture => picture.photo);

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col-6'}>
              <div className={styles.boxLeft}>
                <img
                  src={ picture }
                  className={'img-fluid'}
                  alt={''}
                />
                <div className={styles.heading}>
                  <h3>furniture gallery</h3>
                </div>
                <div className={styles.submenu}>
                  <ul>
                    <li className={styles.active}>FEATURED</li>
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
                    <span className={styles.promoPrice}>{'$ ' + newPrice +'.00'}</span>
                    <span className={styles.standardPrice}>{'$ ' + price + '.00'}</span>
                  </div>
                  <div className={styles.rate}>
                    <h5>{title}</h5>
                    <div className={styles.stars}>
                      {[1, 2, 3, 4, 5].map(i => (
                        <a key={i} href='#'>
                          {i <= initialStars ? (
                            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                          ) : (
                            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.tumbnail}>
                  <GalleryCarousel {...featured}/>
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
                  <p>
                    FROM<span>$50.80</span>
                  </p>
                  <h1>Bedroom Bed</h1>
                  <button>SHOP NOW</button>
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
  featured: PropTypes.array,
  topSeller: PropTypes.array,
  topRated: PropTypes.array,
  saleOff: PropTypes.array,
  product: PropTypes.array,
};

Gallery.defaultProps = {
  products: [],
};

export default Gallery;
