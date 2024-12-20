import { Button } from "@/components/ui/button";
import { Bell, Settings, Plus } from "lucide-react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";
import { RiQuestionMark } from "react-icons/ri";

export function MainHeader() {
  return (
    <header className="bg-[#03112C] text-white h-12 flex items-center px-4 justify-between flex-wrap">
      <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-start">
        <BsFillGrid3X3GapFill className="cursor-pointer" />

        <div className="flex items-center space-x-1">
          <span className="text-sm font-semibold">Dynamics 365</span>
          <span className="text-gray-400">|</span>
          <span className="text-sm">Sales hub</span>
        </div>
      </div>
      <div className="flex items-center space-x-1 w-full sm:w-auto justify-between sm:justify-end mt-2 sm:mt-0">
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex text-white hover:bg-white/10"
        >
          <Bell className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex text-white hover:bg-white/10"
        >
          <Plus className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex text-white hover:bg-white/10"
        >
          <Settings className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex text-white hover:bg-white/10"
        >
          <RiQuestionMark className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex text-white hover:bg-white/10"
        >
          <LuUserRound className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex text-white hover:bg-white/10"
        >
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-sm font-medium">MO</span>
          </div>
        </Button>
      </div>
    </header>
  );
}
