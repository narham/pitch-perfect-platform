import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { CompetitionFormData } from "@/pages/eo/CompetitionCreatePage";

interface StepProps {
  data: CompetitionFormData;
  onChange: (updates: Partial<CompetitionFormData>) => void;
}

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export function StepSchedule({ data, onChange }: StepProps) {
  const toggleDay = (day: string) => {
    const days = data.matchDays.includes(day)
      ? data.matchDays.filter((d) => d !== day)
      : [...data.matchDays, day];
    onChange({ matchDays: days });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-heading-m text-card-foreground">Schedule Configuration</h2>
        <p className="text-caption mt-1">Define when and how matches are scheduled</p>
      </div>

      <div>
        <h3 className="text-heading-s text-card-foreground mb-3">Match Days</h3>
        <div className="flex flex-wrap gap-2">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => toggleDay(day)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium border transition-colors duration-100",
                data.matchDays.includes(day)
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-card-foreground border-border hover:border-primary/40"
              )}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label>Default Kickoff Time</Label>
          <Input type="time" value={data.defaultKickoff} onChange={(e) => onChange({ defaultKickoff: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>Match Duration (min)</Label>
          <Input type="number" min={60} max={120} value={data.matchDuration} onChange={(e) => onChange({ matchDuration: parseInt(e.target.value) || 90 })} />
        </div>
        <div className="space-y-2">
          <Label>Half-time (min)</Label>
          <Input type="number" min={10} max={20} value={data.halfTimeDuration} onChange={(e) => onChange({ halfTimeDuration: parseInt(e.target.value) || 15 })} />
        </div>
        <div className="space-y-2">
          <Label>Rest Days Between Matches</Label>
          <Input type="number" min={1} max={14} value={data.restDaysBetween} onChange={(e) => onChange({ restDaysBetween: parseInt(e.target.value) || 3 })} />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">
          <strong className="text-card-foreground">Auto-scheduler:</strong> Based on your configuration, the system will generate an optimal match schedule once teams are registered and venues are assigned.
        </p>
      </div>
    </div>
  );
}
