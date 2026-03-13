import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCard } from "@/components/shared/StatsCard";
import { Activity, Trophy, Target, AlertTriangle } from "lucide-react";

export default function PlayerDashboard() {
  return (
    <AppLayout role="player">
      <div className="space-y-6">
        <div>
          <h1 className="text-heading-l text-foreground">Player Dashboard</h1>
          <p className="text-caption mt-1">Your performance overview and career stats</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Matches Played" value={24} change={3} icon={Activity} variant="primary" />
          <StatsCard title="Goals Scored" value={12} change={20} icon={Target} variant="success" />
          <StatsCard title="Competitions" value={2} icon={Trophy} variant="default" />
          <StatsCard title="Yellow Cards" value={3} icon={AlertTriangle} variant="warning" />
        </div>

        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">Full player profile with tabs (Overview, Matches, Statistics, Medical, Disciplinary, Career History) coming soon.</p>
        </div>
      </div>
    </AppLayout>
  );
}
