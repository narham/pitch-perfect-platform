import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { CompetitionFormData } from "@/pages/eo/CompetitionCreatePage";

interface StepProps {
  data: CompetitionFormData;
  onChange: (updates: Partial<CompetitionFormData>) => void;
}

export function StepRules({ data, onChange }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-heading-m text-card-foreground">Rules & Regulations</h2>
        <p className="text-caption mt-1">Define the scoring system and match rules</p>
      </div>

      <div>
        <h3 className="text-heading-s text-card-foreground mb-3">Points System</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Points for Win</Label>
            <Input type="number" min={0} value={data.pointsWin} onChange={(e) => onChange({ pointsWin: parseInt(e.target.value) || 0 })} />
          </div>
          <div className="space-y-2">
            <Label>Points for Draw</Label>
            <Input type="number" min={0} value={data.pointsDraw} onChange={(e) => onChange({ pointsDraw: parseInt(e.target.value) || 0 })} />
          </div>
          <div className="space-y-2">
            <Label>Points for Loss</Label>
            <Input type="number" min={0} value={data.pointsLoss} onChange={(e) => onChange({ pointsLoss: parseInt(e.target.value) || 0 })} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-heading-s text-card-foreground mb-3">Disciplinary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Yellow Card Limit</Label>
            <Input type="number" min={1} value={data.yellowCardLimit} onChange={(e) => onChange({ yellowCardLimit: parseInt(e.target.value) || 5 })} />
            <p className="text-caption">Suspension after this many cards</p>
          </div>
          <div className="space-y-2">
            <Label>Red Card Ban (matches)</Label>
            <Input type="number" min={1} value={data.redCardSuspension} onChange={(e) => onChange({ redCardSuspension: parseInt(e.target.value) || 1 })} />
          </div>
          <div className="space-y-2">
            <Label>Max Substitutions</Label>
            <Input type="number" min={3} max={6} value={data.maxSubstitutions} onChange={(e) => onChange({ maxSubstitutions: parseInt(e.target.value) || 5 })} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-heading-s text-card-foreground mb-3">Match Rules</h3>
        <div className="space-y-4">
          {([
            { key: "extraTime" as const, label: "Extra Time", desc: "Allow extra time in knockout matches" },
            { key: "penalties" as const, label: "Penalty Shootout", desc: "Allow penalties to decide knockout ties" },
            { key: "awayGoals" as const, label: "Away Goals Rule", desc: "Use away goals to break ties in two-legged ties" },
            { key: "var" as const, label: "VAR (Video Assistant Referee)", desc: "Enable VAR reviews during matches" },
          ]).map((rule) => (
            <div key={rule.key} className="flex items-center justify-between rounded-lg border border-border p-3">
              <div>
                <p className="text-sm font-medium text-card-foreground">{rule.label}</p>
                <p className="text-caption">{rule.desc}</p>
              </div>
              <Switch checked={data[rule.key]} onCheckedChange={(v) => onChange({ [rule.key]: v })} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
