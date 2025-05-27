import React from "react";
import Card from "../../atoms/Card";
import { FarmName, FarmDetails } from "./styles";
import { Farm } from "../../../types/Farm";
import { useNavigate } from "react-router";

interface FarmCardProps {
  farm: Farm;
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  const navigate = useNavigate();
  const crops = Object.entries(farm.crops)
    .map(([key, value]) => {
      return value.map((crop) => `${crop} na ${key}`).join(", ");
    })
    .join(", ");
  const harvests = farm.harvests.join(", ");

  const handleCardClick = () => {
    navigate(`/producers/${farm.id}`);
  };

  return (
    <Card
      header={<FarmName>{farm.farmName}</FarmName>}
      variant="outlined"
      onClick={handleCardClick}
    >
      <FarmDetails>CPF/CNPJ: {farm.cpfCnpj}</FarmDetails>
      <FarmDetails>
        Localização: {farm.city}, {farm.state}
      </FarmDetails>
      <FarmDetails>Área Total : {farm.totalArea} hectares</FarmDetails>
      <FarmDetails>Área Cultivável: {farm.cultivableArea} hectares</FarmDetails>
      <FarmDetails>
        Área de vegetação: {farm.vegetationArea} hectares
      </FarmDetails>
      <FarmDetails>Safras: {harvests}</FarmDetails>
      <FarmDetails>Culturas plantadas: {crops}</FarmDetails>
    </Card>
  );
};

export default FarmCard;
