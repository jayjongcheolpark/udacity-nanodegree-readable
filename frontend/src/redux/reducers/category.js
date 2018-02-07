import { GET_ALL_CATEGORIES_SUCCESS } from '../constants/category';

const categoryReducer = (state = [], action) => {
  console.log(action.type);
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
