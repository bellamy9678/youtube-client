export interface SearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

interface IStatistics {
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  favoriteCount: number;
  commentCount: number;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  channelTitle: string;
  categoryId: number;
  tags: string[];
  thumbnails: IThumbnails;
}

interface IThumbnails {
  default: IThumbnailItem;
  medium: IThumbnailItem;
  high: IThumbnailItem;
  standard: IThumbnailItem;
  maxres: IThumbnailItem;
}

interface IThumbnailItem {
  url: string;
  width: number;
  height: number;
}
