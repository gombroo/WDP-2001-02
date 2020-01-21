import React from 'react';
import PropTypes from 'prop-types';

import styles from './Promotion.module.scss';

const Promotion = ({ title, subtitle, discount, image }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={'col-6'}>
          <div className={styles.box_one}>
            <p>Guest Room</p>
            <p>Sofa</p>
            <p>-20%</p>
          </div>
        </div>
        <div className='col-6 '>
          <div className={styles.box_two}>
            <p>
              <span>Office</span> Chair
            </p>
            <p>Collection</p>
            <p>$200.00</p>
          </div>
          <div className={styles.box_three}>
            <p>
              <span>Special</span> Collection
            </p>
            <p>Save up 45% of furniture</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// class Promotion extends React.Component {
//   render() {
//     return (
//       <img src={sofa} alt={'sofa'}/>
//     );
//   }
// }

Promotion.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.node,
  discount: PropTypes.string,
};

export default Promotion;
