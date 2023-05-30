import { configureStore } from "@reduxjs/toolkit";
import selectedFlightDataSlice from "./slice-selected-flight-data";

const store = configureStore({
    reducer: {
        selectedFlightData: selectedFlightDataSlice.reducer
    }
})

export default store;