import { SearchItem } from './search-item.model';

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items : SearchItem[];
}

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
