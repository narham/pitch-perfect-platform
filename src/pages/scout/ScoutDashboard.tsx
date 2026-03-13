import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCard } from "@/components/shared/StatsCard";
import { ChartCard } from "@/components/shared/ChartCard";
import { Users, FileText, TrendingUp, Star } from "lucide-react";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip
} from "recharts";

const radarData = [
  { skill: "Pace", playerA: 85, playerB: 72 },
  { skill: "Shooting", playerA: 78, playerB: 88 },
  { skill: "Passing", playerA: 82, playerB: 75 },
  { skill: "Dribbling", playerA: 90, playerB: 68 },
  { skill: "Defending", playerA: 45, playerB: 82 },
  { skill: "Physical", playerA: 70, playerB: 78 },
];

export default function ScoutDashboard() {
  return (
    <AppLayout role="scout">
      <div className="space-y-6">
        <div>
          <h1 className="text-heading-l text-foreground">Scouting Dashboard</h1>
          <p className="text-caption mt-1">Discover and compare talent across competitions</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Scouted Players" value={342} change={18} icon={Users} variant="primary" />
          <StatsCard title="Reports Filed" value={87} change={5} icon={FileText} variant="success" />
          <StatsCard title="Recommendations" value={12} icon={Star} variant="warning" />
          <StatsCard title="Avg. Potential" value="78.4" icon={TrendingUp} variant="default" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartCard title="Player Comparison" subtitle="Ahmad Fauzi vs Budi Santoso">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(0,0%,85%)" />
                <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                <Radar name="Ahmad F." dataKey="playerA" stroke="hsl(221,83%,53%)" fill="hsl(221,83%,53%)" fillOpacity={0.2} />
                <Radar name="Budi S." dataKey="playerB" stroke="hsl(160,84%,39%)" fill="hsl(160,84%,39%)" fillOpacity={0.2} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid hsl(0,0%,90%)" }} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Top Scouted Prospects" subtitle="Based on potential rating">
            <div className="space-y-3">
              {[
                { name: "Ahmad Fauzi", club: "Persija Jakarta", potential: 88, position: "FW" },
                { name: "Erik Saputra", club: "Arema FC", potential: 85, position: "FW" },
                { name: "Rio Gunawan", club: "Bali United", potential: 82, position: "MF" },
                { name: "Hadi Kusuma", club: "PSM Makassar", potential: 80, position: "DF" },
                { name: "Irfan Jaya", club: "Persebaya", potential: 79, position: "MF" },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-stats text-xs text-muted-foreground w-4">{i + 1}</span>
                    <div>
                      <p className="text-sm font-medium">{p.name}</p>
                      <p className="text-caption">{p.club} · {p.position}</p>
                    </div>
                  </div>
                  <span className="font-mono-stats text-sm font-semibold text-primary">{p.potential}</span>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>
      </div>
    </AppLayout>
  );
}
