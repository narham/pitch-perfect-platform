import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";

interface TopNavbarProps {
  onSearchOpen: () => void;
}

function getBreadcrumb(pathname: string): string[] {
  const parts = pathname.split("/").filter(Boolean);
  return parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1).replace(/-/g, " "));
}

export function TopNavbar({ onSearchOpen }: TopNavbarProps) {
  const location = useLocation();
  const breadcrumb = getBreadcrumb(location.pathname);

  return (
    <header className="h-14 border-b border-border flex items-center justify-between px-4 bg-card/50 backdrop-blur-sm sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="shrink-0" />
        <nav className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground">
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <span className="mx-1">/</span>}
              <span className={i === breadcrumb.length - 1 ? "text-foreground font-medium" : ""}>
                {item}
              </span>
            </span>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={onSearchOpen}
          className="hidden sm:flex items-center gap-2 text-muted-foreground h-8 px-3 border border-border rounded-md"
        >
          <Search className="h-3.5 w-3.5" />
          <span className="text-xs">Search...</span>
          <kbd className="ml-2 text-[10px] bg-muted px-1.5 py-0.5 rounded font-mono">⌘K</kbd>
        </Button>
        <Button variant="ghost" size="icon" className="relative h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
        </Button>
      </div>
    </header>
  );
}
