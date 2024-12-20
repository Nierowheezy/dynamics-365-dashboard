"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { MdCopyAll } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";

interface AgentSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AgentSkillModal({ isOpen, onClose }: AgentSkillModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] pt-14 pb-16 pl-2 pr-2 overflow-hidden shadow-xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-2">
            <Image
              src="/copilot_image.png"
              alt="Agent Skill"
              width={24}
              height={24}
              className="rounded-sm"
            />
            <h2 className="text-xl font-semibold">Agent skill</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <div className="mb-8 bg-white rounded-lg border p-4 hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="text-lg font-semibold mb-4">
              Check if on-hand inventory will allow all sales orders to ship
              without delay
            </h3>
            <p className="text-gray-600 leading-relaxed flex flex-wrap gap-2">
              When
              <span className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-lg">
                <FaRegUser className="text-blue-600" /> <span>any vendor</span>
              </span>
              sends an email with changes to
              <span className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-lg">
                <FaRegFileLines className="text-blue-600" />{" "}
                <span>confirmed purchase orders</span>
              </span>
              , check if the resulting
              <span className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-lg">
                <AiOutlineAlignLeft className="text-blue-600" />{" "}
                <span>on-hand inventory</span>
              </span>
              will allow
              <span className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-lg">
                <MdCopyAll className="text-blue-600" />{" "}
                <span>all sales orders</span>
              </span>
              to
              <span className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-lg">
                <FaShareSquare className="text-blue-600" />{" "}
                <span>ship without delay</span>
              </span>
              . If so,
              <span className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-lg">
                <FaShareSquare className="text-blue-600" />{" "}
                <span>update the purchase order</span>
              </span>
              to reflect the change.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <Image
                src="/outlook.png"
                alt="Agent Skill"
                width={30}
                height={30}
                className=""
              />
              <h3 className="text-lg font-semibold">Enable email access</h3>
            </div>
            <p className="text-gray-600">
              Allow the agent to access email inboxes to read mail from known
              vendors
            </p>
            <div className="flex gap-2 items-center">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-purple-100 rounded-xl flex items-center justify-center">
                  P
                </div>
                <input
                  type="email"
                  value="purchasing@contoso.com"
                  readOnly
                  className="w-full pl-11 pr-10 py-2 border rounded-md bg-white-50"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Allow access
              </Button>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-end gap-2 p-4 ">
          <Button
            variant="outline"
            disabled
            onClick={() => {
              alert("Agent Skill Activated");
            }}
          >
            Activate
          </Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
