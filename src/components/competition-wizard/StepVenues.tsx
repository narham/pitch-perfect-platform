import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, MapPin } from "lucide-react";
import type { CompetitionFormData } from "@/pages/eo/CompetitionCreatePage";

interface StepProps {
  data: CompetitionFormData;
  onChange: (updates: Partial<CompetitionFormData>) => void;
}

export function StepVenues({ data, onChange }: StepProps) {
  const [newVenue, setNewVenue] = useState({ name: "", city: "", capacity: 0 });

  const addVenue = () => {
    if (!newVenue.name || !newVenue.city) return;
    onChange({ venues: [...data.venues, { ...newVenue }] });
    setNewVenue({ name: "", city: "", capacity: 0 });
  };

  const removeVenue = (index: number) => {
    onChange({ venues: data.venues.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-heading-m text-card-foreground">Venue Setup</h2>
        <p className="text-caption mt-1">Add stadiums and locations for matches</p>
      </div>

      <div className="rounded-lg border border-border p-4 space-y-4">
        <h3 className="text-heading-s text-card-foreground">Add Venue</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="space-y-1">
            <Label className="text-xs">Venue Name *</Label>
            <Input placeholder="e.g. GBK Stadium" value={newVenue.name} onChange={(e) => setNewVenue({ ...newVenue, name: e.target.value })} />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">City *</Label>
            <Input placeholder="e.g. Jakarta" value={newVenue.city} onChange={(e) => setNewVenue({ ...newVenue, city: e.target.value })} />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Capacity</Label>
            <div className="flex gap-2">
              <Input type="number" min={0} placeholder="e.g. 80000" value={newVenue.capacity || ""} onChange={(e) => setNewVenue({ ...newVenue, capacity: parseInt(e.target.value) || 0 })} />
              <Button onClick={addVenue} size="icon" className="shrink-0"><Plus className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      </div>

      {data.venues.length > 0 ? (
        <div className="space-y-2">
          {data.venues.map((venue, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-border p-3">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">{venue.name}</p>
                  <p className="text-caption">{venue.city} {venue.capacity > 0 && `· ${venue.capacity.toLocaleString()} seats`}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => removeVenue(i)} className="text-muted-foreground hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          <MapPin className="h-8 w-8 mx-auto mb-2 opacity-40" />
          <p className="text-sm">No venues added yet</p>
          <p className="text-caption">Add at least one venue for match scheduling</p>
        </div>
      )}
    </div>
  );
}
