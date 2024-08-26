"use client";

import { MaintenanceSummaryCard } from "@/components/dashboard/cards/MaintenanceSummaryCard";
import { StockCriticalCard } from "@/components/dashboard/cards/StockCriticalCard";
import { AvgResolutionTimeCard } from "@/components/dashboard/cards/AvgResolutionTimeCard";
import { TotalMaintenanceCostCard } from "@/components/dashboard/cards/TotalMaintenanceCostCard";
import { MaintenanceByPeriodChart } from "@/components/dashboard/charts/MaintenanceByPeriodChart";
import { MaintenanceByEquipmentChart } from "@/components/dashboard/charts/MaintenanceByEquipmentChart";
import { MaintenanceByTypeChart } from "@/components/dashboard/charts/MaintenanceByTypeChart";
import { TeamPerformanceChart } from "@/components/dashboard/charts/TeamPerformanceChart";
import { StockByMaterialChart } from "@/components/dashboard/charts/StockByMaterialChart";
import { CostByMaintenanceChart } from "@/components/dashboard/charts/CostByMaintenanceChart";
import { PeriodFilter } from "@/components/dashboard/filters/PeriodFilter";
import { TeamFilter } from "@/components/dashboard/filters/TeamFilter";
import { EquipmentFilter } from "@/components/dashboard/filters/EquipmentFilter";

export default function DashboardPage() {
  return (
    <div className="space-y-6 mt-10 p-6 gap-20">
      {/* Seção de Cabeçalho */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold">
          Dashboard de Manutenção e Controle
        </h1>
      </header>

      {/* Seção de Cards Resumo */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MaintenanceSummaryCard />
        <StockCriticalCard />
        <AvgResolutionTimeCard />
        <TotalMaintenanceCostCard />
      </section>

      <hr />

      {/* Seção de Relatórios Integrados */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Relatórios de Desempenho e Controle
        </h2>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-6 justify-center w-full">
          <PeriodFilter />
          <TeamFilter />
          <EquipmentFilter />
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-2 w-[1200px] m-auto">
          <MaintenanceByPeriodChart />
          <MaintenanceByEquipmentChart />
          <MaintenanceByTypeChart />
          <TeamPerformanceChart />
          <StockByMaterialChart />
          <CostByMaintenanceChart />
        </div>
      </section>
    </div>
  );
}
