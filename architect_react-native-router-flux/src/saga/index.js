import { all, fork } from 'redux-saga/effects';

import sagaReddit from '../components/reddit/saga';

export default function* rootSaga() {
    yield all([fork(sagaReddit)]);
}
