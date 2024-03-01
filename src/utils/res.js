import { createSlice } from "@reduxjs/toolkit";

const resSlice = createSlice({
    name:"res",
    initialState:{


    },
    reducers:{
        addres:(state,action) =>{
            state(action.payload)
        }
    }

})
export const {addres} = resSlice.actions;
export default resSlice.reducer;