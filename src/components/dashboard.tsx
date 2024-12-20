"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
// import { ChevronRight, ChevronUp, ChevronDown, Search } from "lucide-react";
import { LeadsTable } from "@/components/leads-table";
import { InsightCard } from "@/components/insight-card";
import { LeadCard } from "@/components/lead-card";
import { ActivityCard } from "@/components/activity-card";
import { Modal } from "@/components/modal";
import { Separator } from "./ui/separator";
import { Mail, CalendarDays } from "lucide-react";

// src/components/dashboard.tsx
export function Dashboard() {
  // Define a type for lead details
  interface LeadDetails {
    name: string;
    role: string;
    company: string;
    topic: string;
    description: string;
    tags: string[];
    imageVal: string;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<LeadDetails | null>(null);

  const openModal = (lead: LeadDetails) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLead(null);
  };

  return (
    <>
      <div className="p-2 space-y-3">
        <Card
          className="relative bg-white rounded-xl overflow-hidden
             before:absolute before:inset-0 before:-z-10 before:rounded-xl
             before:bg-gradient-to-r before:from-blue-500 before:via-lightblue-500 before:to-purple-500
             before:blur-[12px] p-12 ring-2 ring-blue-500"
        >
          <InsightCard />
          <div className="grid grid-cols-[1fr,1fr,300px] gap-6">
            <LeadCard
              name="Jane Reyes"
              role="COO"
              company="Northwind Traders"
              topic="Engage with Jane Reyes"
              description="Jane may be interested in upgrading espresso machines for her in-store coffee shops."
              tags={["Expand business", "High buying intent"]}
              imageVal="/jane.jpg"
              icon={<Mail className="h-5 w-5 mr-2 " />}
              color="#F7F6FE"
              dealValue="$50,000"
              decisionMakerStatus="Yes"
              onClick={() =>
                openModal({
                  name: "Jane Reyes",
                  role: "COO",
                  company: "Northwind Traders",
                  topic: "Engage with Jane Reyes",
                  description:
                    "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
                  tags: ["Expand business", "High buying intent"],
                  imageVal: "/jane.jpg",
                })
              }
            />
            <LeadCard
              name="Allan Munger"
              role="Head of Real Estate Development"
              company="Contoso Coffee"
              topic="Prepare for meeting with Allan"
              description="Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract."
              tags={["Upcoming meeting", "Due today"]}
              imageVal="/allan.png"
              icon={<CalendarDays className="h-5 w-5 mr-2 " />}
              color="#F4F5FD"
              dealValue="$100,000"
              decisionMakerStatus="Yes"
              onClick={() =>
                openModal({
                  name: "Allan Munger",
                  role: "Head of Real Estate Development",
                  company: "Contoso Coffee",
                  topic: "Prepare for meeting with Allan",
                  description:
                    "Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.",
                  tags: ["Upcoming meeting", "Due today"],
                  imageVal: "/allan.png",
                })
              }
            />
            <ActivityCard />
          </div>
        </Card>
        <LeadsTable />
      </div>

      {/* Modal for displaying lead details */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedLead && (
          <div>
            <h3 className="text-xl font-bold mb-2">{selectedLead.topic}</h3>
            <p className="text-gray-600">{selectedLead.description}</p>
            <div className="flex items-center mt-4">
              <img
                src={selectedLead.imageVal}
                alt={selectedLead.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{selectedLead.name}</p>
                <p className="text-sm text-gray-500">
                  {selectedLead.role} at {selectedLead.company}
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex gap-2">
              {selectedLead.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
