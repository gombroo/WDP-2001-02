import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button/Button';
import StarRating from '../../features/StarRating/StarRatingContainer';

import styles from './FeaturedBox.module.scss';


const FeaturedBox = ({ id, rating, name, price, photo, isUnmounted, promo }) => {
  useEffect(() => {
    document.querySelectorAll('#fadeFeatured').forEach(item => {
      !isUnmounted
        ? item.classList.add(styles.fadeIn)
        : item.classList.add(styles.fadeOut);
    });
  }, [isUnmounted]);

  return (
    <div id='fadeFeatured' className={styles.root}>
      <div className={styles.photo}>
        <img
          src={photo}
          alt=''
        />
        <div className={styles.buttons__hover}>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>

          <div className={styles.countdown}>
            <div>
              <span>25</span>
              <br />
              <span>DAYS</span>
            </div>
            <div>
              <span>12</span>
              <br />
              <span>HRS</span>
            </div>
            <div>
              <span>34</span>
              <br />
              <span>MIN</span>
            </div>
            <div>
              <span>23</span>
              <br />
              <span>SEC</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h5>{name}</h5>
        <StarRating productId={id} rating={rating} />
      </div>

      <div className={styles.line}></div>

      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye}>Quick View</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>

        <div className={styles.price}>
          <div className={styles.promoPrice}>$ {promo ? Math.round(price * (1 - promo.discount * 0.01)) : price}</div>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

FeaturedBox.propTypes = {
  id: PropTypes.string,
  rating: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  photo: PropTypes.string,
  isUnmounted: PropTypes.bool,
  promo: PropTypes.object,
};

export default FeaturedBox;
