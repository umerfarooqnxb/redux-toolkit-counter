import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0,
}
export const inputDataSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        addByAmount: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { addByAmount } = inputDataSlice.actions;

export default inputDataSlice.reducer;