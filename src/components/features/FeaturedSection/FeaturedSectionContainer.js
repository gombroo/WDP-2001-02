import { connect } from 'react-redux';
import FeaturedSection from './FeaturedSection';
import {
  getHotDeals,
  toggleFavs,
  toggleCompare,
  getCompared,
} from '../../../redux/productsRedux.js';
import {getAll} from '../../../redux/featuredCategoriesRedux';

const mapStateToProps = state => ({
  hotDeals: getHotDeals(state),
  comparedItems: getCompared(state),
  featuredCategories: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  toggleFavs: id => dispatch(toggleFavs(id)),
  toggleCompare: id => dispatch(toggleCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedSection);
