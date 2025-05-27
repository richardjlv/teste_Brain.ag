import { Farm } from "@/types/Farm";
import { toast } from "react-toastify";

// Mock data
let mockFarms: Farm[] = [
  {
    id: "1",
    producerName: "João Silva",
    cpfCnpj: "123.456.789-00",
    farmName: "Fazenda São João",
    city: "São Paulo",
    state: "SP",
    totalArea: 1000,
    cultivableArea: 800,
    vegetationArea: 200,
    crops: {
      "Safra 2021": ["Soja", "Milho"],
      "Safra 2022": ["Café", "Soja"],
    },
    harvests: ["Safra 2021", "Safra 2022"],
  },
  {
    id: "2",
    producerName: "Maria Santos",
    cpfCnpj: "987.654.321-00",
    farmName: "Fazenda Santa Maria",
    city: "Curitiba",
    state: "PR",
    totalArea: 1500,
    cultivableArea: 1200,
    vegetationArea: 300,
    crops: {
      "Safra 2021": ["Trigo", "Cevada"],
      "Safra 2022": ["Arroz", "Trigo"],
    },
    harvests: ["Safra 2022", "Safra 2023"],
  },
];

// Simulated delay to mimic API calls
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchFarms = async (): Promise<Farm[]> => {
  try {
    await delay(1000); // Simulate network delay
    return mockFarms;
  } catch (error: unknown) {
    toast.error("Ocorreu um erro ao buscar os produtores. Tente novamente.");
    if (error instanceof Error) {
      throw new Error("Error fetching farms: " + error.message);
    }
    throw new Error("Error fetching farm: Unknown error occurred.");
  }
};

export const createFarm = async (farmData: Farm): Promise<Farm> => {
  try {
    await delay(1000);
    const lastId =
      mockFarms.length > 0 ? parseInt(mockFarms[mockFarms.length - 1].id) : 0;
    const newFarm = {
      ...farmData,
      id: (lastId + 1).toString(),
    };
    mockFarms = [...mockFarms, newFarm];

    toast.success("Produtor criado com sucesso.");
    return newFarm;
  } catch (error: unknown) {
    toast.error("Ocorreu um erro ao criar o produtor. Tente novamente.");
    if (error instanceof Error) {
      throw new Error("Error creating farm: " + error.message);
    }
    throw new Error("Error creating farm: Unknown error occurred.");
  }
};

export const updateFarm = async (
  farmId: string,
  farmData: Farm,
): Promise<Farm> => {
  try {
    await delay(1000);
    const index = mockFarms.findIndex((farm) => farm.id === farmId);
    if (index === -1) {
      throw new Error("Farm not found");
    }

    // Create new array with updated farm
    mockFarms = [
      ...mockFarms.slice(0, index),
      { ...farmData, id: farmId },
      ...mockFarms.slice(index + 1),
    ];

    toast.success("Produtor atualizado com sucesso.");
    return mockFarms[index];
  } catch (error: unknown) {
    toast.error("Ocorreu um erro ao atualizar o produtor. Tente novamente.");
    if (error instanceof Error) {
      throw new Error("Error updating farm: " + error.message);
    }
    throw new Error("Error updating farm: Unknown error occurred.");
  }
};

export const deleteFarm = async (farmId: string): Promise<void> => {
  try {
    await delay(1000);
    const index = mockFarms.findIndex((farm) => farm.id === farmId);
    if (index === -1) {
      throw new Error("Farm not found");
    }
    mockFarms.splice(index, 1);

    toast.success("Produtor deletado com sucesso.");
  } catch (error: unknown) {
    toast.error("Ocorreu um erro ao deletar o produtor. Tente novamente.");
    if (error instanceof Error) {
      throw new Error("Error deleting farm: " + error.message);
    }
    throw new Error("Error deleting farm: Unknown error occurred.");
  }
};
