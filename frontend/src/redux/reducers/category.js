import { GET_ALL_CATEGORIES_SUCCESS } from '../constants';

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_SUCCESS: {
      const categories = action.categories.map(category => category.name);
      return [...categories];
    }
    default:
      return state;
  }
};

export default categoryReducer;
