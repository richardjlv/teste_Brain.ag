import { configureStore } from "@reduxjs/toolkit";
import farmReducer from "./slices/farmSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    farm: farmReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
