import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function ChartCard({ title, subtitle, children, action, className }: ChartCardProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-4 animate-fade-in", className)}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-heading-s text-card-foreground">{title}</h3>
          {subtitle && <p className="text-caption mt-0.5">{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}
