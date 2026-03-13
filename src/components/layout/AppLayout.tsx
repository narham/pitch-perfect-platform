import { ReactNode, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopNavbar } from "@/components/layout/TopNavbar";
import { SearchCommandPalette } from "@/components/layout/SearchCommandPalette";

interface AppLayoutProps {
  children: ReactNode;
  role: "owner" | "eo" | "team" | "player" | "referee" | "scout";
}

export function AppLayout({ children, role }: AppLayoutProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar role={role} />
        <div className="flex-1 flex flex-col min-w-0">
          <TopNavbar onSearchOpen={() => setSearchOpen(true)} />
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
      <SearchCommandPalette open={searchOpen} onOpenChange={setSearchOpen} />
    </SidebarProvider>
  );
}
