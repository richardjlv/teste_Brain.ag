import React from "react";
import FarmCard from "../../molecules/FarmCard";
import useFarms from "../../../hooks/useFarms";
import { ListContainer, LoadingContainer, EmptyContainer } from "./styles";
import CircularProgress from "../../atoms/CircularProgress";

const FarmList: React.FC = () => {
  const { farms, loading } = useFarms();

  if (loading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

  if (farms.length === 0) {
    return (
      <EmptyContainer>
        <p>No farms available.</p>
      </EmptyContainer>
    );
  }

  return (
    <ListContainer>
      {farms.map((farm) => (
        <FarmCard key={farm.id} farm={farm} />
      ))}
    </ListContainer>
  );
};

export default FarmList;
