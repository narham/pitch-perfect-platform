import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCard } from "@/components/shared/StatsCard";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Trophy, Users, Calendar, TrendingUp } from "lucide-react";

const players = [
  { name: "Ahmad Fauzi", position: "Forward", age: 24, goals: 12, assists: 5, status: "active" as const },
  { name: "Budi Santoso", position: "Midfielder", age: 28, goals: 3, assists: 11, status: "active" as const },
  { name: "Carlos Putra", position: "Defender", age: 26, goals: 1, assists: 2, status: "active" as const },
  { name: "Dani Pratama", position: "Goalkeeper", age: 30, goals: 0, assists: 0, status: "active" as const },
  { name: "Erik Saputra", position: "Forward", age: 22, goals: 8, assists: 3, status: "pending" as const },
];

const playerColumns = [
  { key: "name", label: "Player", render: (r: typeof players[0]) => <span className="font-medium">{r.name}</span> },
  { key: "position", label: "Position" },
  { key: "age", label: "Age", mono: true, className: "text-right" },
  { key: "goals", label: "Goals", mono: true, className: "text-right" },
  { key: "assists", label: "Assists", mono: true, className: "text-right" },
  { key: "status", label: "Status", render: (r: typeof players[0]) => <StatusBadge status={r.status} /> },
];

export default function TeamDashboard() {
  return (
    <AppLayout role="team">
      <div className="space-y-6">
        <div>
          <h1 className="text-heading-l text-foreground">Team Dashboard</h1>
          <p className="text-caption mt-1">Manage your squad, matches, and performance</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Squad Size" value={28} icon={Users} variant="primary" />
          <StatsCard title="Competitions" value={3} icon={Trophy} variant="success" />
          <StatsCard title="Next Match" value="Mar 15" icon={Calendar} variant="warning" />
          <StatsCard title="League Position" value="3rd" change={1} icon={TrendingUp} variant="default" />
        </div>

        <div>
          <h3 className="text-heading-s text-foreground mb-3">Squad Overview</h3>
          <DataTable columns={playerColumns} data={players} />
        </div>
      </div>
    </AppLayout>
  );
}
