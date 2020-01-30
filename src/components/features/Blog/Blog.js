import React from 'react';
import PropTypes from 'prop-types';

import styles from './Blog.module.scss';

import Swipeable from '../../common/Swipeable/Swipeable';
import BlogPost from '../../common/BlogPost/BlogPost';

class Blog extends React.Component {
  state = {
    activePage: 0,
  };

  handleBlogPageChange = newPage => {
    this.setState({ activePage: newPage });
  };

  render() {
    const { activePage } = this.state;
    const { posts } = this.props;

    const dots = [];
    for (let i = 0; i < 3; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handleBlogPageChange(i)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        {posts[0] && (
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Latest Blog</h3>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <Swipeable>
              <div className='row'>
                <div className='container'>
                  <div className=''>
                    {posts.length ? (
                      posts.map(post => <BlogPost key={post.id} {...post} />)
                    ) : (
                      <p>Sorry, no results found.</p>
                    )}
                  </div>
                </div>
              </div>
            </Swipeable>
          </div>
        )}
      </div>
    );
  }
}

Blog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.number,
      image: PropTypes.string,
      comments: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default Blog;
