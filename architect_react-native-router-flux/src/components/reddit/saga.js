import { put, take, call, fork } from 'redux-saga/effects';
import API from '../../_services/api';

const delay = ms => new Promise(res => setTimeout(res, ms));

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
            console.log('err: ', err);
        });
};

function* test() {
    try {
        yield delay(100);

        // const data = yield call(fetchPostsApi, 'reactjs');
        console.log('data: ');
    } catch (err) {
        console.log('err: ', err);
    }
}

export default function* root() {
    yield fork(test);
}
