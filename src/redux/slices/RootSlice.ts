import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name:"root",
    initialState: {
        name: "Name",
        description: "Description",
        price: "Price",
        max_speed: "Max Speed",
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload},
        chooseDescription: (state, action) => {state.description = action.payload},
        choosePrice: (state, action) => {state.price = action.payload},
        chooseSpeed: (state, action) => {state.max_speed = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseDescription, choosePrice, chooseSpeed } = rootSlice.actions;