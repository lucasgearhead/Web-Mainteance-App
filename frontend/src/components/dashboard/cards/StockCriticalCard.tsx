"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StockCriticalCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Estoque Crítico</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">5</p>
        <p className="text-muted-foreground">Itens abaixo do nível mínimo</p>
      </CardContent>
    </Card>
  );
}
