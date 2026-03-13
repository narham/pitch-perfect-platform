import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

export function StepInfo({ data, onChange }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-heading-m text-card-foreground">Competition Information</h2>
        <p className="text-caption mt-1">Enter the basic details of your competition</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="name">Competition Name *</Label>
          <Input id="name" placeholder="e.g. Premier League 2025" value={data.name} onChange={(e) => onChange({ name: e.target.value })} />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="desc">Description</Label>
          <Textarea id="desc" placeholder="Brief description of the competition..." value={data.description} onChange={(e) => onChange({ description: e.target.value })} rows={3} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="season">Season</Label>
          <Input id="season" placeholder="2025/2026" value={data.season} onChange={(e) => onChange({ season: e.target.value })} />
        </div>

        <div className="space-y-2">
          <Label>Start Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !data.startDate && "text-muted-foreground")}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {data.startDate ? format(data.startDate, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={data.startDate} onSelect={(d) => onChange({ startDate: d })} className="p-3 pointer-events-auto" />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>End Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !data.endDate && "text-muted-foreground")}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {data.endDate ? format(data.endDate, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={data.endDate} onSelect={(d) => onChange({ endDate: d })} className="p-3 pointer-events-auto" />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
