"use client";

import * as React from "react";
import { MaintenanceHeader } from "@/components/maintenance/Header";
import { MaintenanceFilters } from "@/components/maintenance/Filters";
import { MaintenanceTable } from "@/components/maintenance/MaintenanceTable";
import { DialogCreateMaintenance } from "@/components/maintenance/DialogCreateMaintenace";
import { DialogViewMaintenance } from "@/components/maintenance/DialogViewMaintenance";
import { mockMaintenances } from "@/data/maintenance";

export default function MaintenanceManagement() {
  const [isCreateOpen, setIsCreateOpen] = React.useState(false);
  const [isViewOpen, setIsViewOpen] = React.useState(false);
  const [selectedMaintenance, setSelectedMaintenance] =
    React.useState<any>(null);
  const [maintenances, setMaintenances] = React.useState<any[]>([]);

  const handleCreate = (maintenance: any) => {
    setMaintenances([...mockMaintenances, maintenance]);
  };

  const handleView = (id: string) => {
    const maintenance = mockMaintenances.find((m) => m.id === id);
    setSelectedMaintenance(maintenance);
    setIsViewOpen(true);
  };

  const handleEdit = () => {
    setIsCreateOpen(!isCreateOpen);
  };

  const handleDelete = (id: string) => {
    setMaintenances(maintenances.filter((m) => m.id !== id));
  };

  return (
    <div className="p-10 justify-end flex flex-col gap-5">
      <MaintenanceFilters
        onSearch={(query: string) => console.log("Pesquisar:", query)}
        handleNewMaintenance={setIsCreateOpen}
      />
      <MaintenanceTable
        maintenances={mockMaintenances}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <DialogCreateMaintenance
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onSave={handleCreate}
      />
      <DialogViewMaintenance
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        maintenance={selectedMaintenance}
      />
    </div>
  );
}
