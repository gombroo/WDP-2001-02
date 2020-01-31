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
    activeIndex: 0,
  }

  changeIndex(index) {
    this.setState({activeIndex: index});
    this.sendData(index);
  }

  changeGallery(activeProduct, totalItems) {
    if (activeProduct <= 0){
      activeProduct = 0;
      this.setState({activeProduct: 0});
    }
    if (activeProduct < totalItems){
      this.setState({activeProduct});
    }
    else this.setState({activeProduct: 0});
  }

  sendData(index) {
    this.props.parentCallBack(index);
  }

  render () {
    const { activeGallery } = this.props;
    const { activeProduct, activeIndex } = this.state;
    const tumbnailsItems = 6;

    return (
      <div className={styles.root}>
        <div className={styles.carousel}>
          <div className='container'>
            <div className='row'>
              <div className={'col-1' + styles.btn}>
                <div className={styles.arrowLeft}>
                  <button onClick={() => this.changeGallery(activeProduct - 6, activeGallery.length)}><FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon></button>
                </div>
              </div>

              {activeGallery
                .slice(activeProduct, activeProduct + tumbnailsItems)
                .map(item => (
                  <div key={item.id} className={'col'}
                    onClick={() => this.changeIndex(activeGallery.indexOf(item))}
                  >
                    <div className={styles.tumbnail}>
                      <a>
                        <img className={activeIndex === activeGallery.indexOf(item) ? styles.active : undefined}
                          src={item.photo} alt={'alttext'} />
                      </a>
                    </div>
                  </div>
                ))}

              <div className={'col-1' + styles.btn}>
                <div className={styles.arrowRight}>
                  <button onClick={() => this.changeGallery(activeProduct + 6, activeGallery.length)}><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></button>
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
  parentCallBack: PropTypes.func,
};
export default GalleryCarousel;
