import { put, take, call, fork } from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));
function* test() {
    while (true) {
        yield delay(5000);
        console.log('aaa');
    }
}

export default function* root() {
    yield fork(test);
}
