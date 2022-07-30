import { createSlice } from "@reduxjs/toolkit"
const initialStatePromotions = {
    promotions: [],
}
export const promotions = createSlice({
    name: "promotions",
    initialState: initialStatePromotions,
    reducers: {
        setpromotions(state, action){
            state.promotions = action.payload
        }
    }
})


export const promotionsActions = promotions.actions;