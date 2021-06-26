import { createStore } from '@reduxjs/toolkit';
import aeroReducer from '../redux/aeroSlice';

export const store = createStore(aeroReducer);
