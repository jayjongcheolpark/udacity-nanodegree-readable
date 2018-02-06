import { GET_POSTS_BY_CATEGORY_SUCCESS } from "../constants/posts";


const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS_BY_CATEGORY_SUCCESS:
      const { category, posts } = action

      return { ...state, [category]: posts }

    default:
      return state
  }
}

export default postsReducer