"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { AgentSkillModal } from "./agent-skill-modal";

export function ActivityCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Other key activities</h3>
        <div className="space-y-3">
          <ActivityItem
            letter="A"
            title="Cafe A100 for Woodland Bank"
            description="Woodland Bank • $20,000 • 8 days to close"
            onClick={() => setIsModalOpen(true)}
          />
          <ActivityItem
            letter="P"
            title="Partnership opportunity for Fabrikam"
            description="Fabrikam • $5,000,000 • 12 days to close"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <Button
          variant="link"
          className="p-0 h-auto text-blue-600 hover:text-blue-700 text-sm"
        >
          Show all key activities
        </Button>
      </div>

      <AgentSkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

interface ActivityItemProps {
  letter: string;
  title: string;
  description: string;
  onClick?: () => void;
}

function ActivityItem({
  letter,
  title,
  description,
  onClick,
}: ActivityItemProps) {
  return (
    <div
      className="rounded-xl border p-4 mb-4 hover:shadow-md transition-shadow w-[340px] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-3 group">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-medium text-gray-600">
          {letter}
        </div>

        <div className="flex-1 mb-2">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm">{title}</h4>
          </div>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex items-center text-xs rounded-md border p-2 hover:shadow-md transition-shadow bg-[#F8F8FC]">
        <Mail className="h-5 w-5 mr-2" />
        Review draft and reply to Chris Naidoo
      </div>
    </div>
  );
}
