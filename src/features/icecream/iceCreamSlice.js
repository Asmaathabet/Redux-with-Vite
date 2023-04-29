import { createSlice } from "@reduxjs/toolkit";
// import { ordered as cakeOrdered } from "../cake/cakeSlice.js";

// const { createSlice } = toolkit;

const initialState = {
    numOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload
        },
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIceCreams--
    //     },
    // },
    // extraReducers: (builder) => {
    //     builder.addCase(cakeOrdered, (state) => {
    //         state.numOfIceCreams--
    //     })
    // },
})

// module.exports = cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions

// export default cakeSlice.reducer;
// export const {ordered,restocked } = cakeSlice.actions;