import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BsMicrosoftTeams } from "react-icons/bs";
import { AiOutlineBars, AiOutlinePieChart } from "react-icons/ai";
import { RiBarChartBoxAiFill } from "react-icons/ri";
import { BsFilter } from "react-icons/bs";
import { TfiLayoutColumn4 } from "react-icons/tfi";
import { FaShareSquare } from "react-icons/fa";
import {
  ChevronDown,
  Plus,
  RefreshCcw,
  Trash2,
  MoreHorizontal,
} from "lucide-react";

export function TopBar() {
  return (
    <div className="p-2">
      <Card className="rounded-sm border-t-0 border-x-0 shadow-md">
        <div className="h-12 flex items-center justify-between px-4 w-full">
          <div className="flex items-center gap-2 cursor-pointer">
            <h1 className="text-sm font-semibold">My open leads</h1>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-xs">
              <RiBarChartBoxAiFill className="mr-2 h-4 w-4" />
              Show chart
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <AiOutlineBars className="mr-2 h-4 w-4 text-blue-600" />
              Focused view
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <Plus className="mr-2 h-4 w-4 text-green-500" />
              New
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Refresh
            </Button>

            <Button variant="ghost" size="sm" className="text-xs">
              <BsMicrosoftTeams className="mr-2 h-4 w-4 text-blue-600" />
              Collaborate
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="ghost" size="sm" className="text-xs">
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <AiOutlinePieChart className="mr-2 h-4 w-4" />
              Smart data
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <BsFilter className="mr-2 h-4 w-4" />
              Edit filters
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <TfiLayoutColumn4 className="mr-2 h-4 w-4" />
              Edit columns
            </Button>

            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Button variant="ghost" size="sm" className="text-xs">
                <FaShareSquare className="h-4 w-4" />
                <Separator orientation="vertical" className="h-6" />
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </Button>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
