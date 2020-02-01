import { connect } from 'react-redux';
import FeaturedSection from './FeaturedSection';
import {
  getHotDeals,
  toggleFavs,
  toggleCompare,
  getCompared,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  hotDeals: getHotDeals(state),
  comparedItems: getCompared(state),
});

const mapDispatchToProps = dispatch => ({
  toggleFavs: id => dispatch(toggleFavs(id)),
  toggleCompare: id => dispatch(toggleCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedSection);
