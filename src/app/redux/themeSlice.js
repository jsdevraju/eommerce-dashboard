import { createSlice } from '@reduxjs/toolkit'

//initialState define here
const initialState = {
  theme: "",
}

export const themeSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        changeTheme: (state, {payload}) =>{
            state.theme = payload;
        },
    }
})

//Reducer Action
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;