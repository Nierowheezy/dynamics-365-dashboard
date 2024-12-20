import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import Image from "next/image";

export function InsightCard() {
  return (
    <div className="flex justify-between items-start gap-8 mb-6">
      {/* Left Section: Text and Icon */}
      <div className="flex items-start gap-3 flex-1">
        {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"></div> */}
        <div className="w-12 flex items-center justify-center">
          <Image
            src="/copilot_image.png"
            width={800}
            height={800}
            alt="Picture of the copilot"
          />
          <span className="text-white font-semibold">AI</span>
        </div>
        <h2 className="text-md leading-tight">
          Hi Mona, <span className="font-semibold">68%</span> of goal achieved
          and rest can be achieved by focusing on 20 top leads.
        </h2>
      </div>

      {/* Right Section: Progress Bar */}
      <div className="flex-1 flex flex-col gap-2">
        {/* Text Above Progress Bar */}
        <div className="flex justify-between text-xs text-gray-600">
          <span>1 month until Q4 ends</span>
          <div>
            Target: <span className="font-bold">$45 million</span>{" "}
            <span>68% of target achieved</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden flex">
          {/* Progress Segments */}
          <div className="h-full bg-green-400" style={{ width: "40%" }}></div>
          <div className="h-full bg-blue-400" style={{ width: "18%" }}></div>
          <div className="h-full bg-purple-400" style={{ width: "15%" }}></div>
          <div className="h-full bg-orange-400" style={{ width: "7%" }}></div>
          <div className="h-full bg-gray-300" style={{ width: "20%" }}></div>
        </div>

        {/* Labels Below Progress Bar */}
        <div className="flex justify-between text-xs text-gray-600">
          <span className="text-center w-[40%]">Won $18m</span>
          <span className="text-center w-[18%]">Committed $8m</span>
          <span className="text-center w-[15%]">Best case $7m</span>
          <span className="text-center w-[7%]">Qualified $3m</span>
          <span className="text-center w-[20%]">Leads $75m</span>
        </div>
      </div>

      <ChevronUp />
    </div>
  );
}
