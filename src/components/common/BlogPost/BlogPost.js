import React from 'react';
import PropTypes from 'prop-types';

import styles from './BlogPost.module.scss';
import Button from '../Button/Button';

const BlogPost = ({ title, image, text, comments, date }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className={styles.thumbnail}>{image}</div>
            <div className={styles.meta}>
              <div className={styles.date}>{date}12.12.2019</div>
              <div className={styles.comment}>{comments}4 comments</div>
            </div>
            <div className={styles.title}><h4> {title}The Worst Furniture Ever</h4></div>
            <div className={styles.text}>
              <p>{text}
              React is all about components - basically custom HTML elements - with which you can quickly build amazing and powerful web apps. Just build a component once,
              configure it to your needs.
              </p>
            </div>
            <Button variant='main'>Read more</Button>
          </div>
        </div>
      </div>
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
