"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, Search } from "lucide-react";
import { Bar } from "react-chartjs-2"; // Assuming you're using chart.js
import { Chart } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const leads = [
  {
    name: "Winford Asher",
    topic: "Cafe A100 for commercial use",
    status: "New",
    created: "4/02/2024 12:00 PM",
  },
  {
    name: "Josia Love",
    topic: "Upgrading service plan",
    status: "New",
    created: "3/30/2024 7:45 AM",
  },
  {
    name: "Harrison Curtis",
    topic: "Issue with throughput on EspressoMaster",
    status: "New",
    created: "3/28/2024 3:30 PM",
  },
  {
    name: "Jermaine Berrett",
    topic: "New roaster in distribution facility",
    status: "New",
    created: "3/25/2024 11:05 AM",
  },
  {
    name: "Gerald Stephens",
    topic: "Concerns on current machines",
    status: "New",
    created: "3/23/2024 4:50 PM",
  },
  {
    name: "Halle Griffiths",
    topic: "Expanding business",
    status: "New",
    created: "3/21/2024 10:20 AM",
  },
  {
    name: "Rachel Michael",
    topic: "Addressing service concerns",
    status: "New",
    created: "3/19/2024 1:15 PM",
  },
  {
    name: "Alex Baker",
    topic: "Premium coffee beans",
    status: "New",
    created: "3/17/2024 8:00 AM",
  },
  {
    name: "Lilly Pyles",
    topic: "Cafe A100 bulk rate",
    status: "New",
    created: "3/13/2024 2:45 PM",
  },
  {
    name: "Jane Reyes",
    topic: "Improving cost per cup",
    status: "New",
    created: "3/10/2024 9:30 AM",
  },
];

export function LeadsTable() {
  const [searchTerm, setSearchTerm] = useState(""); // State for input search
  const [filteredLeads, setFilteredLeads] = useState(leads); // State for filtered data
  const [currentView, setCurrentView] = useState<"table" | "chart">("table"); // State to track current view

  // Function to handle filtering
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = leads.filter(
      (lead) =>
        lead.name.toLowerCase().includes(value.toLowerCase()) ||
        lead.topic.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredLeads(filtered);
  };

  // Data for the chart view
  const chartData = {
    labels: filteredLeads.map((lead) => lead.name),
    datasets: [
      {
        label: "Leads Created",
        data: filteredLeads.map((_, index) => index + 1),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <Card className="bg-white shadow-lg rounded-sm overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Sort, filter and search with Copilot"
              className="w-96 pl-10 py-2 border rounded-md text-sm"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          {/* Toggle Buttons */}
          <div>
            <Button
              variant={currentView === "table" ? "default" : "outline"}
              onClick={() => setCurrentView("table")}
              className="mr-2"
            >
              Table View
            </Button>
            <Button
              variant={currentView === "chart" ? "default" : "outline"}
              onClick={() => setCurrentView("chart")}
            >
              Chart View
            </Button>
          </div>
        </div>

        {/* Conditional Rendering for Views */}
        {currentView === "table" ? (
          <div className="w-full overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="w-10 p-3">
                    <Checkbox />
                  </th>
                  <th className="text-left p-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-medium text-sm -ml-3 text-gray-700"
                    >
                      Name
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </th>
                  <th className="text-left p-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-medium text-sm -ml-3 text-gray-700"
                    >
                      Topic
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </th>
                  <th className="text-left p-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-medium text-sm -ml-3 text-gray-700"
                    >
                      Status reason
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </th>
                  <th className="text-right p-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-medium text-sm text-gray-700"
                    >
                      Created on
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead, index) => (
                  <tr
                    key={lead.name}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="p-3">
                      <Checkbox />
                    </td>
                    <td className="p-3">
                      <div className="text-blue-600 hover:underline text-sm font-medium">
                        {lead.name}
                      </div>
                    </td>
                    <td className="p-3 text-sm text-gray-900">{lead.topic}</td>
                    <td className="p-3 text-sm text-gray-900">{lead.status}</td>
                    <td className="p-3 text-right text-sm text-gray-900">
                      {lead.created}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="h-96">
            <Bar data={chartData} options={{ responsive: true }} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
