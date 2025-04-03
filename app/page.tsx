import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WhatsAppGroupCard from "@/components/WhatsappCard";
import { getWhatsAppGroups } from "@/lib/WhatsappApi";

export default async function Home() {
  const groups = await getWhatsAppGroups();

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="font-bold text-xl">FullDev</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-md transition-colors"
          >
            Área da administração
          </a>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>

      <section className="container mx-auto px-4 py-16 md:py-24 text-center relative">
        <div className="absolute inset-0 opacity-5 z-0"></div>
        <div className="relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-orange-600 text-white px-3 py-1 rounded-md text-sm">
              Comunidade
            </span>
            <a
              href="#"
              className="text-gray-400 ml-2 text-sm hover:text-orange-500 inline-flex items-center"
            >
              Para Devs <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            COMUNIDADE <span className="text-orange-600">FULLDEV</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-300">
            BY DEVS, FOR DEVS.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://discord.com/invite/2vMkX7kc8t"
              className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-md transition-colors font-medium"
            >
              Discord
            </a>
            <a
              href="https://www.linkedin.com/company/comunidadefulldev"
              className="border border-white hover:bg-white/10 px-6 py-3 rounded-md transition-colors font-medium flex items-center"
            >
              Linkedin <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="groups" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Grupos WhatsApp</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <WhatsAppGroupCard key={group.id} group={group} />
          ))}
        </div>
      </section>

      <footer className="bg-zinc-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 FullDev. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}