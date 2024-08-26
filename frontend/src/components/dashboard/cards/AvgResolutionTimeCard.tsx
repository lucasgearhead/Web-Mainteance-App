"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AvgResolutionTimeCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tempo Médio de Resolução</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">4h 30m</p>
        <p className="text-muted-foreground">Em média</p>
      </CardContent>
    </Card>
  );
}
