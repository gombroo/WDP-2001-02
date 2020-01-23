/* selectors */
export const getAll = ({ opinions }) => opinions;


/* action name creator */
//const reducerName = 'opinions';
//const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
//const TOGGLE_FAVS = createActionName('TOGGLE_FAVS');

/* action creators */
//export const toggleFavs = payload => ({ payload, type: TOGGLE_FAVS });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
