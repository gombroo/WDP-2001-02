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

  state = {
    activeGalleries: this.props.featured,
    activeIndex: 0,
    activeGalleryName: 'featured',
  }

  callBackFunction = (childData) =>
    this.setState({activeIndex: childData});

  handleGalleryChange(newGallery, galleryId) {
    this.setState({ activeGalleries: newGallery });
    this.setState({ activeGalleryName: galleryId });
  }

  render() {
    const {  galeries } = this.props;
    const { activeGalleries, activeIndex, activeGalleryName } = this.state;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col-6'}>
              <div className={styles.boxLeft}>
                <img
                  src={ activeGalleries[activeIndex].photo }
                  className={'img-fluid'}
                  alt={''}
                />
                <div className={styles.heading}>
                  <h3>furniture gallery</h3>
                </div>
                <div className={styles.submenu}>
                  <ul>
                    {galeries.map(item => (
                      <li key={item.id}>
                        <a
                          onClick={() => this.handleGalleryChange(this.props[item.id], item.id)}
                          className={item.id === activeGalleryName ? styles.active : undefined}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
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
                    <span className={styles.promoPrice}>
                    $ {activeGalleries[activeIndex].promo ? Math.round(activeGalleries[activeIndex].price - activeGalleries[activeIndex].promo.discount) : activeGalleries[activeIndex].price}.00
                    </span>
                    {activeGalleries[activeIndex].promo && <span className={styles.standardPrice}>$ { activeGalleries[activeIndex].price }.00</span>}
                  </div>
                  <div className={styles.rate}>
                    <h5>{activeGalleries[activeIndex].name}</h5>
                    <div className={styles.stars}>
                      {[1, 2, 3, 4, 5].map(i => (
                        <a key={i} href='#'>
                          {i <= activeGalleries[activeIndex].stars ? (
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
                  <GalleryCarousel activeGallery={ activeGalleries } parentCallBack={this.callBackFunction}/>
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
  galeries: PropTypes.array,
  promo: PropTypes.array,
};

Gallery.defaultProps = {
  products: [],
};

export default Gallery;
