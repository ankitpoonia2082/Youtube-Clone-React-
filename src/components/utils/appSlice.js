import { createSlice } from "@reduxjs/toolkit";

const navbarBtnSlice = createSlice({
    name : "nabBarBtn",
    initialState:{
        ismenuOpen: true
    },
    reducers: {
        toggleMenu:(state)=>{
            state.ismenuOpen =!state.ismenuOpen;
        },
        closeMenu:(state)=>{
            state.ismenuOpen =false;
        },
    },
});

export default navbarBtnSlice.reducer;
export const {toggleMenu ,closeMenu} = navbarBtnSlice.actions;
