import { createSlice } from "@reduxjs/toolkit"
const UserSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        add:(state:any , action)=>{
            state.push(action.payload);
        }
    },
})
export const{add} = UserSlice.actions;
export default UserSlice.reducer;
