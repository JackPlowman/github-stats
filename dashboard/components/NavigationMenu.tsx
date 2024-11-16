import Link from "next/link";

import NavigationMenuItems from "@/components/NavigationMenuItems";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavigationMenu() {
  return (
    <div className="hidden flex-col md:flex" id="navbar">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Avatar className="h-8 w-8">
            <Link href="/">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/62281988?v=4"
                alt="Jack Plowman"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Link>
          </Avatar>
          <NavigationMenuItems className="mx-6" />
        </div>
      </div>
    </div>
  );
}
