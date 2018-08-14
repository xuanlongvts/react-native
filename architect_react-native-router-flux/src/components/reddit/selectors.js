export const selectedRedditSelector = state => {
    return state.reducerRedditApi.getIn(['selectedReddit']);
};
export const postsByRedditSelector = state => state.reducerRedditApi.getIn(['postsByReddit']);
