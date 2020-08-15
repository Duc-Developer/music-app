import { takeEvery, put, call } from 'redux-saga/effects'
import { addWishListSuccess, addWishListFail } from '../features/Music/music.slice'
import audioContants from '../constants/audio.contants'
import { database } from '../base'
import { getWishList } from '../api/audio.api'
const { ADD_WISH_LIST } = audioContants

function* addWishList(action) {
    const { audio, userId } = action.payload
    // get wishList user from server
    let val = yield call(
        // () => {
        // return database
        // .ref(`users/${userId}`)
        // .once("value").then(snapshot => {
        //     return snapshot.val().wishList   
        // })}
        () => getWishList(userId)
    )
    // if wishList is not exist, create wishList[0] = audio
    if (!val) {
        database
            .ref(`users/${userId}`)
            .update({
                wishList: [audio]
            })
        yield put(addWishListSuccess([audio]))
        return
    }
    // if album already exist in wishList return fail
    let matched = val.find(item => item === audio)
    if(matched) {
        yield put(addWishListFail())
        return
    }
    // if not, insert audio to wishList
    database
    .ref(`users/${userId}`)
    .update({
        wishList: [...val,audio]
    })
    yield put(addWishListSuccess([...val,audio]))    

}

export function* actionAddWishList(action) {
    yield takeEvery(ADD_WISH_LIST, addWishList)
}