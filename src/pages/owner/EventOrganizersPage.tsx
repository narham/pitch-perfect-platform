import { AppLayout } from "@/components/layout/AppLayout";
import { EmptyState } from "@/components/shared/EmptyState";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventOrganizersPage() {
  return (
    <AppLayout role="owner">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-heading-l text-foreground">Event Organizers</h1>
            <p className="text-caption mt-1">Manage registered event organizers on the platform</p>
          </div>
          <Button>Add Organizer</Button>
        </div>
        <EmptyState
          icon={Users}
          title="No event organizers yet"
          description="Event organizers will appear here once they register on the platform."
          action={<Button variant="outline">Invite Organizer</Button>}
        />
      </div>
    </AppLayout>
  );
}
