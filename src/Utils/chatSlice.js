import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNTS } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
        state.messages.splice(LIVE_CHAT_COUNTS, 1); // after the particular no of messages 1 message will be deleted
      state.messages.unshift(action.payload); //unshift- new messages added lower to previous message
    },
  },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
