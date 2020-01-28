import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import Swipeable from '../../common/Swipeable/Swipeable';

class Feedback extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange = newPage => {
    setTimeout(() => this.setState({ activePage: newPage }), 500);
  };

  render() {
    const { activePage } = this.state;
    const { opinions } = this.props;

    const dots = [];
    for (let i = 0; i < 3; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        {opinions[0] &&
          <div className='container'>

            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Client feedback</h3>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>

            <Swipeable
              itemsCount={3}
              activeItem={this.state.activePage}
              swipeAction={this.handlePageChange}
            >
              <div className='row'>
                <div className={'col ' + styles.quote}>
                  <FontAwesomeIcon icon={faQuoteRight} className={styles.quotes}> stars</FontAwesomeIcon>
                  <div className={styles.opinion}>{opinions[activePage].opinion}</div>
                  <div className={styles.user}>
                    <div className={styles.user_image}>
                      <img src={opinions[activePage].image} alt={opinions[activePage].profession}></img>
                    </div>
                    <div className={styles.user_name}>
                      <h4>{opinions[activePage].name}</h4>
                      <p>{opinions[activePage].profession}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Swipeable>
          </div>
        }
      </div>
    );
  }
}

Feedback.propTypes = {
  opinions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      profession: PropTypes.string,
      image: PropTypes.string,
      opinion: PropTypes.string,
    })
  ),
};

export default Feedback;
