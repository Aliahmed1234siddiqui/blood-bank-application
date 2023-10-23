import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Reducers/UserSlice"
const Store = configureStore({
    reducer:{
        user:UserSlice,
    }

})
export default Store;