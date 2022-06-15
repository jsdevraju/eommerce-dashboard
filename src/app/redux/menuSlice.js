import { createSlice } from '@reduxjs/toolkit'

//initialState define here
const initialState = {
  isClick: false,
}

export const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        showMenu: (state, {payload}) =>{
            state.isClick = payload;
        },
    }
})

//Reducer Action
export const { showMenu } = menuSlice.actions;

export default menuSlice.reducer;