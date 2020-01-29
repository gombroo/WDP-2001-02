import React from 'react';
import PropTypes from 'prop-types';

import styles from './Blog.module.scss';

import Swipeable from '../../common/Swipeable/Swipeable';
import BlogPost from '../../common/BlogPost/BlogPost';

class Blog extends React.Component {
  state = {
    activePage: 0,
  };

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
                <ul>...</ul>
              </div>
            </div>
          </div>

          <Swipeable>
            <div className='row'>
              <div className='container'>
                <div className='d-flex flex-column flex-md-row'>
                  <BlogPost />
                  <BlogPost />
                  <BlogPost />
                </div>
              </div>
            </div>
          </Swipeable>

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
