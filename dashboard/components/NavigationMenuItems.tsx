import { HomeIcon, PersonIcon, RowsIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

export default function NavigationMenuItems({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLElement>>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-lg font-medium transition-colors hover:text-primary flex items-center"
      >
        <HomeIcon className="mr-2" />
        Overview
      </Link>
      <Link
        href="/user"
        className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
      >
        <PersonIcon className="mr-2" />
        User
      </Link>
      <Link
        href="/repositories"
        className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
      >
        <RowsIcon className="mr-2" />
        Repositories
      </Link>
    </nav>
  );
}
