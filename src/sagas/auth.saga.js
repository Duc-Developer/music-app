import { takeEvery, put } from 'redux-saga/effects'
import md5 from 'md5'
import { addUserApi, getUserApi } from '../api/users.api';
import auth from '../constants/auth.contants'
import { registerSuccess, loginSuccess, loginFail } from '../auth/auth.slice';

const { POST_REGISTER, POST_LOGIN } = auth

function* register(action) {
    let { payload } = action
    let user = {
        ...payload,
        password: md5(payload.password)
    }
    yield addUserApi(user)
    yield put(registerSuccess(action.payload))
}

function* login(action) {
    let { payload } = action
    let listUsers = yield getUserApi()
    let matched = yield listUsers.filter(item => {
        return item.email === payload.email && item.password === md5(payload.password)
    })
    if(matched.length === 0) {
        yield put(loginFail(action.payload))
    }else {
        yield put(loginSuccess({
            ...matched[0],
            checked: payload.checked
        }))       
    }
}

export function* actionLogin(action) {
    yield takeEvery(POST_LOGIN, login)
}

export function* actionRegister(action) {
    yield takeEvery(POST_REGISTER, register)
}