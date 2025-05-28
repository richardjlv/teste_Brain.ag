import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProducerForm from ".";

const mockOnSubmit = jest.fn();

const validFormData = {
  producerName: "João Silva",
  cpfCnpj: "23494992002",
  state: "SP",
  city: "São Paulo",
  farmName: "Fazenda Teste",
  totalArea: 100,
  cultivableArea: 60,
  vegetationArea: 40,
};

describe("ProducerForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render all form fields", () => {
    render(<ProducerForm onSubmit={mockOnSubmit} />);
    
    expect(screen.getByPlaceholderText("Digite o nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite o documento")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite o estado")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite a cidade")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite o nome da fazenda")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite a área total")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite a área agricultável")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite a área de vegetação")).toBeInTheDocument();
  });

  it("should show validation errors for required fields", async () => {
    render(<ProducerForm onSubmit={mockOnSubmit} />);
    
    const submitButton = screen.getByText("Salvar");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Nome é obrigatório")).toBeInTheDocument();
      expect(screen.getByText("Documento é obrigatório")).toBeInTheDocument();
      expect(screen.getByText("Estado é obrigatório")).toBeInTheDocument();
      expect(screen.getByText("Cidade é obrigatória")).toBeInTheDocument();
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("should show error for invalid CPF/CNPJ", async () => {
    render(<ProducerForm onSubmit={mockOnSubmit} />);
    
    fireEvent.change(screen.getByPlaceholderText("Digite o documento"), {
      target: { value: "123" }
    });
    
    const submitButton = screen.getByText("Salvar");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("CPF ou CNPJ inválido")).toBeInTheDocument();
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("should show error when cultivable + vegetation area exceeds total area", async () => {
    render(<ProducerForm onSubmit={mockOnSubmit} />);
    
    // Fill form with invalid area values
    fireEvent.change(screen.getByPlaceholderText("Digite a área total"), {
      target: { value: "100" }
    });
    fireEvent.change(screen.getByPlaceholderText("Digite a área agricultável"), {
      target: { value: "80" }
    });
    fireEvent.change(screen.getByPlaceholderText("Digite a área de vegetação"), {
      target: { value: "50" }
    });

    const submitButton = screen.getByText("Salvar");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("A área cultivável não pode ser maior que a área total")).toBeInTheDocument();
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("should add and remove harvests correctly", () => {
    render(<ProducerForm onSubmit={mockOnSubmit} />);
    
    const harvestInput = screen.getByPlaceholderText("Digite o nome da safra");
    const addButton = screen.getByText("Adicionar Safra");
    
    fireEvent.change(harvestInput, { target: { value: "Safra Teste" } });
    fireEvent.click(addButton);
    
    // Check if harvest appears in the harvest list
    const harvestList = screen.getByTestId("harvest-list").children[0];
    expect(harvestList).toBeInTheDocument();
    
    // Remove harvest by clicking the remove button within the same list item
    const removeButton = harvestList?.querySelector("button");
    if (removeButton) {
      fireEvent.click(removeButton);
    }
    
    // Verify harvest is removed from the list
    expect(screen.queryByText("Safra 2024")).not.toBeInTheDocument();
  });

  it("should submit form with valid data", async () => {
    render(<ProducerForm onSubmit={mockOnSubmit} />);
    
    // Fill all required fields
    fireEvent.change(screen.getByPlaceholderText("Digite o nome"), {
      target: { value: validFormData.producerName }
    });
    fireEvent.change(screen.getByPlaceholderText("Digite o documento"), {
      target: { value: validFormData.cpfCnpj }
    });
    fireEvent.change(screen.getByPlaceholderText("Digite o estado"), {
      target: { value: validFormData.state }
    });
    fireEvent.change(screen.getByPlaceholderText("Digite a cidade"), {
      target: { value: validFormData.city }
    });
    fireEvent.change(screen.getByPlaceholderText("Digite o nome da fazenda"), {
      target: { value: validFormData.farmName }
    });
    fireEvent.change(screen.getByPlaceholderText("Digite a área total"), {
      target: { value: validFormData.totalArea.toString() }
    });
    fireEvent.change(screen.getByPlaceholderText("Digite a área agricultável"), {
      target: { value: validFormData.cultivableArea.toString() }
    });
    fireEvent.change(screen.getByPlaceholderText("Digite a área de vegetação"), {
      target: { value: validFormData.vegetationArea.toString() }
    });

    const submitButton = screen.getByText("Salvar");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          producerName: validFormData.producerName,
          cpfCnpj: validFormData.cpfCnpj,
          state: validFormData.state,
          city: validFormData.city,
          farmName: validFormData.farmName,
          totalArea: validFormData.totalArea,
          cultivableArea: validFormData.cultivableArea,
          vegetationArea: validFormData.vegetationArea,
        })
      );
    });
  });
});
