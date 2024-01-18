import { configureStore } from "@reduxjs/toolkit"
import navbarBtnSlice from "./appSlice";


const store = configureStore({
    reducer: {
        app:navbarBtnSlice
    }
});


export default store;