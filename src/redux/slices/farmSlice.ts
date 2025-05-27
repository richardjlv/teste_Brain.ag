import {
  asyncThunkCreator,
  buildCreateSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { Farm } from "../../types/Farm";
import {
  createFarm,
  deleteFarm,
  fetchFarms,
  updateFarm,
} from "../../services/api";

const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

interface FarmState {
  farms: Farm[];
  loading: boolean;
}

const initialState: FarmState = {
  farms: [],
  loading: false,
};

export const fetchFarmsAsync = createAsyncThunk(
  "farms/fetchFarms",
  async () => {
    const response = await fetchFarms();
    return response;
  },
);

const farmSlice = createAppSlice({
  name: "farms",
  initialState,
  reducers: (create) => ({
    addFarm: create.asyncThunk(
      async (farm: Farm) => {
        const res = await createFarm(farm);
        return res;
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state) => {
          state.loading = false;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.farms.push(action.payload);
        },
      },
    ),
    editFarm: create.asyncThunk(
      async (farm: Farm) => {
        const res = await updateFarm(farm.id, farm);
        return res;
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state) => {
          state.loading = false;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          const index = state.farms.findIndex(
            (farm) => farm.id === action.payload.id,
          );
          if (index !== -1) {
            state.farms[index] = action.payload;
          }
        },
      },
    ),
    delete: create.asyncThunk(
      async (farmId: string) => {
        await deleteFarm(farmId);
        return farmId;
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state) => {
          state.loading = false;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.farms = state.farms.filter(
            (farm) => farm.id !== action.payload,
          );
        },
      },
    ),
    fetch: create.asyncThunk(
      async () => {
        const res = await fetchFarms();
        return res;
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state) => {
          state.loading = false;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.farms = action.payload;
        },
      },
    ),
  }),
});

export const {
  addFarm,
  editFarm,
  fetch,
  delete: removeFarm,
} = farmSlice.actions;

export default farmSlice.reducer;
