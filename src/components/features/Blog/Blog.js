import React from 'react';
import PropTypes from 'prop-types';

import styles from './Blog.module.scss';

class Blog extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Latest Blog</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>dots</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Blog.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.node,
  discount: PropTypes.string,
};

export default Blog;
