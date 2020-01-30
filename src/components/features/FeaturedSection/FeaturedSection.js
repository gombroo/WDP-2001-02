import React from 'react';
import FeaturedCarousel from '../../common/FeaturedCarousel/FeaturedCarousel';

import FeaturedBox from '../../common/FeaturedBox/FeaturedBox';

const FeaturedSection = stars => (
  <div className='container'>
    <div className='row'>
      <div className='col-4'>
        <FeaturedBox />
      </div>
      <div className='col-8'>
        <FeaturedCarousel />
      </div>
    </div>
  </div>
);

export default FeaturedSection;
