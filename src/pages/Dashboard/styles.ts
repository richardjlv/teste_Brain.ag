import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

export const StatCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0;
    font-size: 16px;
    color: #666;
  }

  p {
    margin: 8px 0 0;
    font-size: 24px;
    font-weight: 600;
    color: #333;
  }
`;

export const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

export const ChartCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 16px;
    font-size: 16px;
    color: #666;
    text-align: center;
  }
`;
