import React from 'react';
import styles from './FeaturedSection.module.scss';
import FeaturedCarousel from '../FeaturedCarousel/FeaturedCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

import Button from '../../common/Button/Button';

const FeaturedSection = stars => (
  <div className='container'>
    <div className='row'>
      <div className='col-4'>
        <div className={styles.root}>
          <div className={styles.header}>
            Hot deals
            {/* refactor code below to carousel dots */}
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
          <div className={styles.photo}>
            <img
              src='https://images.pexels.com/photos/3316925/pexels-photo-3316925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
            />

            <div className={styles.buttons__hover}>
              <Button variant='small'>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
              </Button>
              <div className={styles.countdown}>
                <div>
                  25
                  <br />
                  <span>DAYS</span>
                </div>
                <div>
                  12
                  <br />
                  <span>HRS</span>
                </div>
                <div>
                  34
                  <br />
                  <span>MIN</span>
                </div>
                <div>
                  23
                  <br />
                  <span>SEC</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h5>Aenean Ru Bristique 1</h5>
            <div className={styles.stars}>
              <a href='#'>
                <FontAwesomeIcon icon={faStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
                <FontAwesomeIcon icon={farStar}> stars</FontAwesomeIcon>
              </a>
            </div>
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
              <div className={styles.promoPrice}>$ 675</div>

              <Button noHover variant='small'>
                $ 650
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='col-8'>
        <FeaturedCarousel />
      </div>
    </div>
  </div>
);

export default FeaturedSection;
