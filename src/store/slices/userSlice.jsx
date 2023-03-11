import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    clearAllUsers(state, action) {
      return [];
    },
  },
  extraReducers() {
    builder.addCase(userSlice.actions.clearAllUsers, (state, action) => {
      return [];
    });
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
