import { createSlice } from "@reduxjs/toolkit";
import DishDetail from "../Components/DishDetail";
const initialStateDishes = {
    dishes: [],
    dishDetail: {},
}
export const dishes = createSlice({
    name: "dishes",
    initialState: initialStateDishes,
    reducers: {
        setDishes(state, action){
            state.dishes = action.payload;
        },
        DishDetail(state, action){
            state.dishDetail = action.payload;
        }
    }
})

export const dishesActions = dishes.actions;
