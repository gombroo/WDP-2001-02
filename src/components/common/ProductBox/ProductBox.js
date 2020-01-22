import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button/Button';
import StarRating from '../../features/StarRating/StarRatingContainer';

const ProductBox = ({
  name,
  price,
  promo,
  favorite,
  compare,
  id,
  isUnmounted,
  photo,
  rating,
  toggleFavs,
  toggleCompare,
  comparedItems,
}) => {
  useEffect(() => {
    document.querySelectorAll('#fade').forEach(item => {
      !isUnmounted
        ? item.classList.add(styles.fadeIn)
        : item.classList.add(styles.fadeOut);
    });
  }, [isUnmounted]);

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
        <StarRating productId={id} rating={rating} />
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
  isUnmounted: PropTypes.bool,
  compare: PropTypes.bool,
  favorite: PropTypes.bool,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.object,
  stars: PropTypes.number,
  id: PropTypes.string,
  toggleFavs: PropTypes.func,
  toggleCompare: PropTypes.func,
  photo: PropTypes.string,
  rating: PropTypes.number,
  comparedItems: PropTypes.array,
};

export default ProductBox;
