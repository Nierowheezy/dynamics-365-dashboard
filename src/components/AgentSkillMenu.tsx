import React, { useState, useEffect } from "react";
import { AgentSkillModal } from "./agent-skill-modal";
import { Bot } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type AgentSkillMenuProps = {
  onClose: () => void;
};

const AgentSkillMenu = ({ onClose }: AgentSkillMenuProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <aside
        className={`bg-white border-r border-gray-200 flex flex-col h-full transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        } ${isClosing ? "animate-slide-out" : "animate-slide-in"}`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          {!isCollapsed && (
            <h2 className="text-lg font-bold text-gray-700">Agent Skill</h2>
          )}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="text-gray-700 hover:text-gray-900 cursor-pointer"
                  onClick={handleClose}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Close Agent Skill Menu</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="p-4">
          <ul>
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleModalOpen}
                      className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded ${
                        isCollapsed ? "text-center" : ""
                      }`}
                    >
                      {isCollapsed ? (
                        <Bot className="h-6 w-6 mx-auto" />
                      ) : (
                        "Agent Skill"
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Open Agent Skill Modal</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          </ul>
        </div>
      </aside>

      <AgentSkillModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default AgentSkillMenu;
