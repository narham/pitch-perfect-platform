import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCard } from "@/components/shared/StatsCard";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Calendar, Award, AlertTriangle, CheckCircle } from "lucide-react";

const assignments = [
  { match: "Persija vs Persib", date: "2025-03-15", venue: "GBK Stadium", role: "Main Referee", status: "upcoming" as const },
  { match: "Arema vs Bali Utd", date: "2025-03-14", venue: "Kanjuruhan", role: "4th Official", status: "completed" as const },
  { match: "PSM vs PSIS", date: "2025-03-13", venue: "Mattoanging", role: "VAR", status: "completed" as const },
];

const columns = [
  { key: "match", label: "Match", render: (r: typeof assignments[0]) => <span className="font-medium">{r.match}</span> },
  { key: "date", label: "Date", mono: true },
  { key: "venue", label: "Venue" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status", render: (r: typeof assignments[0]) => <StatusBadge status={r.status} /> },
];

export default function RefereeDashboard() {
  return (
    <AppLayout role="referee">
      <div className="space-y-6">
        <div>
          <h1 className="text-heading-l text-foreground">Referee Dashboard</h1>
          <p className="text-caption mt-1">Your match assignments and performance overview</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Assignments" value={18} icon={Calendar} variant="primary" />
          <StatsCard title="Avg. Rating" value="8.2" icon={Award} variant="success" />
          <StatsCard title="Cards Issued" value={42} icon={AlertTriangle} variant="warning" />
          <StatsCard title="Matches Completed" value={15} icon={CheckCircle} variant="default" />
        </div>

        <div>
          <h3 className="text-heading-s text-foreground mb-3">Recent Assignments</h3>
          <DataTable columns={columns} data={assignments} />
        </div>
      </div>
    </AppLayout>
  );
}
