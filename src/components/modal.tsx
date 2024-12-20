"use client";

import React, { useEffect, ReactNode, useRef } from "react";
import { X, ThumbsUp, ThumbsDown, Edit, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { IoSendOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

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
        className="bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-xl p-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-white rounded-xl ">
          <div className="flex items-center gap-2">
            <Image
              src="/e-mail.png"
              alt="Agent Skill"
              width={24}
              height={24}
              className="rounded-sm"
            />
            <h2 className="text-xl font-semibold">Engage with Jane Reyes</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        {/* Header */}

        <div className="p-4 flex justify-between items-start border-b mb-4 border-t-0 border-x-0 shadow-md rounded-xl">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/jane.jpg"
                alt="Jane Reyes"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="absolute -right-1 -bottom-1 bg-white rounded-full p-0.5">
                <FaPhone />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Jane Reyes</h2>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <span>COO</span>
                <span>•</span>
                <span>Northwind Traders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="bg-[#F8F9FF] p-2 flex items-center justify-between mb-4 rounded-xl border-t-0 border-x-0 shadow-sm">
          <div className="flex items-center gap-2 text-xs text-blue-700 ">
            <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center">
              <Image
                src="/star.png"
                alt="Jane Reyes"
                width={70}
                height={70}
                className="rounded-full"
              />
            </div>
            Jane may be interested in upgrading espresso machines for her
            in-store coffee shops.
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-blue-700">
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
            <Button
              size="sm"
              className="bg-blue-700 text-white hover:bg-blue-800"
            >
              <IoSendOutline />
              Approve and send
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="engage"
          className="bg-white rounded-sm border-t-0 border-x-0 shadow-md"
        >
          <TabsList className="px-6">
            <TabsTrigger
              value="engage"
              className="data-[state=active]:border-blue-700"
            >
              Engage
            </TabsTrigger>
            <TabsTrigger
              value="search"
              className="data-[state=active]:border-blue-700"
            >
              <Search className="h-4 w-4 mr-1" />
              Search
            </TabsTrigger>
          </TabsList>
        </Tabs>
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-240px)]">
          <div className="bg-white rounded-lg p-6 mb-6 border-t-0 border-x-0 shadow-md">
            <div className="bg-[#F8F9FF] rounded-lg p-6 mb-6 border-t-0 border-x-0 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Why I picked this lead
                </h3>
                <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center">
                  <Image
                    src="/star.png"
                    alt="Jane Reyes"
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                </div>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-xs bg-gray-100 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  Jane is a{" "}
                  <span className="font-semibold">key decision maker</span> and
                  was browsing{" "}
                  <span className="font-semibold">'espresso machines'</span> on
                  First Coffee's website.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xs bg-gray-100 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  Multiple people at her company have reported 'slowness' during{" "}
                  <span className="font-semibold">service requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xs bg-gray-100 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  Northwind Traders currently see{" "}
                  <span className="font-semibold">$200M in revenue</span> from
                  their in-store coffee shops.
                </li>
              </ul>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 border">
                  <div className="flex items-center gap-4 mb-1">
                    <div className="w-8 h-8 rounded-full bg-[#E5F5FF] flex items-center justify-center">
                      <Image
                        src="/check-mark.png"
                        alt="Decision maker"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">
                        Decision maker
                      </span>
                      <p className="text-lg font-semibold text-gray-900">Yes</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border">
                  <div className="flex items-center gap-4 mb-1">
                    <div className="w-8 h-8 rounded-full bg-[#FFF7E6] flex items-center justify-center">
                      <Image
                        src="/medal.png"
                        alt="medal deal value"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">
                        Potential deal value
                      </span>
                      <p className="text-lg font-semibold text-blue-700">$1M</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border">
                  <div className="flex items-center gap-4 mb-1">
                    <div className="w-8 h-8 rounded-full bg-[#F3E8FF] flex items-center justify-center">
                      <Image
                        src="/loading.png"
                        alt="intent"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Intent</span>
                      <p className="text-lg font-semibold text-purple-700">
                        High
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 mb-14 flex  items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-sm">
                  <Image
                    src="/shield.png"
                    alt="intent"
                    width={20}
                    height={20}
                  />
                </span>
                <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-sm text-xs">
                  <span>1</span>
                </span>
                <Separator orientation="vertical" className="h-6" />
                <span>D365 Sales2</span>
                <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-sm text-xs">
                  <span>+2</span>
                </span>
              </div>
              <div className="flex justify-end items-center gap-1 text-xs">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="text-green-600 h-4 w-4" />
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsDown className="text-red-600 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6 border-t-0 border-x-0 shadow-md">
            <span className="text-sm font-semibold">About Jane</span>
            <p className="text-gray-600 text-sm">
              Jane Reyes, the Chief Operating Officer of Northwind Traders, is a
              dynamic leader with a proven track record in optimizing operations
              and enhancing customer experiences. Under her guidance, Northwind
              Traders' in-store coffee shops have flourished, becoming a
              hallmark of quality and innovation. Jane's commitment to
              excellence makes her an ideal partner for First Coffee. She is
              always seeking top-tier equipment to elevate her coffee shops'
              offerings, ensuring consistent, high-quality service.
            </p>
          </div>

          <div className="space-y-4 mb-14 flex  items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Showing 1 of 9</span>
              <Separator orientation="vertical" className="h-6" />
              <span className="text-blue-700 cursor-pointer">Show all</span>
            </div>
            <div className="flex justify-end items-center gap-1 text-xs">
              <div className="flex items-center gap-1">
                <ThumbsUp className="text-green-600 h-4 w-4" />
              </div>
              <div className="flex items-center gap-1">
                <ThumbsDown className="text-red-600 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
