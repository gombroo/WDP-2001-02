/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getCompared = ({ products }) =>
  products.filter(item => item.compare === true);

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getTopRated = ({ products }) =>
  products.filter(item => item.topRated === true);

export const getTopSeller = ({ products }) =>
  products.filter(item => item.topSeller === true);

export const getSaleOff = ({ products }) =>
  products.filter(item => item.saleOff === true);

export const getFeatured = ({ products }) =>
  products.filter(item => item.featured === true);

export const getProductById = ({ products }, productId) => {
  const filtered = products.filter(item => item.id === productId);
  return filtered.length ? filtered[0] : { error: true };
};

export const getProductsByCategory = ({ products }, categoryId) =>
  categoryId ? products.filter(item => item.category === categoryId) : products;


/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const TOGGLE_FAVS = createActionName('TOGGLE_FAVS');
const TOGGLE_COMPARE = createActionName('TOGGLE_COMPARE');
const ADD_RATING = createActionName('ADD_RATING');

/* action creators */
export const toggleFavs = payload => ({ payload, type: TOGGLE_FAVS });
export const toggleCompare = payload => ({ payload, type: TOGGLE_COMPARE });
export const addRating = payload => ({ payload, type: ADD_RATING });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVS:
      return statePart.map(product => {
        if (product.id !== action.payload) {
          return product;
        }
        return {
          ...product,
          favorite: !product.favorite,
        };
      });
    case TOGGLE_COMPARE:
      return statePart.map(product => {
        if (product.id !== action.payload) {
          return product;
        }
        return {
          ...product,
          compare: !product.compare,
        };
      });

    case ADD_RATING:
      return statePart.map(product => {
        if (product.id !== action.payload.id) {
          return product;
        }
        return {
          ...product,
          rating: action.payload.rating,
        };
      });
    default:
      return statePart;
  }
}
