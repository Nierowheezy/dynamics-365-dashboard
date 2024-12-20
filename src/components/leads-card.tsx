import React, { useState } from "react";

interface LeadCardProps {
  name: string;
  role: string;
  company: string;
  topic: string;
  description: string;
  tags: string[];
  imageVal: string;
  onClick?: () => void; // Added onClick prop
  icon?: React.ReactNode;
  color?: string; // New color prop
  dealValue?: string; // Additional field for deal value
  decisionMakerStatus?: string; // Additional field for decision-maker status
}

export function LeadCard({
  name,
  role,
  company,
  topic,
  description,
  tags,
  imageVal,
  icon,
  color,
  dealValue,
  decisionMakerStatus,
  onClick, // Destructure onClick prop
}: LeadCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-lg border p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick} // Add onClick here
      role="button"
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={imageVal}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">
            {role} • {company}
          </p>
        </div>
      </div>

      {/* Topic and Description */}
      <div
        style={{ backgroundColor: color }} // Apply the color dynamically
        className="rounded-lg border p-4 mb-4"
      >
        <div className="flex items-center p-1">
          {icon}
          <div className="text-sm font-medium">{topic}</div>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Tags Section */}
      <div className="flex items-center gap-2 text-xs text-gray-500 ml-2">
        {tags.map((tag, index) => (
          <React.Fragment key={tag}>
            {index > 0 && <span>•</span>}
            <span>{tag}</span>
          </React.Fragment>
        ))}
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute top-0 left-full ml-4 w-48 bg-gray-800 text-white text-sm p-2 rounded shadow-lg z-10">
          <p className="font-medium">Deal Value: {dealValue || "N/A"}</p>
          <p className="font-medium">
            Decision Maker: {decisionMakerStatus || "N/A"}
          </p>
        </div>
      )}
    </div>
  );
}
