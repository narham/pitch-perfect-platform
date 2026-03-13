import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/features/auth/AuthProvider";
import { ProtectedRoute } from "@/features/auth/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import EventOrganizersPage from "./pages/owner/EventOrganizersPage";
import EODashboard from "./pages/eo/EODashboard";
import CompetitionCreatePage from "./pages/eo/CompetitionCreatePage";
import TeamDashboard from "./pages/team/TeamDashboard";
import PlayerDashboard from "./pages/player/PlayerDashboard";
import RefereeDashboard from "./pages/referee/RefereeDashboard";
import ScoutDashboard from "./pages/scout/ScoutDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            {/* Owner Routes */}
            <Route path="/owner" element={<ProtectedRoute allowedRoles={["owner"]}><OwnerDashboard /></ProtectedRoute>} />
            <Route path="/owner/event-organizers" element={<ProtectedRoute allowedRoles={["owner"]}><EventOrganizersPage /></ProtectedRoute>} />
            <Route path="/owner/competitions" element={<ProtectedRoute allowedRoles={["owner"]}><OwnerDashboard /></ProtectedRoute>} />
            <Route path="/owner/teams" element={<ProtectedRoute allowedRoles={["owner"]}><OwnerDashboard /></ProtectedRoute>} />
            <Route path="/owner/players" element={<ProtectedRoute allowedRoles={["owner"]}><OwnerDashboard /></ProtectedRoute>} />
            <Route path="/owner/payments" element={<ProtectedRoute allowedRoles={["owner"]}><OwnerDashboard /></ProtectedRoute>} />
            <Route path="/owner/subscriptions" element={<ProtectedRoute allowedRoles={["owner"]}><OwnerDashboard /></ProtectedRoute>} />
            <Route path="/owner/platform-analytics" element={<ProtectedRoute allowedRoles={["owner"]}><OwnerDashboard /></ProtectedRoute>} />
            <Route path="/owner/system-settings" element={<ProtectedRoute allowedRoles={["owner"]}><OwnerDashboard /></ProtectedRoute>} />

            {/* EO Routes */}
            <Route path="/eo" element={<ProtectedRoute allowedRoles={["event_organizer", "owner"]}><EODashboard /></ProtectedRoute>} />
            <Route path="/eo/competitions/create" element={<ProtectedRoute allowedRoles={["event_organizer", "owner"]}><CompetitionCreatePage /></ProtectedRoute>} />
            <Route path="/eo/competitions" element={<ProtectedRoute allowedRoles={["event_organizer", "owner"]}><EODashboard /></ProtectedRoute>} />
            <Route path="/eo/matches" element={<ProtectedRoute allowedRoles={["event_organizer", "owner"]}><EODashboard /></ProtectedRoute>} />
            <Route path="/eo/venues" element={<ProtectedRoute allowedRoles={["event_organizer", "owner"]}><EODashboard /></ProtectedRoute>} />
            <Route path="/eo/referees" element={<ProtectedRoute allowedRoles={["event_organizer", "owner"]}><EODashboard /></ProtectedRoute>} />
            <Route path="/eo/disciplinary" element={<ProtectedRoute allowedRoles={["event_organizer", "owner"]}><EODashboard /></ProtectedRoute>} />
            <Route path="/eo/analytics" element={<ProtectedRoute allowedRoles={["event_organizer", "owner"]}><EODashboard /></ProtectedRoute>} />
            <Route path="/eo/settings" element={<ProtectedRoute allowedRoles={["event_organizer", "owner"]}><EODashboard /></ProtectedRoute>} />

            {/* Team Routes */}
            <Route path="/team" element={<ProtectedRoute allowedRoles={["team_manager", "owner"]}><TeamDashboard /></ProtectedRoute>} />
            <Route path="/team/profile" element={<ProtectedRoute allowedRoles={["team_manager", "owner"]}><TeamDashboard /></ProtectedRoute>} />
            <Route path="/team/players" element={<ProtectedRoute allowedRoles={["team_manager", "owner"]}><TeamDashboard /></ProtectedRoute>} />
            <Route path="/team/staff" element={<ProtectedRoute allowedRoles={["team_manager", "owner"]}><TeamDashboard /></ProtectedRoute>} />
            <Route path="/team/squad" element={<ProtectedRoute allowedRoles={["team_manager", "owner"]}><TeamDashboard /></ProtectedRoute>} />
            <Route path="/team/competitions" element={<ProtectedRoute allowedRoles={["team_manager", "owner"]}><TeamDashboard /></ProtectedRoute>} />
            <Route path="/team/matches" element={<ProtectedRoute allowedRoles={["team_manager", "owner"]}><TeamDashboard /></ProtectedRoute>} />
            <Route path="/team/statistics" element={<ProtectedRoute allowedRoles={["team_manager", "owner"]}><TeamDashboard /></ProtectedRoute>} />
            <Route path="/team/finances" element={<ProtectedRoute allowedRoles={["team_manager", "owner"]}><TeamDashboard /></ProtectedRoute>} />

            {/* Player Routes */}
            <Route path="/player" element={<ProtectedRoute allowedRoles={["player", "owner"]}><PlayerDashboard /></ProtectedRoute>} />

            {/* Referee Routes */}
            <Route path="/referee" element={<ProtectedRoute allowedRoles={["referee", "owner"]}><RefereeDashboard /></ProtectedRoute>} />
            <Route path="/referee/assignments" element={<ProtectedRoute allowedRoles={["referee", "owner"]}><RefereeDashboard /></ProtectedRoute>} />
            <Route path="/referee/performance" element={<ProtectedRoute allowedRoles={["referee", "owner"]}><RefereeDashboard /></ProtectedRoute>} />

            {/* Scout Routes */}
            <Route path="/scout" element={<ProtectedRoute allowedRoles={["scout", "owner"]}><ScoutDashboard /></ProtectedRoute>} />
            <Route path="/scout/players" element={<ProtectedRoute allowedRoles={["scout", "owner"]}><ScoutDashboard /></ProtectedRoute>} />
            <Route path="/scout/reports" element={<ProtectedRoute allowedRoles={["scout", "owner"]}><ScoutDashboard /></ProtectedRoute>} />
            <Route path="/scout/recommendations" element={<ProtectedRoute allowedRoles={["scout", "owner"]}><ScoutDashboard /></ProtectedRoute>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
