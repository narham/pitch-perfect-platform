import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "active" | "pending" | "completed" | "cancelled" | "live" | "upcoming" | "draft";
  className?: string;
}

const statusStyles = {
  active: "bg-success/10 text-success border-success/20",
  live: "bg-destructive/10 text-destructive border-destructive/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  completed: "bg-muted text-muted-foreground border-border",
  cancelled: "bg-destructive/10 text-destructive border-destructive/20",
  upcoming: "bg-primary/10 text-primary border-primary/20",
  draft: "bg-muted text-muted-foreground border-border",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span className={cn("inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border", statusStyles[status], className)}>
      {(status === "active" || status === "live") && (
        <span className={cn("h-1.5 w-1.5 rounded-full", status === "live" ? "bg-destructive animate-pulse-soft" : "bg-success")} />
      )}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
