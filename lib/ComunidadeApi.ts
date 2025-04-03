export interface CommunityData {
  title: string;
  memberCount: string;
  foundedYear: number;
  description: string;
  groups: {
    total: number;
    list: Array<{
      id: string;
      name: string;
      memberCount: number;
      imageUrl: string;
    }>;
  };
  hackathon: {
    status: "em-construcao" | "agendado" | "finalizado";
    date?: string;
  };
  latestAnnouncement: {
    title: string;
    date: string;
    text: string;
    imageUrl?: string;
  };
  socialMedia: Array<{
    handle: string;
    followers: string;
    imageUrl: string;
    links: Array<{
      platform: string;
      url: string;
    }>;
    recentImages?: string[];
  }>;
}

export interface WhatsAppGroup {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  memberCount: number;
  inviteLink: string;
  recentImages: { url: string; timestamp: string }[];
}

export async function getCommunityData(): Promise<CommunityData> {
  return {
    title: "Título",
    memberCount: "2034",
    foundedYear: 2024,
    description: "Fala, Dev! Seja muito Bem-vindo! 😆",
    groups: {
      total: 10,
      list: [],
    },
    hackathon: { status: "em-construcao" },
    latestAnnouncement: {
      title: "Último Aviso",
      date: "03/04/25",
      text: "Limite de grupos atingido!",
    },
    socialMedia: [
      {
        handle: "Discord",
        followers: "413",
        imageUrl: "/images/FullDev.png",
        links: [
          { platform: "Discord", url: "https://discord.com/invite/2vMkX7kc8t" },
        ],
        recentImages: [
          "/images/Discord1.png",
          "/images/Discord2.png",
          "/images/Discord3.png",
          "/images/Discord4.png",
          "/images/Discord5.png",
          "/images/Discord6.png",
        ],
      },
      {
        handle: "Instagram",
        followers: "48",
        imageUrl: "/images/FullDev.png",
        links: [
          {
            platform: "Instagram",
            url: "https://www.instagram.com/comunidadefulldev/",
          },
        ],
      },
      {
        handle: "Linkedin",
        followers: "1K",
        imageUrl: "/images/FullDev.png",
        links: [
          {
            platform: "Linkedin",
            url: "https://www.linkedin.com/company/comunidadefulldev/",
          },
        ],
      },
      {
        handle: "Youtube",
        followers: "19",
        imageUrl: "/images/FullDev.png",
        links: [
          {
            platform: "Youtube",
            url: "https://www.youtube.com/@ComunidadeFulldev",
          },
        ],
      },
    ],
  };
}

export async function getWhatsAppGroups(): Promise<WhatsAppGroup[]> {
  return [
    {
      id: "1",
      name: "FullDev - Code Queens",
      description: "",
      imageUrl: "/images/CodeQueens.png",
      memberCount: 504,
      inviteLink: "https://chat.whatsapp.com/KOKFfsXGD1PBVWvAXXNbcb",
      recentImages: [
        { url: "/images/Conversa1.png", timestamp: "2025-04-01T14:30:00Z" },
        { url: "/images/Conversa2.png", timestamp: "2025-04-01T13:45:00Z" },
        { url: "/images/Conversa3.png", timestamp: "2025-04-01T12:20:00Z" },
      ],
    },
    {
      id: "2",
      name: "FullDev - Geral 1",
      description: "Fala, Dev! Seja muito Bem-vindo! 😆",
      imageUrl: "/images/Geral 1.png",
      memberCount: 1024,
      inviteLink: "https://chat.whatsapp.com/ChrXjnNn3Xh1gTikrYyjAs",
      recentImages: [
        { url: "/images/Conversa1.png", timestamp: "2025-04-01T14:30:00Z" },
        { url: "/images/Conversa2.png", timestamp: "2025-04-01T13:45:00Z" },
        { url: "/images/Conversa3.png", timestamp: "2025-04-01T12:20:00Z" },
      ],
    },
    {
      id: "3",
      name: "FullDev - Geral 2",
      description: "",
      imageUrl: "/images/Geral 2.png",
      memberCount: 117,
      inviteLink: "https://chat.whatsapp.com/H3uqzOSGodo9URWQbKQBgq",
      recentImages: [
        { url: "/images/Conversa1.png", timestamp: "2025-04-01T14:30:00Z" },
        { url: "/images/Conversa2.png", timestamp: "2025-04-01T13:45:00Z" },
        { url: "/images/Conversa3.png", timestamp: "2025-04-01T12:20:00Z" },
      ],
    },
    {
      id: "4",
      name: "FullDev - Front e UX/UI",
      description: "",
      imageUrl: "/images/Front.png",
      memberCount: 274,
      inviteLink: "https://chat.whatsapp.com/LlqIsyvg1zn62m7TdvJthb",
      recentImages: [
        { url: "/images/Conversa1.png", timestamp: "2025-04-01T14:30:00Z" },
        { url: "/images/Conversa2.png", timestamp: "2025-04-01T13:45:00Z" },
        { url: "/images/Conversa3.png", timestamp: "2025-04-01T12:20:00Z" },
      ],
    },
    {
      id: "5",
      name: "FullDev - Back",
      description: "Grupo para discussão de DevOps e Cloud Computing",
      imageUrl: "/images/Back.png",
      memberCount: 294,
      inviteLink: "https://chat.whatsapp.com/ElrsyS77NHj9YOirwP3I0b",
      recentImages: [
        { url: "/images/Conversa1.png", timestamp: "2025-04-01T14:30:00Z" },
        { url: "/images/Conversa2.png", timestamp: "2025-04-01T13:45:00Z" },
        { url: "/images/Conversa3.png", timestamp: "2025-04-01T12:20:00Z" },
      ],
    },
    {
      id: "6",
      name: "FullDev - Linkedin",
      description: "",
      imageUrl: "/images/Linkedin.png",
      memberCount: 313,
      inviteLink: "https://chat.whatsapp.com/KtO57yX6Ytx7Shee1SUUWZ",
      recentImages: [
        { url: "/images/Conversa1.png", timestamp: "2025-04-01T14:30:00Z" },
        { url: "/images/Conversa2.png", timestamp: "2025-04-01T13:45:00Z" },
        { url: "/images/Conversa3.png", timestamp: "2025-04-01T12:20:00Z" },
      ],
    },
    {
      id: "7",
      name: "FullDev - Only English",
      description: "",
      imageUrl: "/images/English.png",
      memberCount: 390,
      inviteLink: "https://chat.whatsapp.com/HcDc5HtAHzr0q4a7vPBJfS",
      recentImages: [
        { url: "/images/Conversa1.png", timestamp: "2025-04-01T14:30:00Z" },
        { url: "/images/Conversa2.png", timestamp: "2025-04-01T13:45:00Z" },
        { url: "/images/Conversa3.png", timestamp: "2025-04-01T12:20:00Z" },
      ],
    },
    {
      id: "8",
      name: "FullDev - Vagas e Freelas",
      description: "",
      imageUrl: "/images/Vaga.png",
      memberCount: 1024,
      inviteLink: "https://chat.whatsapp.com/J6V7iaZv8AFFO05RG7SpEs",
      recentImages: [
        { url: "/images/Conversa1.png", timestamp: "2025-04-01T14:30:00Z" },
        { url: "/images/Conversa2.png", timestamp: "2025-04-01T13:45:00Z" },
        { url: "/images/Conversa3.png", timestamp: "2025-04-01T12:20:00Z" },
      ],
    },
    {
      id: "9",
      name: "FullDev - Promoções",
      description: "",
      imageUrl: "/images/Promo.png",
      memberCount: 246,
      inviteLink: "https://chat.whatsapp.com/DsOrfpf858hCf11mtcdHB6",
      recentImages: [
        { url: "/images/Conversa1.png", timestamp: "2025-04-01T14:30:00Z" },
        { url: "/images/Conversa2.png", timestamp: "2025-04-01T13:45:00Z" },
        { url: "/images/Conversa3.png", timestamp: "2025-04-01T12:20:00Z" },
      ],
    },
    {
      id: "10",
      name: "FullDev - Strong",
      description: "",
      imageUrl: "/images/Strong.png",
      memberCount: 105,
      inviteLink: "https://chat.whatsapp.com/IWEV2ThDLrxK0crZXrAT4X",
      recentImages: [
        { url: "/images/Conversa1.png", timestamp: "2025-04-01T14:30:00Z" },
        { url: "/images/Conversa2.png", timestamp: "2025-04-01T13:45:00Z" },
        { url: "/images/Conversa3.png", timestamp: "2025-04-01T12:20:00Z" },
      ],
    },
  ];
}