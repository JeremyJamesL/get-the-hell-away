import { createSlice } from "@reduxjs/toolkit";

const initialSelectedFlightDataState = {
    from: {
        cityName: '',
        countryCode: ''
    },
    to: [],
    outDate: '',
    retuenDate: '',
}

const selectedFlightDataSlice = createSlice({
    name: 'selectedFlightData',
    initialState: initialSelectedFlightDataState,
    reducers: {
        addCityFrom(state, action) {
            state.from = {
                cityName: action.payload.cityName,
                countryCode: action.payload.countryCode
            }
        },
        addCityTo(state, action) {
            state.to.push(action.payload);
        }
    }
})

export const selectedFlightDataActions = selectedFlightDataSlice.actions;

export default selectedFlightDataSlice;