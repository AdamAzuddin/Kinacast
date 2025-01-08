export interface Episode {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  youtubeLink?: string;
  duration?: string;
  publishDate: string;
}

export interface Speakers {
  id: number;
  name: string; 
  title: string;
  imgPath: string;
}
