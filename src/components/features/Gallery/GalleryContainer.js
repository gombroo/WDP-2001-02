import { connect } from 'react-redux';

import Gallery from './Gallery';

import { getFeatured, getSaleOff, getTopRated, getTopSeller } from '../../../redux/productsRedux.js';
import { getAll } from '../../../redux/galeriesRedux.js';

const mapStateToProps = state => ({
  featured: getFeatured(state),
  saleOff: getSaleOff(state),
  topRated: getTopRated(state),
  topSeller: getTopSeller(state),
  galeries: getAll(state),
});

export default connect(mapStateToProps)(Gallery);
