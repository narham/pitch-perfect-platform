import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCard } from "@/components/shared/StatsCard";
import { ChartCard } from "@/components/shared/ChartCard";
import { ActivityFeed } from "@/components/shared/ActivityFeed";
import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/StatusBadge";
import {
  Trophy,
  Users,
  DollarSign,
  TrendingUp,
  Shield,
  UserCheck,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 42000, competitions: 18 },
  { month: "Feb", revenue: 48000, competitions: 22 },
  { month: "Mar", revenue: 55000, competitions: 28 },
  { month: "Apr", revenue: 63000, competitions: 35 },
  { month: "May", revenue: 71000, competitions: 42 },
  { month: "Jun", revenue: 85000, competitions: 48 },
  { month: "Jul", revenue: 92000, competitions: 55 },
];

const registrationData = [
  { month: "Jan", players: 4200, teams: 320 },
  { month: "Feb", players: 5100, teams: 380 },
  { month: "Mar", players: 6800, teams: 450 },
  { month: "Apr", players: 7200, teams: 520 },
  { month: "May", players: 8400, teams: 610 },
  { month: "Jun", players: 9100, teams: 680 },
  { month: "Jul", players: 11200, teams: 750 },
];

const topCompetitions = [
  { name: "Premier League 2025", organizer: "FA Indonesia", teams: 20, status: "active" as const, matches: 380 },
  { name: "Copa Nacional U-21", organizer: "PSSI", teams: 32, status: "active" as const, matches: 124 },
  { name: "Regional Cup East", organizer: "ASPROV Jatim", teams: 16, status: "upcoming" as const, matches: 0 },
  { name: "Women's Super League", organizer: "FA Indonesia", teams: 12, status: "active" as const, matches: 66 },
  { name: "Youth Development Cup", organizer: "Garuda Academy", teams: 64, status: "pending" as const, matches: 0 },
];

const activityItems = [
  { id: "1", title: "New EO Registration", description: "Jakarta Football Association joined the platform", time: "2m ago", type: "success" as const },
  { id: "2", title: "Competition Published", description: "Premier League 2025 season is now live", time: "15m ago", type: "info" as const },
  { id: "3", title: "Payment Received", description: "$12,500 subscription from PSSI", time: "1h ago", type: "success" as const },
  { id: "4", title: "System Alert", description: "High API usage detected from EO #2847", time: "2h ago", type: "warning" as const },
  { id: "5", title: "Player Suspension", description: "Red card suspension applied to Player #18923", time: "3h ago", type: "destructive" as const },
  { id: "6", title: "Match Completed", description: "Persija 2-1 Persib — Liga 1 Matchday 24", time: "4h ago", type: "info" as const },
];

const competitionColumns = [
  { key: "name", label: "Competition", render: (row: typeof topCompetitions[0]) => <span className="font-medium">{row.name}</span> },
  { key: "organizer", label: "Organizer" },
  { key: "teams", label: "Teams", mono: true, className: "text-right" as const },
  { key: "matches", label: "Matches", mono: true, className: "text-right" as const },
  { key: "status", label: "Status", render: (row: typeof topCompetitions[0]) => <StatusBadge status={row.status} /> },
];

export default function OwnerDashboard() {
  return (
    <AppLayout role="owner">
      <div className="space-y-6">
        <div>
          <h1 className="text-heading-l text-foreground">Platform Overview</h1>
          <p className="text-caption mt-1">Real-time metrics across the Football Management System</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Total Revenue" value="$485,200" change={12.5} changeLabel="vs last month" icon={DollarSign} variant="primary" />
          <StatsCard title="Active Competitions" value={142} change={8.3} changeLabel="vs last month" icon={Trophy} variant="success" />
          <StatsCard title="Registered Teams" value="3,750" change={15.2} changeLabel="vs last month" icon={Shield} variant="default" />
          <StatsCard title="Active Players" value="98,420" change={22.1} changeLabel="vs last month" icon={UserCheck} variant="default" />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartCard title="Revenue Trend" subtitle="Monthly platform revenue">
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 90%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(0, 0%, 45%)" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(0, 0%, 45%)" tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0, 0%, 100%)",
                    border: "1px solid hsl(0, 0%, 90%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                />
                <Area type="monotone" dataKey="revenue" stroke="hsl(221, 83%, 53%)" fill="url(#revenueGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Registrations" subtitle="New players & teams per month">
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={registrationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 90%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(0, 0%, 45%)" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(0, 0%, 45%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(0, 0%, 100%)",
                    border: "1px solid hsl(0, 0%, 90%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="players" fill="hsl(221, 83%, 53%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="teams" fill="hsl(160, 84%, 39%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Table + Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <h3 className="text-heading-s text-foreground mb-3">Top Competitions</h3>
            <DataTable columns={competitionColumns} data={topCompetitions} />
          </div>
          <ActivityFeed items={activityItems} />
        </div>
      </div>
    </AppLayout>
  );
}
