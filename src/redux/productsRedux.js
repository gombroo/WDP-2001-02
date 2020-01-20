/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getProductById = ({ products }, productId) => {
  const filtered = products.filter(item => item.id === productId);
  return filtered.length ? filtered[0] : { error: true };
};

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const TOGGLE_FAVS = createActionName('TOGGLE_FAVS');
const TOGGLE_COMPARE = createActionName('TOGGLE_COMPARE');

/* action creators */
export const toggleFavs = payload => ({ payload, type: TOGGLE_FAVS });
export const toggleCompare = payload => ({ payload, type: TOGGLE_COMPARE });

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
    default:
      return statePart;
  }
}
