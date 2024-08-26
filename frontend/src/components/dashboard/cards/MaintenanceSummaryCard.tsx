"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MaintenanceSummaryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manutenções Pendentes</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">10</p>
        <p className="text-muted-foreground">Aguardando início</p>
      </CardContent>
    </Card>
  );
}
