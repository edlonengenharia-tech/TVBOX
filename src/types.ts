export interface AppItem {
  id: string;
  name: string;
  icon: string;
  color: string;
  category: string;
  description: string;
  version: string;
  size: string;
  rating: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
