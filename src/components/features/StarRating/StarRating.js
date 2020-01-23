import React from 'react';
import PropTypes from 'prop-types';

import styles from './StarRating.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating,
      lastRating: props.rating,
      isRating: false,
    };
  }
  setRate(e, rating) {
    e.preventDefault();
    this.setState({
      rating,
      lastRating: rating,
      isRating: true,
    });
    this.handleRating(rating);
  }
  starOver(e, rating) {
    this.setState({
      rating,
      isRating: true,
    });
  }
  starOut() {
    let { lastRating } = this.state;
    this.setState({
      rating: lastRating,
      isRating: false,
    });
  }
  handleRating(rating, id = this.props.productId) {
    const payload = {
      id,
      rating,
    };
    this.props.addRating(payload);
  }
  render() {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      let icon;
      let classy;
      if (this.state.rating) {
        if (this.state.rating > i && this.state.rating != null) {
          classy = styles.selected;
          icon = faStar;
        } else {
          icon = farStar;
        }
      } else {
        this.props.stars > i && this.props.stars != null
          ? (icon = faStar)
          : (icon = farStar);
      }

      stars.push(
        <a key={i} href='#'>
          <FontAwesomeIcon
            icon={icon}
            className={classy}
            onClick={e => this.setRate(e, i + 1)}
            onMouseOver={e => this.starOver(e, i + 1)}
            onMouseOut={() => this.starOut()}
          >
            {i} stars
          </FontAwesomeIcon>
        </a>
      );
    }
    return <div className={styles.stars}>{stars}</div>;
  }
}

StarRating.propTypes = {
  stars: PropTypes.number,
  rating: PropTypes.number,
  productId: PropTypes.string,
  addRating: PropTypes.func,
};

export default StarRating;
