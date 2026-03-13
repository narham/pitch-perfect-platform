import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Layers, GitBranch, Grid3X3, Repeat, Shuffle, RotateCcw } from "lucide-react";
import type { CompetitionFormData } from "@/pages/eo/CompetitionCreatePage";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface StepProps {
  data: CompetitionFormData;
  onChange: (updates: Partial<CompetitionFormData>) => void;
}

const formats = [
  { value: "league", label: "League", desc: "Round-robin format, all teams play each other", icon: Layers },
  { value: "group_knockout", label: "Group + Knockout", desc: "Group stage followed by elimination rounds", icon: Grid3X3 },
  { value: "single_elimination", label: "Single Elimination", desc: "Lose once and you're out", icon: GitBranch },
  { value: "double_elimination", label: "Double Elimination", desc: "Teams must lose twice to be eliminated", icon: Repeat },
  { value: "swiss", label: "Swiss System", desc: "Paired rounds based on standings", icon: Shuffle },
  { value: "round_robin", label: "Round Robin", desc: "Every team plays every other team once", icon: RotateCcw },
];

export function StepFormat({ data, onChange }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-heading-m text-card-foreground">Competition Format</h2>
        <p className="text-caption mt-1">Choose how teams compete against each other</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {formats.map((f) => (
          <button
            key={f.value}
            onClick={() => onChange({ format: f.value })}
            className={cn(
              "text-left rounded-lg border p-4 transition-all duration-100",
              data.format === f.value
                ? "border-primary bg-primary/5 ring-1 ring-primary"
                : "border-border hover:border-primary/40"
            )}
          >
            <f.icon className={cn("h-5 w-5 mb-2", data.format === f.value ? "text-primary" : "text-muted-foreground")} />
            <p className="text-sm font-medium text-card-foreground">{f.label}</p>
            <p className="text-caption mt-0.5">{f.desc}</p>
          </button>
        ))}
      </div>

      {(data.format === "league" || data.format === "round_robin") && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="space-y-2">
            <Label>Legs</Label>
            <Select value={data.legs} onValueChange={(v) => onChange({ legs: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single (1 leg)</SelectItem>
                <SelectItem value="double">Double (Home & Away)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {data.format === "group_knockout" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="space-y-2">
            <Label>Number of Groups</Label>
            <Input type="number" min={2} max={16} value={data.groupCount} onChange={(e) => onChange({ groupCount: parseInt(e.target.value) || 4 })} />
          </div>
          <div className="space-y-2">
            <Label>Teams per Group</Label>
            <Input type="number" min={3} max={8} value={data.teamsPerGroup} onChange={(e) => onChange({ teamsPerGroup: parseInt(e.target.value) || 4 })} />
          </div>
        </div>
      )}
    </div>
  );
}
