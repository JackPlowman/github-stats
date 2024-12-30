import { Circle, Home, User } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
  SidebarProvider,
} from "@/components/ui/sidebar";

import repositories from "../data/repository_statistics.json";

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
                    <User />
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

interface Repository {
  repository: string;
  total_files: number;
  total_commits: number;
  commits: Record<string, number | undefined>;
  languages: Record<string, number | undefined>;
}
function RepositoriesSubMenuItems() {
  return (
    <>
      {repositories.map((repository: Repository) => (
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
