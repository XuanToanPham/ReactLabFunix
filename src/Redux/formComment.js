import { createSlice } from "@reduxjs/toolkit";
const initialStateFormComment = {
  onShow: false,
  dishId: "",
};
export const formComment = createSlice({
  name: "formComment",
  initialState: initialStateFormComment,
  reducers: {
    showFormComment(state, action) {
        state.onShow = true;
        state.dishId = action.payload
    },
    hideFormComment(state){
        state.onShow = false;
    }
  },
});

export const formCommentActions = formComment.actions;
