import React, { useState } from "react";
import { AgentSkillModal } from "./agent-skill-modal"; // Update the import path as needed

type AgentSkillMenuProps = {
  onClose: () => void;
};

const AgentSkillMenu = ({ onClose }: AgentSkillMenuProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleSidebarClose = () => {
    setIsClosing(true); // Trigger the close animation
    setTimeout(() => {
      onClose(); // Call the parent close handler after the animation
      setIsClosing(false); // Reset the closing state
    }, 300); // Match the duration of the animation
  };

  return (
    <>
      {/* Sidebar Menu */}
      <aside
        className={`w-64 bg-white border-r border-gray-200 flex flex-col ${
          isClosing ? "animate-slide-out" : "animate-slide-in"
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-700">Agent Skill</h2>
          <div
            className="text-gray-700 hover:text-gray-900 cursor-pointer"
            onClick={handleSidebarClose}
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
        </div>
        <div className="p-4">
          <ul>
            <li>
              <button
                onClick={handleModalOpen}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 rounded"
              >
                Agent Skill
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Modal */}
      <AgentSkillModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default AgentSkillMenu;
