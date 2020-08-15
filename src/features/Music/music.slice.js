import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const wishList = createSlice({
    name: "wishList",
    initialState: initialState,
    reducers: {
        addWishListSuccess: (state, action) => {
            alert("Add wishList successful")
            return action.payload
        },
        addWishListFail: (state, action) => {
            alert("Opps.. , if album is existed in wishList please try again with another!")
            return [...state]
        }
    }
})

const { reducer, actions } = wishList
export const { addWishListSuccess, addWishListFail } = actions
export default reducer