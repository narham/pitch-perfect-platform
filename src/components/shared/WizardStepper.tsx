import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  label: string;
  description?: string;
}

interface WizardStepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function WizardStepper({ steps, currentStep, className }: WizardStepperProps) {
  return (
    <nav className={cn("flex items-center", className)}>
      {steps.map((step, i) => {
        const isCompleted = i < currentStep;
        const isCurrent = i === currentStep;
        return (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 transition-colors duration-150",
                  isCompleted && "bg-primary text-primary-foreground",
                  isCurrent && "bg-primary text-primary-foreground ring-4 ring-primary/20",
                  !isCompleted && !isCurrent && "bg-muted text-muted-foreground"
                )}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <div className="hidden md:block min-w-0">
                <p className={cn("text-xs font-medium truncate", isCurrent ? "text-foreground" : "text-muted-foreground")}>
                  {step.label}
                </p>
                {step.description && (
                  <p className="text-[10px] text-muted-foreground truncate">{step.description}</p>
                )}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className={cn("flex-1 h-px mx-3", isCompleted ? "bg-primary" : "bg-border")} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
