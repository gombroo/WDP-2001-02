import React from 'react';
//import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Feedback extends React.Component {
  state = {
    activePage: 0,
    isUnmounted: false,
  };

  unmountTrue() {
    this.setState({ isUnmounted: true });
  }

  unmountFalse() {
    setTimeout(() => this.setState({ isUnmounted: false }), 500);
  }

  handlePageChange = newPage => {
    this.unmountTrue();
    setTimeout(() => this.setState({ activePage: newPage }), 500);
    this.unmountFalse();
  };

  render() {
    const { activePage } = this.state;

    const dots = [];
    for (let i = 0; i < 3; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
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
          <div className='row'>
            <div className={'col ' + styles.quote}>
              <FontAwesomeIcon icon={faQuoteRight} className={styles.quotes}> stars</FontAwesomeIcon>
              <div className={styles.opinion}>Praesent massa justo, finibus in nisl nec, luctus blandit sem. Mauris vitae elementum ante, vitae porttitor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit, sem non dapibus aliquam, lectus mi auctor odio, ut ornare diam nibh eget arcu. Suspendisse facilisis nisl vitae velit finibus, sit amet congue purus euismod. </div>
              <div className={styles.user}>
                <div className={styles.user_image}>
                  <img src="https://images.unsplash.com/photo-1491335404485-a45965d77414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"></img>
                </div>
                <div className={styles.user_name}>
                  John Smith
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
