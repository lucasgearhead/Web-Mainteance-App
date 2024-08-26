"use client";

export function EquipmentFilter() {
  return (
    <div>
      <label htmlFor="equipment" className="text-sm font-medium">
        Equipamento
      </label>
      <select id="equipment" className="mt-1 block w-full">
        <option value="equipmentA">Equipamento A</option>
        <option value="equipmentB">Equipamento B</option>
        <option value="equipmentC">Equipamento C</option>
      </select>
    </div>
  );
}
