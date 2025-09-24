export interface Section{
    id:string;
    name:string;
}

export interface YouTubeVideo {
  title: string;
  imageUrl: string;
  videoUrl: string;
}

export interface GitHubLink {
  title: string;
  url: string;
}

export interface ResourceItem {
  id: string;
  createdAt: string;
  youTubeVideos: YouTubeVideo[];
  gthub: GitHubLink[];
  aiText:string|null;
  title: string;
  file: string;
  sectionId: string;
  type: string;
  description: string;
}
