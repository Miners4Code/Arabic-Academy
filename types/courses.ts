export interface Trainer {
  id: number;
  first_name: string;
  last_name: string;
  leader: boolean;
}

export interface Course {
  id: number;
  title: string;
  imageURL: string;
  total_videos: number;
  total_duration: string;
  original_price: number;
  currency: string;
  status: "available" | "coming_soon";
  trainers: Trainer[];
}
