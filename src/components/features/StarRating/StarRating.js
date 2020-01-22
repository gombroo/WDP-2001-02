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
  setRate(rating, e) {
    e.preventDefault();
    this.setState({
      rating,
      lastRating: rating,
      isRating: true,
    });
  }
  starOver(rating, e) {
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
  render() {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      let icon;
      let classy;
      if (this.props.stars > i && this.props.stars != null) {
        icon = faStar;
        if (this.state.rating > i && this.state.rating != null) {
          classy = styles.selected;
        }
      } else {
        if (this.state.rating > i && this.state.rating != null) {
          classy = styles.selected;
          icon = faStar;
        } else {
          icon = farStar;
        }
      }

      stars.push(
        <a key={i} href='#'>
          <FontAwesomeIcon
            icon={icon}
            className={classy}
            onClick={this.setRate.bind(this, i + 1)}
            onMouseOver={this.starOver.bind(this, i + 1)}
            onMouseOut={this.starOut.bind(this)}
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
};

export default StarRating;
