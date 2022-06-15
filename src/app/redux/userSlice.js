import { createSlice } from '@reduxjs/toolkit'

//initialState define here
const initialState = {
  user: null,
  token: "",
  isAdmin:"",
}

export const userInfoSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login: (state, {payload}) =>{
            return {...state, user:payload.userInfo, token:payload.token, isAdmin:payload?.userInfo?.role}
        },
    }
})

//Reducer Action
export const { login } = userInfoSlice.actions;

export default userInfoSlice.reducer;