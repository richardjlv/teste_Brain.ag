import React from "react";
import ProducerForm from "../../components/organisms/ProducerForm";
import Card from "../../components/atoms/Card";
import useFarms from "../../hooks/useFarms";
import { useNavigate, useParams } from "react-router";
import { Farm } from "../../types/Farm";

const ProducerEdit: React.FC = () => {
  const farmHook = useFarms();
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate(-1);

    return <></>;
  }

  const farm = farmHook.findFarmById(id);

  const handleFarmUpdate = (data: Farm) => {
    farmHook.updateFarm(data);
  };

  return (
    <Card header={"Editar Produtor"}>
      <ProducerForm onSubmit={handleFarmUpdate} data={farm} />
    </Card>
  );
};

export default ProducerEdit;
