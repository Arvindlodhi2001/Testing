import { configureStore } from "@reduxjs/toolkit";
import { UserDetail } from "../ReduxSlice/AddPerson";
UserDetail;

const store = configureStore({
  reducer: {
    Users: UserDetail,
  },
});

export default store;
