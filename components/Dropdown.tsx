"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import WhatsAppGroupCard from "@/components/WhatsAppGroupCard";
import { WhatsAppGroup } from "@/lib/ComunidadeApi";

interface CommunityCardWithDropdownProps {
  groups: WhatsAppGroup[];
  totalGroups: number;
}

export default function CommunityCardWithDropdown({
  groups,
  totalGroups,
}: CommunityCardWithDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 hover:border-orange-600 transition-colors">
      <div className="flex items-center gap-4">
        <img
          src="/images/FullDev.png"
          alt="Logo"
          className="w-12 h-12 bg-zinc-800 rounded-full"
        />
        <div>
          <h2 className="font-medium text-xl">Comunidade - FullDev</h2>
          <div className="flex items-center text-sm text-gray-400 mt-1">
            <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
            <span>{totalGroups} total de grupos</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full mt-6 bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-4 rounded-md flex items-center justify-center transition-colors"
      >
        Visualizar grupos{" "}
        <ChevronDown
          className={`ml-2 w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
          {groups.map((group) => (
            <WhatsAppGroupCard key={group.id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
}