/* selectors */
export const getAll = ({ navCategories }) => navCategories;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
