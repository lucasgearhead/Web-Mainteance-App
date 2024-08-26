"use client";

export function TeamFilter() {
  return (
    <div>
      <label htmlFor="team" className="text-sm font-medium">
        Equipe
      </label>
      <select id="team" className="mt-1 block w-full">
        <option value="teamA">Equipe A</option>
        <option value="teamB">Equipe B</option>
        <option value="teamC">Equipe C</option>
        <option value="teamC">Equipe D</option>
        <option value="teamC">Equipe E</option>
        <option value="teamC">Equipe F</option>
        <option value="teamC">Equipe G</option>
      </select>
    </div>
  );
}
