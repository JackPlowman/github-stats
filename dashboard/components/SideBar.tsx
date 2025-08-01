import { Circle, Home, List, User } from "lucide-react";

import { ModeToggle } from "@/components/ThemeToggle";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import repositories, { Repository } from "@/lib/repository_statistics";

export default function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas" variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key="Summary">
                <SidebarMenuButton asChild>
                  <a href="/github-stats">
                    <Home />
                    <span>Summary</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key="User">
                <SidebarMenuButton asChild>
                  <a href="/github-stats/user">
                    <User />
                    <span>User</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem key="Repositories">
                <SidebarMenuButton asChild>
                  <div>
                    <List />
                    <span>Repositories</span>
                  </div>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <RepositoriesSubMenuItems />
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div
          style={{ padding: "1rem", display: "flex", justifyContent: "center" }}
        >
          <ModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

function RepositoriesSubMenuItems() {
  const sortedRepositories = [...repositories].sort((a, b) =>
    a.repository.localeCompare(b.repository),
  );

  return (
    <>
      {sortedRepositories.map((repository: Repository) => (
        <SidebarMenuSubItem key={repository.repository}>
          <SidebarMenuSubButton asChild>
            <a href={`/github-stats/repository/${repository.repository}`}>
              <Circle />
              <span>{repository.repository}</span>
            </a>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      ))}
    </>
  );
}
