import MainNav from "@/components/MainNav";
import Search from "@/components/Search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavBar() {
  return (
    <div className="hidden flex-col md:flex" id="navbar">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/62281988?v=4"
                alt="Jack Plowman"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
