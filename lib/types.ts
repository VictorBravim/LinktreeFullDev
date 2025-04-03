export interface WhatsAppGroup {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  memberCount: number;
  inviteLink: string;
  recentImages: {
    url: string;
    timestamp: string;
  }[];
}