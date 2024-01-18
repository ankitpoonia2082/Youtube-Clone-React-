import { createSlice } from "@reduxjs/toolkit";

const navbarBtnSlice = createSlice({
    name : "nabBarBtn",
    initialState:{
        ismenuOpen: true
    },
    reducers: {
        toggleMenu:(state)=>{
            state.ismenuOpen =!state.ismenuOpen
        }
    }
});

export default navbarBtnSlice.reducer;
export const {toggleMenu} = navbarBtnSlice.actions;