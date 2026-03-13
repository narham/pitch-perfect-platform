import { cn } from "@/lib/utils";

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "success" | "warning" | "info" | "destructive";
}

interface ActivityFeedProps {
  items: ActivityItem[];
  className?: string;
}

const dotStyles = {
  success: "bg-success",
  warning: "bg-warning",
  info: "bg-primary",
  destructive: "bg-destructive",
};

export function ActivityFeed({ items, className }: ActivityFeedProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-4", className)}>
      <h3 className="text-heading-s text-card-foreground mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 py-2 border-b border-border last:border-0">
            <div className="mt-1.5">
              <div className={cn("h-2 w-2 rounded-full shrink-0", dotStyles[item.type])} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-card-foreground truncate">{item.title}</p>
              <p className="text-caption truncate">{item.description}</p>
            </div>
            <span className="text-caption whitespace-nowrap">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
