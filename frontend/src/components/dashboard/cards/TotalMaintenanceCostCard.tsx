"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TotalMaintenanceCostCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Custo Total de Manutenção</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">$12,500</p>
        <p className="text-muted-foreground">Acumulado no mês</p>
      </CardContent>
    </Card>
  );
}
