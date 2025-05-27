import React from "react";
import ProducerForm from "../../components/organisms/ProducerForm";
import Card from "../../components/atoms/Card";
import useFarms from "../../hooks/useFarms";
import { Farm } from "@/types/Farm";

const ProducerRegistration: React.FC = () => {
  const farmHook = useFarms();

  const handleCreate = (data: Farm) => {
    farmHook.createFarm(data);
  };

  return (
    <Card header={"Cadastro de Produtor"}>
      <ProducerForm onSubmit={handleCreate} />
    </Card>
  );
};

export default ProducerRegistration;
