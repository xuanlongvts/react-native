import { put, take, call, fork, select } from 'redux-saga/effects';
import API from '../../_services/api';
import * as actionList from './actions';
import * as nameActList from './consts';
import { postsByRedditSelector } from './selectors';

const fetchPostsApi = reddit => {
    const restApi = new API();
    const path = `/r/${reddit}.json`;

    return restApi
        .fetch(path)
        .then(res => {
            return res.data.data.children.map(item => {
                return item.data;
            });
        })
        .catch(err => {
            put({
                type: 'ERROR',
                err
            });
            // console.log('err: ', err)
        });
};

function* fetchPosts() {
    while (true) {
        const { reddit } = yield take(nameActList.SELECT_REDDIT);

        let dataPosts = null;
        let getPostsFromState = yield select(postsByRedditSelector);
        getPostsFromState = getPostsFromState.getIn([reddit, 'items']);

        getPostsFromState ? (dataPosts = getPostsFromState) : (dataPosts = yield call(fetchPostsApi, reddit));

        yield put(actionList.receivePosts(reddit, dataPosts));
    }
}

function* invalidateReddit() {
    // const delay = ms => new Promise(res => setTimeout(res, ms));
    while (true) {
        const { reddit } = yield take(nameActList.INVALIDATE_REDDIT);

        let dataPosts = null;
        let getPostsFromState = yield select(postsByRedditSelector);
        getPostsFromState = getPostsFromState.getIn([reddit, 'items']);

        getPostsFromState ? (dataPosts = getPostsFromState) : (dataPosts = yield call(fetchPostsApi, reddit));

        yield put(actionList.receivePosts(reddit, dataPosts));
    }
}

export default function* root() {
    yield fork(fetchPosts);
    yield fork(invalidateReddit);
}
