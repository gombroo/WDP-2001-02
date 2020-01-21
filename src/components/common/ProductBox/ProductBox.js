import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  favorite,
  compare,
  id,
  unmount,
  photo,
  toggleFavs,
  toggleCompare,
  comparedItems,
}) => {
  useEffect(() => {
    document.querySelectorAll('#fade').forEach(item => {
      !unmount ? item.classList.add(styles.fadeIn) : item.classList.add(styles.fadeOut);
    });
  }, [unmount]);

  const handleFavs = (e, id) => {
    e.preventDefault();
    toggleFavs(id);
  };

  const handleCompare = (e, id) => {
    e.preventDefault();
    if (comparedItems.length < 4) {
      toggleCompare(id);
    } else {
      if (compare) {
        toggleCompare(id);
      }
    }
  };

  return (
    <div className={styles.root} id='fade'>
      <div className={styles.photo}>
        <img src={photo} alt='' />
        {promo && <div className={styles.sale}>{promo.name}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
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
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline' active={favorite} onClick={e => handleFavs(e, id)}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            active={compare}
            onClick={e => handleCompare(e, id)}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {promo && <div className={styles.promoPrice}>$ {price}</div>}
          <Button noHover variant='small'>
            $ {promo ? Math.round(price * (1 - promo.discount * 0.01)) : price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  unmount: PropTypes.bool,
  compare: PropTypes.bool,
  favorite: PropTypes.bool,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  toggleFavs: PropTypes.func,
  toggleCompare: PropTypes.func,
  photo: PropTypes.string,
  comparedItems: PropTypes.array,
};

export default ProductBox;
