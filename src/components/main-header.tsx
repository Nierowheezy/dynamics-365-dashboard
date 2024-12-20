import { Button } from "@/components/ui/button";
import { Bell, Settings, HelpCircle, Repeat, Plus, Grid } from "lucide-react";

export function MainHeader() {
  return (
    <header className="bg-[#11100f] text-white h-12 flex items-center px-4 justify-between">
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
        >
          <Grid className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-1">
          <span className="text-sm font-semibold">Dynamics 365</span>
          <span className="text-gray-400">|</span>
          <span className="text-sm">Sales hub</span>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
        >
          <Bell className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
        >
          <Plus className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
        >
          <Settings className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
        >
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
        >
          <Repeat className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
        >
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-sm font-medium">MO</span>
          </div>
        </Button>
      </div>
    </header>
  );
}
