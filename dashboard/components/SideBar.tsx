import { Circle, Home, List, User } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
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
    <Sidebar collapsible="offcanvas">
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
                  <a>
                    <List />
                    <span>Repositories</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <RepositoriesSubMenuItems />
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
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
