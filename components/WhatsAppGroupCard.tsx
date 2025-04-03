import Image from "next/image";
import { Users, ExternalLink, AlertCircle } from "lucide-react";
import { WhatsAppGroup } from "@/lib/ComunidadeApi";

interface WhatsAppGroupCardProps {
  group: WhatsAppGroup;
}

export default function WhatsAppGroupCard({ group }: WhatsAppGroupCardProps) {
  const isFull = group.memberCount >= 1024;

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-600 transition-colors">
      <div className="p-4 flex items-center gap-3">
        <div className="relative">
          <Image
            src={group.imageUrl || "/images/FullDev.png"}
            alt={group.name}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          {isFull && (
            <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
              <AlertCircle className="w-3 h-3" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg truncate">{group.name}</h3>
          <div className="flex items-center text-gray-400 text-sm">
            <Users className="w-4 h-4 mr-1" />
            <span>{group.memberCount}</span>
            {isFull && (
              <span className="ml-2 text-red-500 font-medium">Grupo Cheio</span>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-0.5">
        {group.recentImages.slice(0, 3).map((image, index) => (
          <div key={index} className="aspect-square relative">
            <Image
              src={image.url || "/images/Logo.png"}
              alt={`Recent image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="p-4">
        <a
          href={group.inviteLink}
          className={`w-full flex items-center justify-center gap-2 py-2 rounded-md transition-colors ${
            isFull
              ? "bg-gray-700 text-gray-300 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
          {...(isFull ? { "aria-disabled": true } : {})}
        >
          {isFull ? "Grupo Cheio" : "Entrar no Grupo"}
          {!isFull && <ExternalLink className="w-4 h-4" />}
        </a>
      </div>
    </div>
  );
}