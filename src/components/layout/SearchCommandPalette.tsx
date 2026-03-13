import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  LayoutDashboard,
  Trophy,
  Users,
  Shield,
  BarChart3,
  Settings,
} from "lucide-react";

interface SearchCommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const searchItems = [
  { label: "Owner Dashboard", url: "/owner", icon: LayoutDashboard, group: "Pages" },
  { label: "Event Organizers", url: "/owner/event-organizers", icon: Users, group: "Pages" },
  { label: "Competitions", url: "/owner/competitions", icon: Trophy, group: "Pages" },
  { label: "Teams", url: "/owner/teams", icon: Shield, group: "Pages" },
  { label: "Analytics", url: "/owner/platform-analytics", icon: BarChart3, group: "Pages" },
  { label: "EO Dashboard", url: "/eo", icon: LayoutDashboard, group: "Pages" },
  { label: "Team Dashboard", url: "/team", icon: LayoutDashboard, group: "Pages" },
  { label: "Scout Dashboard", url: "/scout", icon: LayoutDashboard, group: "Pages" },
  { label: "Settings", url: "/owner/system-settings", icon: Settings, group: "System" },
];

export function SearchCommandPalette({ open, onOpenChange }: SearchCommandPaletteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const groups = [...new Set(searchItems.map((i) => i.group))];

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search pages, teams, players..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {groups.map((group) => (
          <CommandGroup key={group} heading={group}>
            {searchItems
              .filter((i) => i.group === group)
              .map((item) => (
                <CommandItem
                  key={item.url}
                  onSelect={() => {
                    navigate(item.url);
                    onOpenChange(false);
                  }}
                >
                  <item.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                  {item.label}
                </CommandItem>
              ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
