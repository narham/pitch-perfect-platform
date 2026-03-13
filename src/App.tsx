import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import EventOrganizersPage from "./pages/owner/EventOrganizersPage";
import EODashboard from "./pages/eo/EODashboard";
import TeamDashboard from "./pages/team/TeamDashboard";
import PlayerDashboard from "./pages/player/PlayerDashboard";
import RefereeDashboard from "./pages/referee/RefereeDashboard";
import ScoutDashboard from "./pages/scout/ScoutDashboard";
import CompetitionCreatePage from "./pages/eo/CompetitionCreatePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Owner Routes */}
          <Route path="/owner" element={<OwnerDashboard />} />
          <Route path="/owner/event-organizers" element={<EventOrganizersPage />} />
          <Route path="/owner/competitions" element={<OwnerDashboard />} />
          <Route path="/owner/teams" element={<OwnerDashboard />} />
          <Route path="/owner/players" element={<OwnerDashboard />} />
          <Route path="/owner/payments" element={<OwnerDashboard />} />
          <Route path="/owner/subscriptions" element={<OwnerDashboard />} />
          <Route path="/owner/platform-analytics" element={<OwnerDashboard />} />
          <Route path="/owner/system-settings" element={<OwnerDashboard />} />

          {/* EO Routes */}
          <Route path="/eo" element={<EODashboard />} />
          <Route path="/eo/competitions" element={<EODashboard />} />
          <Route path="/eo/matches" element={<EODashboard />} />
          <Route path="/eo/venues" element={<EODashboard />} />
          <Route path="/eo/referees" element={<EODashboard />} />
          <Route path="/eo/disciplinary" element={<EODashboard />} />
          <Route path="/eo/analytics" element={<EODashboard />} />
          <Route path="/eo/settings" element={<EODashboard />} />

          {/* Team Routes */}
          <Route path="/team" element={<TeamDashboard />} />
          <Route path="/team/profile" element={<TeamDashboard />} />
          <Route path="/team/players" element={<TeamDashboard />} />
          <Route path="/team/staff" element={<TeamDashboard />} />
          <Route path="/team/squad" element={<TeamDashboard />} />
          <Route path="/team/competitions" element={<TeamDashboard />} />
          <Route path="/team/matches" element={<TeamDashboard />} />
          <Route path="/team/statistics" element={<TeamDashboard />} />
          <Route path="/team/finances" element={<TeamDashboard />} />

          {/* Player Routes */}
          <Route path="/player" element={<PlayerDashboard />} />

          {/* Referee Routes */}
          <Route path="/referee" element={<RefereeDashboard />} />
          <Route path="/referee/assignments" element={<RefereeDashboard />} />
          <Route path="/referee/performance" element={<RefereeDashboard />} />

          {/* Scout Routes */}
          <Route path="/scout" element={<ScoutDashboard />} />
          <Route path="/scout/players" element={<ScoutDashboard />} />
          <Route path="/scout/reports" element={<ScoutDashboard />} />
          <Route path="/scout/recommendations" element={<ScoutDashboard />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
