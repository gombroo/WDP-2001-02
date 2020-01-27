import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryCarousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

class GalleryCarousel extends React.Component {

  state = {
    activeProduct: 0,
  }

  slidesNumber () {
    this.setState({ isUnmounted: true });
  }


  render () {
    const {activeGallery} = this.props;
    const { activeProduct } = this.state;
    const tumbnailsItems = 6;

    return (
      <div className={styles.root}>
        <div className={styles.carousel}>
          <div className='container'>
            <div className='row'>
              <div className={'col-1'}>
                <div className={styles.arrowLeft}>
                  <button><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></button>
                </div>
              </div>

              {activeGallery
                .slice(activeProduct, activeProduct + tumbnailsItems)
                .map(item => (
                  <div key={item.id} className={'col '}>
                    <div className={styles.tumbnail}>
                      <img  src={item.photo} alt={'alttext'} />
                    </div>
                  </div>
                ))}

              <div className={'col-1'}>
                <div className={styles.arrowRight}>
                  <button><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GalleryCarousel.propTypes = {
  activeGallery: PropTypes.array,
  topSeller: PropTypes.array,
};
export default GalleryCarousel;
