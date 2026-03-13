import {
  LayoutDashboard,
  Trophy,
  Users,
  UserCheck,
  CreditCard,
  Settings,
  BarChart3,
  Shield,
  Calendar,
  MapPin,
  Gavel,
  Eye,
  FileText,
  Activity,
  TrendingUp,
  DollarSign,
  type LucideIcon,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const roleNavigation: Record<string, NavGroup[]> = {
  owner: [
    {
      label: "Overview",
      items: [
        { title: "Dashboard", url: "/owner", icon: LayoutDashboard },
        { title: "Analytics", url: "/owner/platform-analytics", icon: BarChart3 },
      ],
    },
    {
      label: "Management",
      items: [
        { title: "Event Organizers", url: "/owner/event-organizers", icon: Users },
        { title: "Competitions", url: "/owner/competitions", icon: Trophy },
        { title: "Teams", url: "/owner/teams", icon: Shield },
        { title: "Players", url: "/owner/players", icon: UserCheck },
      ],
    },
    {
      label: "Finance",
      items: [
        { title: "Payments", url: "/owner/payments", icon: CreditCard },
        { title: "Subscriptions", url: "/owner/subscriptions", icon: DollarSign },
      ],
    },
    {
      label: "System",
      items: [
        { title: "Settings", url: "/owner/system-settings", icon: Settings },
      ],
    },
  ],
  eo: [
    {
      label: "Overview",
      items: [
        { title: "Dashboard", url: "/eo", icon: LayoutDashboard },
        { title: "Analytics", url: "/eo/analytics", icon: BarChart3 },
      ],
    },
    {
      label: "Competitions",
      items: [
        { title: "Competitions", url: "/eo/competitions", icon: Trophy },
        { title: "Registrations", url: "/eo/registrations", icon: FileText },
        { title: "Matches", url: "/eo/matches", icon: Calendar },
        { title: "Venues", url: "/eo/venues", icon: MapPin },
      ],
    },
    {
      label: "Officials",
      items: [
        { title: "Referees", url: "/eo/referees", icon: Eye },
        { title: "Disciplinary", url: "/eo/disciplinary", icon: Gavel },
      ],
    },
    {
      label: "System",
      items: [
        { title: "Settings", url: "/eo/settings", icon: Settings },
      ],
    },
  ],
  team: [
    {
      label: "Overview",
      items: [
        { title: "Dashboard", url: "/team", icon: LayoutDashboard },
        { title: "Profile", url: "/team/profile", icon: Shield },
      ],
    },
    {
      label: "Squad",
      items: [
        { title: "Players", url: "/team/players", icon: Users },
        { title: "Staff", url: "/team/staff", icon: UserCheck },
        { title: "Squad", url: "/team/squad", icon: Activity },
      ],
    },
    {
      label: "Competitions",
      items: [
        { title: "Competitions", url: "/team/competitions", icon: Trophy },
        { title: "Matches", url: "/team/matches", icon: Calendar },
        { title: "Statistics", url: "/team/statistics", icon: TrendingUp },
      ],
    },
    {
      label: "Finance",
      items: [
        { title: "Finances", url: "/team/finances", icon: DollarSign },
      ],
    },
  ],
  player: [
    {
      label: "Overview",
      items: [
        { title: "Dashboard", url: "/player", icon: LayoutDashboard },
      ],
    },
  ],
  referee: [
    {
      label: "Overview",
      items: [
        { title: "Dashboard", url: "/referee", icon: LayoutDashboard },
        { title: "Assignments", url: "/referee/assignments", icon: Calendar },
        { title: "Performance", url: "/referee/performance", icon: TrendingUp },
      ],
    },
  ],
  scout: [
    {
      label: "Overview",
      items: [
        { title: "Dashboard", url: "/scout", icon: LayoutDashboard },
        { title: "Players", url: "/scout/players", icon: Users },
        { title: "Reports", url: "/scout/reports", icon: FileText },
        { title: "Recommendations", url: "/scout/recommendations", icon: TrendingUp },
      ],
    },
  ],
};

const roleLabels: Record<string, string> = {
  owner: "Platform Owner",
  eo: "Event Organizer",
  team: "Team Manager",
  player: "Player",
  referee: "Referee",
  scout: "Scout",
};

interface AppSidebarProps {
  role: string;
}

export function AppSidebar({ role }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const groups = roleNavigation[role] || [];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md gradient-primary flex items-center justify-center shrink-0">
            <Trophy className="h-4 w-4 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-heading-s truncate">FMS</p>
              <p className="text-caption truncate">{roleLabels[role]}</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="py-2">
        {groups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-label px-4">{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = location.pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.url}
                          end
                          className={`transition-colors duration-100 ${isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "text-sidebar-foreground hover:bg-sidebar-accent/50"}`}
                          activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                        >
                          <item.icon className="h-4 w-4 shrink-0" />
                          {!collapsed && <span className="truncate">{item.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-semibold text-primary">AD</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">Admin User</p>
              <p className="text-caption truncate">admin@fms.com</p>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
