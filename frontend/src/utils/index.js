import _ from 'lodash';

export const getSortedPosts = (posts, order) => {
  if (order === 'date') {
    return _.orderBy(posts, 'timestamp', 'desc');
  } else if (order === 'score') {
    return _.orderBy(posts, 'voteScore', 'desc');
  }
  return posts;
};
