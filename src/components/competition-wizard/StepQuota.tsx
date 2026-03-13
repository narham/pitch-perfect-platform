import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import type { CompetitionFormData } from "@/pages/eo/CompetitionCreatePage";

interface StepProps {
  data: CompetitionFormData;
  onChange: (updates: Partial<CompetitionFormData>) => void;
}

export function StepQuota({ data, onChange }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-heading-m text-card-foreground">Team Quota & Registration</h2>
        <p className="text-caption mt-1">Set limits for teams and player registration</p>
      </div>

      <div>
        <h3 className="text-heading-s text-card-foreground mb-3">Team Limits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Maximum Teams</Label>
            <Input type="number" min={2} value={data.maxTeams} onChange={(e) => onChange({ maxTeams: parseInt(e.target.value) || 20 })} />
          </div>
          <div className="space-y-2">
            <Label>Max Foreign Players per Team</Label>
            <Input type="number" min={0} value={data.maxForeignPlayers} onChange={(e) => onChange({ maxForeignPlayers: parseInt(e.target.value) || 5 })} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-heading-s text-card-foreground mb-3">Squad Size</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Minimum Players per Squad</Label>
            <Input type="number" min={11} value={data.minPlayers} onChange={(e) => onChange({ minPlayers: parseInt(e.target.value) || 18 })} />
          </div>
          <div className="space-y-2">
            <Label>Maximum Players per Squad</Label>
            <Input type="number" min={11} value={data.maxPlayers} onChange={(e) => onChange({ maxPlayers: parseInt(e.target.value) || 30 })} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-heading-s text-card-foreground mb-3">Registration</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Registration Deadline</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !data.registrationDeadline && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {data.registrationDeadline ? format(data.registrationDeadline, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={data.registrationDeadline} onSelect={(d) => onChange({ registrationDeadline: d })} className="p-3 pointer-events-auto" />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label>Registration Fee ($)</Label>
            <Input type="number" min={0} value={data.registrationFee} onChange={(e) => onChange({ registrationFee: parseInt(e.target.value) || 0 })} />
          </div>
        </div>
      </div>
    </div>
  );
}
