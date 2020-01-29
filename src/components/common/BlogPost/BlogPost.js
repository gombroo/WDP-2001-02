import React from 'react';
import PropTypes from 'prop-types';

import styles from './BlogPost.module.scss';
import Button from '../Button/Button';

// import Button from '../Button/Button';

const BlogPost = ({ post, title, image, text, comments, date }) => {
  return (
    <div className={styles.root}>
      {post}
      {title}
      {image}
      {text}
      {date}
      {comments}
      <Button>Read more</Button>
    </div>
  );
};

BlogPost.propTypes = {
  post: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.number,
  text: PropTypes.string,
  date: PropTypes.string,
  comments: PropTypes.string,
};


export default BlogPost;
