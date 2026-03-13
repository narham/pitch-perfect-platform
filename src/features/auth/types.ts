export type AppRole = "owner" | "event_organizer" | "team_manager" | "player" | "referee" | "scout";

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  display_name: string | null;
  avatar_url: string | null;
  phone: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserRole {
  id: string;
  user_id: string;
  role: AppRole;
  tenant_id: string | null;
  created_at: string;
}

export interface AuthUser {
  id: string;
  email: string;
  profile: Profile | null;
  roles: AppRole[];
  primaryRole: AppRole | null;
}

export const ROLE_ROUTE_MAP: Record<AppRole, string> = {
  owner: "/owner",
  event_organizer: "/eo",
  team_manager: "/team",
  player: "/player",
  referee: "/referee",
  scout: "/scout",
};

export const ROLE_LABELS: Record<AppRole, string> = {
  owner: "Platform Owner",
  event_organizer: "Event Organizer",
  team_manager: "Team Manager",
  player: "Player",
  referee: "Referee",
  scout: "Scout",
};
