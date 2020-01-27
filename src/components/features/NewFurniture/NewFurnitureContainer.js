import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, toggleCompare } from '../../../redux/productsRedux.js';
import { getView } from '../../../redux/viewportRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  viewport: getView(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCompare: id => dispatch(toggleCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
