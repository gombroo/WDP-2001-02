/* selectors */
export const getAll = ({ posts }) => posts;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
