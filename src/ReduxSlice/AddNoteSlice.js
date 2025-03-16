import { createSlice } from "@reduxjs/toolkit";

export const notesDetail = createSlice({
  name: "notesDetail",
  initialState: {
    notes: [],
    loading: false,
    error: null,
  },
});

export default notesDetail.reducer;
