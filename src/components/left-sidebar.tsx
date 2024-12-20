"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Home,
  Clock,
  Pin,
  Zap,
  LayoutDashboard,
  FileText,
  Users2,
  User2,
  Briefcase,
  FileBarChart2,
  Megaphone,
  BarChart3,
  ChevronDown,
  ChevronRight,
  ShoppingCart,
  Receipt,
  Package,
  FileSpreadsheet,
  Mail,
  Rocket,
  PieChart,
} from "lucide-react";
import AgentSkillMenu from "./AgentSkillMenu";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href?: string;
  children?: NavItem[];
}

const navigationItems: (NavItem | { label: string; isCategory: true })[] = [
  { icon: Home, label: "Home", href: "/" },
  {
    icon: Clock,
    label: "Recent",
    children: [
      { icon: FileText, label: "Recent items", href: "/recent" },
      { icon: Clock, label: "Recently viewed", href: "/recently-viewed" },
    ],
  },
  {
    icon: Pin,
    label: "Pinned",
    children: [
      { icon: FileText, label: "Pinned items", href: "/pinned" },
      { icon: Pin, label: "Pin management", href: "/pin-management" },
    ],
  },
  { label: "My work", isCategory: true },
  { icon: Zap, label: "Sales accelerator", href: "/sales-accelerator" },
  { icon: Zap, label: "Sales accelerator", href: "/sales-accelerator" },
  { icon: LayoutDashboard, label: "Dashboards", href: "/dashboards" },
  { icon: FileText, label: "Activities", href: "/activities" },
  { label: "Customers", isCategory: true },
  { icon: Users2, label: "Accounts", href: "/accounts" },
  { icon: User2, label: "Contacts", href: "/contacts" },
  { label: "Sales", isCategory: true },
  { icon: Briefcase, label: "Leads", href: "/leads" },
  { icon: FileBarChart2, label: "Opportunities", href: "/opportunities" },
  { icon: Megaphone, label: "Competitors", href: "/competitors" },
  { label: "Collateral", isCategory: true },
  { icon: BarChart3, label: "Quotes", href: "/quotes" },
  { icon: ShoppingCart, label: "Orders", href: "/orders" },
  { icon: Receipt, label: "Invoices", href: "/invoices" },
  { icon: Package, label: "Products", href: "/products" },
  {
    icon: FileSpreadsheet,
    label: "Sales Literature",
    href: "/sales-literature",
  },
  { label: "Marketing", isCategory: true },
  { icon: Mail, label: "Marketing lists", href: "/marketing-lists" },
  { icon: Rocket, label: "Quick Campaigns", href: "/quick-campaigns" },
  {
    label: "Performance",
    icon: PieChart,
    children: [
      {
        icon: BarChart3,
        label: "Sales Performance",
        href: "/sales-performance",
      },
      { icon: FileBarChart2, label: "Analytics", href: "/analytics" },
    ],
  },
];

export function LeftSidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [showAgentSkillMenu, setShowAgentSkillMenu] = useState(false);

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const renderNavItem = (
    item: NavItem | { label: string; isCategory: true },
    level = 0
  ) => {
    if ("isCategory" in item) {
      return (
        <div
          key={item.label}
          className="px-4 py-2 font-bold text-sm text-gray-600"
        >
          {item.label}
        </div>
      );
    }

    const isActive = item.href === pathname;
    const isOpen = openSections[item.label];

    if (item.children) {
      return (
        <Collapsible
          key={item.label}
          open={isOpen}
          onOpenChange={() => toggleSection(item.label)}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className={`w-full justify-start px-4 py-2 h-9 hover:bg-gray-200 ${
                isActive ? "bg-[#F3F2F1] text-gray-900" : "text-gray-700"
              }`}
            >
              <div
                className="flex items-center w-full"
                style={{ paddingLeft: level * 12 }}
              >
                <item.icon className="h-4 w-4 mr-2" />
                <span className="flex-grow text-sm font-normal">
                  {item.label}
                </span>
                {isOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </div>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            {item.children.map((child) => renderNavItem(child, level + 1))}
          </CollapsibleContent>
        </Collapsible>
      );
    }

    return (
      <Link href={item.href || "#"} passHref key={item.label}>
        <Button
          variant="ghost"
          className={`w-full justify-start px-4 py-2 h-9 hover:bg-gray-200 ${
            isActive ? "bg-[#F3F2F1] text-gray-900" : "text-gray-700"
          }`}
        >
          <div
            className="flex items-center w-full"
            style={{ paddingLeft: level * 12 }}
          >
            <item.icon className="h-4 w-4 mr-2" />
            <span className="text-sm font-normal">{item.label}</span>
          </div>
        </Button>
      </Link>
    );
  };

  return (
    <div className="relative">
      {!showAgentSkillMenu ? (
        <aside className="w-64 bg-[#F3F2F1] border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
              onClick={() => setShowAgentSkillMenu(true)}
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
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
          <ScrollArea className="flex-grow">
            <div className="py-2">
              {navigationItems.map((item) => renderNavItem(item))}
            </div>
          </ScrollArea>
        </aside>
      ) : (
        <AgentSkillMenu onClose={() => setShowAgentSkillMenu(false)} />
      )}
    </div>
  );
}
