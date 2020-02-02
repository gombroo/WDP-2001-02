/* selectors */
export const getAll = ({ featuredCategories }) => featuredCategories;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
