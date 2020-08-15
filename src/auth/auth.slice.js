import { createSlice } from '@reduxjs/toolkit'

const authInitialState = {}

const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        loginSuccess: (state, action) => {
            let { payload } = action
            if(payload.checked === true){
                localStorage.setItem("userId", payload.key)
            }else{
                sessionStorage.setItem("userId", payload.key)
            }
            alert("Login successful...!")
            return {
                ...state,
                ...payload
            }
           
        },
        loginFail: (state, action) => {
            alert("Login fail...!")
            return {...state}
        },
        registerSuccess: (state, action) => {
            alert("Register successful...!")
            return {
                ...action.payload
            }
        }
    }
})

const { reducer, actions } = authSlice
export const { loginSuccess, loginFail, registerSuccess } = actions
export default reducer