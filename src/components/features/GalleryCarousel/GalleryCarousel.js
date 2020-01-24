import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryCarousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

class GalleryCarousel extends React.Component {
  render () {
    const { featured } = this.props;


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
              <div>
                {featured.map(item => (
                  <div key={item.id} className={'col '}>
                    <div className={styles.tumbnail}>
                      <img  src={item.photo} alt={'alttext'} />
                    </div>
                  </div>
                ))}
              </div>
              <div className={'col '}>
                <div className={styles.tumbnail}>
                  <img src={'http://placehold.it/100x80?text=thumb+01'} alt={'alttext'} />
                </div>
              </div>
              <div className={'col '}>
                <div className={styles.tumbnail}>
                  <img src={'http://placehold.it/100x80?text=thumb+02'} alt={'alttext'} />
                </div>
              </div>
              <div className={'col '}>
                <div className={styles.tumbnail}>
                  <img src={'http://placehold.it/100x80?text=thumb+03'} alt={'alttext'} />
                </div>
              </div>
              <div className={'col '}>
                <div className={styles.tumbnail}>
                  <img src={'http://placehold.it/100x80?text=thumb+04'} alt={'alttext'} />
                </div>
              </div>
              <div className={'col '}>
                <div className={styles.tumbnail}>
                  <img src={'http://placehold.it/100x80?text=thumb+05'} alt={'alttext'} />
                </div>
              </div>
              <div className={'col '}>
                <div className={styles.tumbnail}>
                  <img src={'http://placehold.it/100x80?text=thumb+06'} alt={'alttext'} />
                </div>
              </div>
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
  featured: PropTypes.array,
  topSeller: PropTypes.array,
};
export default GalleryCarousel;
