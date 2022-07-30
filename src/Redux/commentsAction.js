import { createSlice } from "@reduxjs/toolkit"
const initialStateComment = {
    comment: [],
}
export const comment = createSlice({
    name: "comment",
    initialState: initialStateComment,
    reducers: {
        setComment(state, action){
            state.comment = action.payload
        },
        postComment(state, action){
            state.comment = [...state.comment, action.payload];
        }
    }
})


export const commentActions = comment.actions;