export interface Farm {
  id: string;
  cpfCnpj: string;
  producerName: string;
  farmName: string;
  city: string;
  state: string;
  totalArea: number; // in hectares
  cultivableArea: number; // in hectares
  vegetationArea: number; // in hectares
  harvests: string[]; // e.g., ["Safra 2021", "Safra 2022"]
  crops: { [key: string]: string[] }; // e.g., { "Safra 2021": ["Soja", "Milho"], "Safra 2022": ["Café"] }
}
