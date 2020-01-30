import React from 'react';
import PropTypes from 'prop-types';

import styles from './BlogPost.module.scss';
import Button from '../Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const BlogPost = ({ title, image, text, comments, date }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={styles.single}>
            <div className={styles.top}>
              <div className={styles.thumb}>
                {image}
              </div>
              <div className={styles.meta}>
                <div className={styles.date}>
                  <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon}></FontAwesomeIcon>{' '}
                  02.12.2019
                  {date}
                </div>
                <div className={styles.comments}>
                  <FontAwesomeIcon icon={faComments} className={styles.icon}></FontAwesomeIcon>{' '}
                  {comments}
                  4 comments
                </div>
              </div>
            </div>

            <div className={styles.title}>
              <h5>
                <a href='#'>
                  {title}
                  The Worst Furniture Ever
                </a>
              </h5>
            </div>
            <div className={styles.text}>
              <p>{text}
              React is all about components - basically custom HTML elements - with which you can quickly build amazing and powerful web apps. Just build a component once,
              configure it to your needs.
              </p>
            </div>
            <Button variant='main' className={styles.readmore}>Read more</Button>

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
