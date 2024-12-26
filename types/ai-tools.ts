export interface AITool {
  tool_id: number;
  title: string;
  pricing: string[];
  subject: string[];
  tags: string[];
  isFav: boolean;
  imageURL: string;
  description: string;
}

export interface AIToolsFetchResponse {
  page: number;
  page_size: number;
  total_pages: number;
  total_items: number;
  data: AITool[];
}
