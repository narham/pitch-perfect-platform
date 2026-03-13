import { Link } from "react-router-dom";
import { Trophy, ArrowRight, BarChart3, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  { label: "Platform Owner", path: "/owner", icon: BarChart3, description: "Full platform management and analytics" },
  { label: "Event Organizer", path: "/eo", icon: Trophy, description: "Competition and match management" },
  { label: "Team Manager", path: "/team", icon: Shield, description: "Squad, matches, and team operations" },
  { label: "Scout", path: "/scout", icon: Users, description: "Player discovery and talent analysis" },
  { label: "Player", path: "/player", icon: Users, description: "Career stats and personal dashboard" },
  { label: "Referee", path: "/referee", icon: Users, description: "Match assignments and performance" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero */}
      <header className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md gradient-primary flex items-center justify-center">
              <Trophy className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-heading-s">FMS</span>
          </div>
          <Button variant="outline" size="sm">Sign In</Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-display-xl text-foreground mb-4">Football Management System</h1>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade platform for managing football operations end-to-end. Competitions, teams, players, scouting, and analytics — all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {roles.map((role) => (
            <Link
              key={role.path}
              to={role.path}
              className="group rounded-lg border border-border bg-card p-5 hover:border-primary/40 hover:shadow-sm transition-all duration-150"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <role.icon className="h-5 w-5 text-primary" />
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-heading-s text-card-foreground mb-1">{role.label}</h3>
              <p className="text-caption">{role.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
          {[
            { label: "Event Organizers", value: "1,000+" },
            { label: "Teams", value: "100,000+" },
            { label: "Players", value: "300,000+" },
            { label: "Matches", value: "500,000+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-mono-stats text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-caption mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
