"use client";

export function PeriodFilter() {
  return (
    <div>
      <label htmlFor="period" className="text-sm font-medium">
        Período
      </label>
      <select id="period" className="mt-1 block w-full">
        <option value="last7days">Últimos 7 dias</option>
        <option value="last30days">Últimos 30 dias</option>
        <option value="last3months">Últimos 3 meses</option>
      </select>
    </div>
  );
}
