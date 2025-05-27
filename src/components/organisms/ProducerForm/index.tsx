import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormRow, HarvestList, CropList, AddButton } from "./styles";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";
import { Farm } from "../../../types/Farm";
import SelectField from "../../molecules/SelectField";
import { toast } from "react-toastify";
import { validateCPFCNPJ } from "../../../utils";

interface ProducerFormData {
  producerName: string;
  cpfCnpj: string;
  state: string;
  city: string;
  farmName: string;
  totalArea: number;
  cultivableArea: number; // in hectares
  vegetationArea: number;
}

interface Crop {
  name: string;
  harvest: string;
}

interface ProducerFormProps {
  onSubmit: (data: Farm) => void;
  data?: Farm;
}

const ProducerForm: React.FC<ProducerFormProps> = ({ onSubmit, data }) => {
  const [harvests, setHarvests] = useState<string[]>([]);
  const [crops, setCrops] = useState<Crop[]>([]);
  const [newHarvest, setNewHarvest] = useState("");
  const [newCrop, setNewCrop] = useState({ name: "", harvest: "" });

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<ProducerFormData>();

  const handleAddHarvest = () => {
    if (newHarvest) {
      setHarvests([...harvests, newHarvest]);
      setNewHarvest("");
    }
  };

  const handleAddCrop = () => {
    if (newCrop.name && newCrop.harvest) {
      setCrops([...crops, newCrop]);
      setNewCrop({ name: "", harvest: "" });
    }
  };

  const handleRemoveHarvest = (index: number) => {
    setHarvests(harvests.filter((_, i) => i !== index));
  };

  const handleRemoveCrop = (index: number) => {
    setCrops(crops.filter((_, i) => i !== index));
  };

  const onFormSubmit = (formData: ProducerFormData) => {
    if (validateCPFCNPJ(formData.cpfCnpj) === false) {
      setError("cpfCnpj", {
        type: "manual",
        message: "CPF ou CNPJ inválido.",
      });
      toast.error("CPF ou CNPJ inválido.");
      return;
    }
    
    const totalArea =
      Number(formData.cultivableArea) + Number(formData.vegetationArea);
    if (formData.totalArea < totalArea) {
      setError("cultivableArea", {
        type: "manual",
        message: "A área cultivável não pode ser maior que a área total.",
      });
      setError("vegetationArea", {
        type: "manual",
        message: "A área de vegetação não pode ser maior que a área total.",
      });
      toast.error(
        "A área cultivável e a área de vegetação não podem ser maiores que a área total da fazenda.",
      );
      return;
    }

    const farmData: Farm = {
      ...formData,
      harvests,
      id: data ? data.id : "",
      cultivableArea: Number(formData.cultivableArea),
      vegetationArea: Number(formData.vegetationArea),
      totalArea: Number(formData.totalArea),
      crops: crops.reduce(
        (acc, crop) => {
          if (!acc[crop.harvest]) {
            acc[crop.harvest] = [crop.name];
          }

          if (!acc[crop.harvest].includes(crop.name)) {
            acc[crop.harvest].push(crop.name);
          }
          return acc;
        },
        {} as Farm["crops"],
      ),
    };
    onSubmit(farmData);
  };

  useEffect(() => {
    if (data) {
      const { harvests, crops, ...rest } = data;
      setHarvests(harvests || []);
      setCrops(
        Object.entries(crops || {}).flatMap(([harvest, crops]) =>
          crops.map((crop) => ({ name: crop, harvest })),
        ),
      );

      Object.entries({
        ...rest,
        cpfCnpj: data.cpfCnpj,
      }).forEach(([key, value]) => {
        if (value !== undefined) {
          setValue(key as keyof ProducerFormData, value);
        }
      });
    }
  }, [data, setValue]);

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <FormRow>
        <FormField
          label="Nome do produtor"
          placeholder="Digite o nome"
          {...register("producerName", { required: "Nome é obrigatório" })}
          error={errors.producerName?.message}
        />
        <FormField
          label="CPF ou CNPJ"
          placeholder="Digite o documento"
          {...register("cpfCnpj", { required: "Documento é obrigatório" })}
          error={errors.cpfCnpj?.message}
        />
      </FormRow>
      <FormRow>
        <FormField
          label="Estado"
          placeholder="Digite o estado"
          {...register("state", { required: "Estado é obrigatório" })}
          error={errors.state?.message}
        />
        <FormField
          label="Cidade"
          placeholder="Digite a cidade"
          {...register("city", { required: "Cidade é obrigatória" })}
          error={errors.city?.message}
        />
      </FormRow>
      <FormRow>
        <FormField
          label="Nome da fazenda"
          placeholder="Digite o nome da fazenda"
          {...register("farmName", {
            required: "Nome da fazenda é obrigatório",
          })}
          error={errors.farmName?.message}
        />
        <FormField
          label="Área total da fazenda (em hectares)"
          placeholder="Digite a área total"
          type="number"
          {...register("totalArea", {
            required: "Área total é obrigatória",
            min: { value: 0, message: "Área total deve ser maior que 0" },
          })}
          error={errors.totalArea?.message}
        />
      </FormRow>
      <FormRow>
        <FormField
          label="Área agricultável (em hectares)"
          placeholder="Digite a área agricultável"
          type="number"
          {...register("cultivableArea", {
            required: "Área agricultável é obrigatória",
            min: {
              value: 0,
              message: "Área agricultável deve ser maior que 0",
            },
          })}
          error={errors.cultivableArea?.message}
        />
        <FormField
          label="Área de vegetação (em hectares)"
          placeholder="Digite a área de vegetação"
          type="number"
          {...register("vegetationArea", {
            required: "Área de vegetação é obrigatória",
            min: {
              value: 0,
              message: "Área de vegetação deve ser maior que 0",
            },
          })}
          error={errors.vegetationArea?.message}
        />
      </FormRow>
      <FormRow>
        <div>
          <FormField
            label="Nova Safra"
            placeholder="Digite o nome da safra"
            value={newHarvest}
            onChange={(e) => setNewHarvest(e.target.value)}
          />
          <AddButton type="button" onClick={handleAddHarvest}>
            Adicionar Safra
          </AddButton>
          <HarvestList>
            {harvests.map((harvest, index) => (
              <li key={index}>
                {harvest}
                <button
                  type="button"
                  onClick={() => handleRemoveHarvest(index)}
                >
                  ✕
                </button>
              </li>
            ))}
          </HarvestList>
        </div>
      </FormRow>

      <FormRow>
        <FormField
          label="Nova Cultura"
          placeholder="Digite o nome da cultura"
          value={newCrop.name}
          onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
        />
        <SelectField
          label="Safra da Cultura"
          placeholder="Selecione a safra"
          value={newCrop.harvest}
          onChange={(e) => setNewCrop({ ...newCrop, harvest: e.target.value })}
          options={harvests.map((harvest) => ({
            value: harvest,
            label: harvest,
          }))}
        />
        <AddButton type="button" onClick={handleAddCrop}>
          Adicionar Cultura
        </AddButton>
      </FormRow>
      <FormRow>
        <CropList>
          {crops.map((crop, index) => (
            <li key={index}>
              {crop.name} - {crop.harvest}
              <button type="button" onClick={() => handleRemoveCrop(index)}>
                ✕
              </button>
            </li>
          ))}
        </CropList>
      </FormRow>

      <Button type="submit">Salvar</Button>
    </Form>
  );
};

export default ProducerForm;
