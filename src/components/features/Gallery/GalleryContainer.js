import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getFeatured, getSaleOff, getTopRated, getTopSeller } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  featured: getFeatured(state),
  saleOff: getSaleOff(state),
  topRated: getTopRated(state),
  topSeller: getTopSeller(state),
});

export default connect(mapStateToProps)(Gallery);
