import { createSlice } from "@reduxjs/toolkit";

// const { createSlice } = toolkit;

const initialState = {
    numOfCakes: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        },
    },
})


export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions
// module.exports = cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions


// module.defult.exports = {
//     cakeReducers: cakeSlice.reducer,
//     cakeActions: cakeSlice.actions
// }