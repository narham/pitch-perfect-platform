import { type LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: LucideIcon;
  variant?: "default" | "primary" | "success" | "warning" | "destructive";
}

const variantStyles = {
  default: "bg-card border-border",
  primary: "bg-card border-primary/20",
  success: "bg-card border-success/20",
  warning: "bg-card border-warning/20",
  destructive: "bg-card border-destructive/20",
};

const iconVariantStyles = {
  default: "bg-muted text-muted-foreground",
  primary: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  destructive: "bg-destructive/10 text-destructive",
};

export function StatsCard({ title, value, change, changeLabel, icon: Icon, variant = "default" }: StatsCardProps) {
  const TrendIcon = change && change > 0 ? TrendingUp : change && change < 0 ? TrendingDown : Minus;

  return (
    <div className={cn("rounded-lg border p-4 animate-fade-in", variantStyles[variant])}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-caption">{title}</p>
          <p className="font-mono-stats text-2xl font-bold text-card-foreground">{typeof value === "number" ? value.toLocaleString() : value}</p>
        </div>
        <div className={cn("h-9 w-9 rounded-md flex items-center justify-center shrink-0", iconVariantStyles[variant])}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      {change !== undefined && (
        <div className="mt-3 flex items-center gap-1">
          <TrendIcon className={cn("h-3 w-3", change > 0 ? "text-success" : change < 0 ? "text-destructive" : "text-muted-foreground")} />
          <span className={cn("text-xs font-medium font-mono-stats", change > 0 ? "text-success" : change < 0 ? "text-destructive" : "text-muted-foreground")}>
            {change > 0 ? "+" : ""}{change}%
          </span>
          {changeLabel && <span className="text-caption ml-1">{changeLabel}</span>}
        </div>
      )}
    </div>
  );
}
