import {configureStore} from '@reduxjs/toolkit';
import postReducer from '../reducer/cardsReducer'
import { jsonPlaceholderApi } from '../actionCreator/fetchApi'

export default configureStore({
    reducer: {
        post: postReducer,
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});