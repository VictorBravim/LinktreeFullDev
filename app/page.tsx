import { Users, Calendar } from "lucide-react";
import SocialGrid from "@/components/SocialGrid";
import SocialCard from "@/components/SocialCard";
import CommunityCardWithDropdown from "@/components/Dropdown";
import { getCommunityData, getWhatsAppGroups } from "@/lib/ComunidadeApi";
import VideoPlayer from "@/components/VideoPlayer";

export default async function Home() {
  const communityData = await getCommunityData();
  const whatsappGroups = await getWhatsAppGroups();

  const socialMedia = communityData.socialMedia;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="p-4 sm:p-6 md:p-10">
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
            <div className="flex flex-row sm:items-start gap-4">
              <img
                src="/images/FullDev.png"
                alt="Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 rounded-md flex-shrink-0"
              />
              <div className="flex-1">
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                  FullDev
                </h1>
                <div className="flex items-center text-xs sm:text-sm md:text-base text-gray-400 mt-2">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{communityData.memberCount} Membros</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm md:text-base text-gray-400 mt-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Criada em {communityData.foundedYear}</span>
                </div>
                <div className="mt-4 text-xs sm:text-sm md:text-base text-gray-300 break-words">
                  <p>{communityData.description}</p>
                </div>
              </div>
            </div>
            <VideoPlayer />
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-4 p-4 sm:p-6 md:p-10">
          <div className="md:col-span-8 space-y-4 sm:space-y-6">
            <CommunityCardWithDropdown
              groups={whatsappGroups}
              totalGroups={communityData.groups.total}
            />
            <div className="border border-zinc-800 rounded-lg p-4 sm:p-6 bg-zinc-900/50 hover:border-orange-600 transition-colors">
              <div className="flex items-center gap-4">
                <img
                  src="/images/FullDev.png"
                  alt="Logo"
                  className="w-12 h-12 bg-zinc-800 rounded-full"
                />
                <div>
                  <h2 className="font-medium text-lg sm:text-xl">
                    Próximo hackathon
                  </h2>
                  <div className="flex items-center text-xs sm:text-sm text-gray-400 mt-1">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                    <span>Em construção</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 sm:mt-6 bg-zinc-800 text-gray-500 py-2 sm:py-3 px-4 rounded-md flex items-center justify-center cursor-not-allowed">
                desabilitado
              </button>
            </div>
            <div className="border border-zinc-800 rounded-lg p-4 sm:p-6 bg-zinc-900/50 hover:border-orange-600 transition-colors">
              <div className="flex items-center gap-4">
                <img
                  src="/images/FullDev.png"
                  alt="Logo"
                  className="w-12 h-12 bg-zinc-800 rounded-full"
                />
                <div>
                  <h2 className="font-medium text-lg sm:text-xl">
                    Último Aviso
                  </h2>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">
                    03/04/25
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm sm:text-base text-gray-300">
                <p>{communityData.latestAnnouncement.text}</p>
              </div>
              <img
                src="/images/Aviso.png"
                alt="Logo"
                className="mt-4 sm:mt-6 w-full h-60 sm:h-125 bg-zinc-800 rounded-md"
              />
            </div>
          </div>

          <div className="md:col-span-4 space-y-4 sm:space-y-6">
            {socialMedia.length > 0 && (
              <SocialGrid
                handle={socialMedia[0].handle}
                followers={socialMedia[0].followers}
                imageUrl={socialMedia[0].imageUrl}
                url={socialMedia[0].links[0].url}
                recentImages={socialMedia[0].recentImages || []}
              />
            )}

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {socialMedia.slice(1, 4).map((social, index) => (
                <SocialCard
                  key={index}
                  handle={social.handle}
                  followers={social.followers}
                  imageUrl={social.imageUrl}
                  url={social.links[0].url}
                />
              ))}
            </div>
            <img
              src="/images/Meme.png"
              alt="Logo"
              className="w-full h-72 sm:h-60 bg-zinc-800 rounded-lg"
            />
          </div>
        </div>

        <div className="mt-6 sm:mt-10 bg-zinc-900 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-400">
          Todos os direitos reservados a FullDev - 2025
        </div>
      </div>
    </main>
  );
}