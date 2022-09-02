import { configureStore} from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import inputReducer from '../features/data/inputDataSlice';

import { fakeAPI } from '../services/fakeAPI';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [fakeAPI.reducerPath]: fakeAPI.reducer,
        data:inputReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fakeAPI.middleware),
})
