import { configureStore } from "@reduxjs/toolkit";
import cakeReducers from "../features/cake/cakeSlice.js";
import iceCreamReducers from "../features/icecream/iceCreamSlice.js";
import userReducer from "../features/users/userSlice.js";
// import logger from 'redux-logger';

// const { configureStore } = toolkit;
// const { createLogger } = logger;
// const { reducer: cakeReducers } = cakeSlice;
// const { reducer: iceCreamReducers } = iceCreamSlice;
// const { reducer: userReducer } = userSlice;


// This code for enhancers
// const middleware = [];
// middleware.push(createLogger());
// const enhancers = [...middleware];


const store = configureStore({
    reducer: {
        cake: cakeReducers,
        icecream: iceCreamReducers,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
    // middleware: enhancers,
    // middleware: (getDefaultMiddleware) => {
    //     let middleware = getDefaultMiddleware({
    //         serializableCheck: false,
    //     });
    //     middleware = middleware.concat(logger);
    //     return middleware;
    // },
})

export default store;
