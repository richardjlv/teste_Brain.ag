import React from "react";
import Card from "../../components/atoms/Card";
import FarmList from "../../components/organisms/FarmList";

const Producers: React.FC = () => {
  return (
    <Card header="Produtores">
      <FarmList />
    </Card>
  );
};

export default Producers;
