import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, toggleCompare } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCompare: id => dispatch(toggleCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
