import {configureStore} from '@reduxjs/toolkit';
import loadingSlice from './slices/loadingSlice';
import nguoiDungSlice from './slices/nguoiDungSlice';
import couresSlice from './slices/couresSlice';


export const store = configureStore({
    reducer: {
        loading: loadingSlice,
        nguoiDung: nguoiDungSlice,
        coures: couresSlice,
    },
});