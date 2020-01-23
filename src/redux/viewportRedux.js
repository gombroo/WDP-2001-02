/* selectors */
export const getView = ({ viewport }) => viewport;

/* action name creator */
const reducerName = 'viewport';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_VIEWPORT = createActionName('ADD_VIEWPORT');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_VIEWPORT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
