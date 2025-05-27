import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  &:has(input[multiline]) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const HarvestList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 16px 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    margin: 4px 0;
    background-color: #f5f5f5;
    border-radius: 4px;

    button {
      background: none;
      border: none;
      color: #ff4444;
      cursor: pointer;
      padding: 4px 8px;

      &:hover {
        background-color: rgba(255, 68, 68, 0.1);
        border-radius: 4px;
      }
    }
  }
`;

export const CropList = styled(HarvestList)`
  li {
    background-color: #e8f5e9;
  }
`;

export const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #45a049;
  }
`;
