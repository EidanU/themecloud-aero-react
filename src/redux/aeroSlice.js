
import { createSlice } from '@reduxjs/toolkit';
import * as data from '../data/data.json'



const aeroSlice = createSlice({
    name: "aero",
    initialState: {
        iniFlight: data.default,
        customerFlight: {
            iniData: 'dsf',
            selectedFlight: {
                departure: "",
                landing: "",
                hour: "",
                price: "",
            }
        }
    },
    reducers: {
        display(state, action) {
            console.log(action.payload)
            state = action.payload;
            console.log(state);
        }
    },

});
export const actions = aeroSlice.actions
export default aeroSlice.reducer;



