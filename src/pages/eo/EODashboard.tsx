import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCard } from "@/components/shared/StatsCard";
import { ChartCard } from "@/components/shared/ChartCard";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Trophy, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend
} from "recharts";

const formatData = [
  { name: "League", value: 45 },
  { name: "Knockout", value: 30 },
  { name: "Group+KO", value: 15 },
  { name: "Round Robin", value: 10 },
];
const COLORS = ["hsl(221,83%,53%)", "hsl(160,84%,39%)", "hsl(38,92%,50%)", "hsl(0,0%,45%)"];

const matches = [
  { home: "Persija Jakarta", away: "Persib Bandung", date: "2025-03-15", venue: "GBK Stadium", status: "upcoming" as const },
  { home: "Arema FC", away: "Bali United", date: "2025-03-14", venue: "Kanjuruhan", status: "live" as const },
  { home: "PSM Makassar", away: "PSIS Semarang", date: "2025-03-13", venue: "Mattoanging", status: "completed" as const },
];

const matchColumns = [
  { key: "home", label: "Home", render: (r: typeof matches[0]) => <span className="font-medium">{r.home}</span> },
  { key: "away", label: "Away", render: (r: typeof matches[0]) => <span className="font-medium">{r.away}</span> },
  { key: "date", label: "Date", mono: true },
  { key: "venue", label: "Venue" },
  { key: "status", label: "Status", render: (r: typeof matches[0]) => <StatusBadge status={r.status} /> },
];

export default function EODashboard() {
  const navigate = useNavigate();
  return (
    <AppLayout role="eo">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-heading-l text-foreground">Event Organizer Dashboard</h1>
            <p className="text-caption mt-1">Manage your competitions, matches, and venues</p>
          </div>
          <Button onClick={() => navigate("/eo/competitions/create")}>Create Competition</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Active Competitions" value={8} change={2} icon={Trophy} variant="primary" />
          <StatsCard title="Upcoming Matches" value={34} change={-5} icon={Calendar} variant="default" />
          <StatsCard title="Registered Teams" value={128} change={12} icon={Users} variant="success" />
          <StatsCard title="Venues" value={16} icon={MapPin} variant="default" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <h3 className="text-heading-s text-foreground mb-3">Recent Matches</h3>
            <DataTable columns={matchColumns} data={matches} />
          </div>
          <ChartCard title="Competition Formats" subtitle="Distribution by format type">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={formatData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2} dataKey="value">
                  {formatData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid hsl(0,0%,90%)" }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </AppLayout>
  );
}
