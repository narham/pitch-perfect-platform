import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Globe, Lock, FileText, Trophy, Users, MapPin, Calendar, Shield, Gavel } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CompetitionFormData } from "@/pages/eo/CompetitionCreatePage";

interface StepProps {
  data: CompetitionFormData;
  onChange: (updates: Partial<CompetitionFormData>) => void;
}

const formatLabels: Record<string, string> = {
  league: "League",
  group_knockout: "Group + Knockout",
  single_elimination: "Single Elimination",
  double_elimination: "Double Elimination",
  swiss: "Swiss System",
  round_robin: "Round Robin",
};

export function StepPublish({ data, onChange }: StepProps) {
  const summaryItems = [
    { icon: Trophy, label: "Competition", value: data.name || "Unnamed" },
    { icon: FileText, label: "Format", value: formatLabels[data.format] || data.format },
    { icon: Users, label: "Max Teams", value: String(data.maxTeams) },
    { icon: MapPin, label: "Venues", value: `${data.venues.length} venues` },
    { icon: Calendar, label: "Match Days", value: data.matchDays.map((d) => d.slice(0, 3)).join(", ") || "None" },
    { icon: Shield, label: "Points", value: `W${data.pointsWin} / D${data.pointsDraw} / L${data.pointsLoss}` },
    { icon: Gavel, label: "VAR", value: data.var ? "Enabled" : "Disabled" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-heading-m text-card-foreground">Review & Publish</h2>
        <p className="text-caption mt-1">Review your competition settings before going live</p>
      </div>

      <div className="rounded-lg border border-border divide-y divide-border">
        {summaryItems.map((item, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <item.icon className="h-4 w-4" />
              {item.label}
            </div>
            <span className="text-sm font-medium text-card-foreground">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Visibility</Label>
          <Select value={data.visibility} onValueChange={(v) => onChange({ visibility: v })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">
                <div className="flex items-center gap-2"><Globe className="h-3.5 w-3.5" /> Public</div>
              </SelectItem>
              <SelectItem value="private">
                <div className="flex items-center gap-2"><Lock className="h-3.5 w-3.5" /> Private (Invite Only)</div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-border p-3 self-end">
          <div>
            <p className="text-sm font-medium text-card-foreground">Auto-publish</p>
            <p className="text-caption">Publish immediately after creation</p>
          </div>
          <Switch checked={data.autoPublish} onCheckedChange={(v) => onChange({ autoPublish: v })} />
        </div>
      </div>

      <div className={cn("rounded-lg p-4 flex items-start gap-3", data.name ? "bg-success/10 border border-success/20" : "bg-warning/10 border border-warning/20")}>
        <Check className={cn("h-5 w-5 mt-0.5 shrink-0", data.name ? "text-success" : "text-warning")} />
        <div>
          <p className="text-sm font-medium text-card-foreground">
            {data.name ? "Ready to publish" : "Missing required fields"}
          </p>
          <p className="text-caption">
            {data.name
              ? "All required fields are filled. Click 'Publish Competition' to go live."
              : "Please go back and fill in the competition name at minimum."
            }
          </p>
        </div>
      </div>
    </div>
  );
}
