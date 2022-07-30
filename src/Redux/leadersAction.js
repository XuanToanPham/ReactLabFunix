import { createSlice } from "@reduxjs/toolkit"
const initialStateLeaders = {
    leaders: [],
}
export const leaders = createSlice({
    name: "leaders",
    initialState: initialStateLeaders,
    reducers: {
        setleaders(state, action){
            state.leaders = action.payload
        }
    }
})


export const leadersActions = leaders.actions;