import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({    
    name: "admin",
    initialState:[],
    reducers:{
        addAdmin(state,action){},
        removeAdmin(state,action){}
    }
}); 

export default adminSlice.reducer;