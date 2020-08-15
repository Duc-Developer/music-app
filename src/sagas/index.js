import { actionRegister, actionLogin } from './auth.saga'
import { actionAddWishList } from './music.saga'
import { all } from 'redux-saga/effects'

export default function* rootSaga(){
    yield all([
        actionRegister(),
        actionLogin(),
        actionAddWishList()
    ])
}