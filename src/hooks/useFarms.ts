import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../redux/store";
import {
  removeFarm,
  fetch as fetchFarms,
  addFarm,
  editFarm,
} from "../redux/slices/farmSlice";
import { RootState } from "../redux/store";
import { Farm } from "../types/Farm";

const useFarms = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const farm = useSelector((state: RootState) => state.farm);
  const { farms, loading } = farm ?? { farms: [], loading: false };

  useEffect(() => {
    const loadFarms = async () => {
      await dispatch(fetchFarms());
    };
    loadFarms();
  }, [dispatch]);

  const createFarm = async (farm: Farm) => {
    try {
      await dispatch(addFarm(farm)).unwrap();
      navigate("/producers"); // Navigate to farms list
    } catch (error: unknown) {
      console.log("Error creating farm:", error);
    }
  };

  const updateFarm = (farm: Farm) => {
    dispatch(editFarm(farm));
  };

  const deleteFarm = (farmId: string) => {
    dispatch(removeFarm(farmId));
  };

  const findFarmById = (farmId: string) => {
    return farms.find((farm) => farm.id === farmId);
  };

  return {
    farms,
    loading,
    createFarm,
    updateFarm,
    deleteFarm,
    findFarmById,
  };
};

export default useFarms;
