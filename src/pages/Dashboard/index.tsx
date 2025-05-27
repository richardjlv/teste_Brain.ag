import React, { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import {
  Container,
  StatsContainer,
  StatCard,
  ChartsContainer,
  ChartCard,
} from "./styles";
import useFarms from "../../hooks/useFarms";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const Dashboard: React.FC = () => {
  const farmHook = useFarms();
  const { farms } = farmHook;

  const stats = useMemo(() => {
    return farms.reduce(
      (acc, farm) => {
        // Total area
        acc.totalArea += farm.totalArea;

        // States
        acc.states[farm.state] = (acc.states[farm.state] || 0) + 1;

        // Crops
        Object.values(farm.crops).forEach((crops) => {
          crops.forEach((crop) => {
            if (!acc.crops[crop]) {
              acc.crops[crop] = 1;
            } else {
              acc.crops[crop] += 1;
            }
          });
        });
        // Land usage
        acc.landUsage.agricultural += farm.cultivableArea;
        acc.landUsage.vegetation += farm.vegetationArea;

        return acc;
      },
      {
        totalArea: 0,
        states: {} as Record<string, number>,
        crops: {} as Record<string, number>,
        landUsage: { agricultural: 0, vegetation: 0 },
      },
    );
  }, [farms]);

  const formatDataForPieChart = (data: Record<string, number>) =>
    Object.entries(data).map(([name, value]) => ({ name, value }));

  return (
    <Container>
      <StatsContainer>
        <StatCard>
          <h3>Total de Fazendas</h3>
          <p>{farms.length}</p>
        </StatCard>
        <StatCard>
          <h3>Área Total (ha)</h3>
          <p>{stats.totalArea.toLocaleString()}</p>
        </StatCard>
      </StatsContainer>

      <ChartsContainer>
        <ChartCard>
          <h3>Distribuição por Estado</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={formatDataForPieChart(stats.states)}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                label
              >
                {formatDataForPieChart(stats.states).map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard>
          <h3>Culturas Plantadas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={formatDataForPieChart(stats.crops)}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                label
              >
                {formatDataForPieChart(stats.crops).map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard>
          <h3>Uso do Solo</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={formatDataForPieChart(stats.landUsage)}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                label
              >
                <Cell fill="#00C49F" />
                <Cell fill="#8884D8" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </ChartsContainer>
    </Container>
  );
};

export default Dashboard;
