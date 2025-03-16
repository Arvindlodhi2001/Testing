import { createSlice } from "@reduxjs/toolkit";

export const UserDetail = createSlice({
  name: "UserDetail",
  initialState: {
    Users: [],
    loading: false,
    error: null,
  },
});

export default UserDetail.reducer;
