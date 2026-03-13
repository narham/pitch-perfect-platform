import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { WizardStepper } from "@/components/shared/WizardStepper";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Rocket } from "lucide-react";
import { StepInfo } from "@/components/competition-wizard/StepInfo";
import { StepFormat } from "@/components/competition-wizard/StepFormat";
import { StepRules } from "@/components/competition-wizard/StepRules";
import { StepQuota } from "@/components/competition-wizard/StepQuota";
import { StepSchedule } from "@/components/competition-wizard/StepSchedule";
import { StepVenues } from "@/components/competition-wizard/StepVenues";
import { StepPublish } from "@/components/competition-wizard/StepPublish";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export interface CompetitionFormData {
  // Step 1: Info
  name: string;
  description: string;
  season: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  logo: string;
  // Step 2: Format
  format: string;
  legs: string;
  groupCount: number;
  teamsPerGroup: number;
  // Step 3: Rules
  pointsWin: number;
  pointsDraw: number;
  pointsLoss: number;
  yellowCardLimit: number;
  redCardSuspension: number;
  maxSubstitutions: number;
  extraTime: boolean;
  penalties: boolean;
  awayGoals: boolean;
  var: boolean;
  // Step 4: Quota
  maxTeams: number;
  minPlayers: number;
  maxPlayers: number;
  maxForeignPlayers: number;
  registrationDeadline: Date | undefined;
  registrationFee: number;
  // Step 5: Schedule
  matchDays: string[];
  defaultKickoff: string;
  matchDuration: number;
  halfTimeDuration: number;
  restDaysBetween: number;
  // Step 6: Venues
  venues: { name: string; city: string; capacity: number }[];
  // Step 7: Publish
  visibility: string;
  autoPublish: boolean;
}

const defaultFormData: CompetitionFormData = {
  name: "",
  description: "",
  season: "2025/2026",
  startDate: undefined,
  endDate: undefined,
  logo: "",
  format: "league",
  legs: "double",
  groupCount: 4,
  teamsPerGroup: 4,
  pointsWin: 3,
  pointsDraw: 1,
  pointsLoss: 0,
  yellowCardLimit: 5,
  redCardSuspension: 1,
  maxSubstitutions: 5,
  extraTime: true,
  penalties: true,
  awayGoals: false,
  var: true,
  maxTeams: 20,
  minPlayers: 18,
  maxPlayers: 30,
  maxForeignPlayers: 5,
  registrationDeadline: undefined,
  registrationFee: 0,
  matchDays: ["Saturday", "Sunday"],
  defaultKickoff: "15:00",
  matchDuration: 90,
  halfTimeDuration: 15,
  restDaysBetween: 3,
  venues: [],
  visibility: "public",
  autoPublish: false,
};

const steps = [
  { label: "Info", description: "Basic details" },
  { label: "Format", description: "Competition type" },
  { label: "Rules", description: "Regulations" },
  { label: "Quota", description: "Team limits" },
  { label: "Schedule", description: "Match timing" },
  { label: "Venues", description: "Locations" },
  { label: "Publish", description: "Go live" },
];

export default function CompetitionCreatePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<CompetitionFormData>(defaultFormData);
  const navigate = useNavigate();

  const updateForm = (updates: Partial<CompetitionFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const next = () => {
    if (currentStep < steps.length - 1) setCurrentStep((s) => s + 1);
  };

  const prev = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const handlePublish = () => {
    toast.success("Competition created successfully!", {
      description: `${formData.name} has been ${formData.autoPublish ? "published" : "saved as draft"}.`,
    });
    navigate("/eo/competitions");
  };

  const stepComponents = [
    <StepInfo data={formData} onChange={updateForm} />,
    <StepFormat data={formData} onChange={updateForm} />,
    <StepRules data={formData} onChange={updateForm} />,
    <StepQuota data={formData} onChange={updateForm} />,
    <StepSchedule data={formData} onChange={updateForm} />,
    <StepVenues data={formData} onChange={updateForm} />,
    <StepPublish data={formData} onChange={updateForm} />,
  ];

  return (
    <AppLayout role="eo">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-heading-l text-foreground">Create Competition</h1>
          <p className="text-caption mt-1">Set up a new competition in 7 easy steps</p>
        </div>

        <WizardStepper steps={steps} currentStep={currentStep} />

        <div className="rounded-lg border border-border bg-card p-6 min-h-[400px] animate-fade-in" key={currentStep}>
          {stepComponents[currentStep]}
        </div>

        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={prev} disabled={currentStep === 0}>
            <ArrowLeft className="h-4 w-4 mr-1" /> Previous
          </Button>
          <span className="text-caption">Step {currentStep + 1} of {steps.length}</span>
          {currentStep < steps.length - 1 ? (
            <Button onClick={next}>
              Next <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={handlePublish} className="gradient-primary border-0">
              <Rocket className="h-4 w-4 mr-1" /> Publish Competition
            </Button>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
