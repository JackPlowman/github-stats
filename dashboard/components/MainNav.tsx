import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/about"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        About
      </Link>
      <Link
        href="/user"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        User
      </Link>
      <Link
        href="/repositories"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Repositories
      </Link>
    </nav>
  );
}
