export interface IComics {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<Result>;
  };
  etag: string;
}
type TextObjects = Array<{
  type: string;
  language: string;
  text: string;
}>;
export type Result = {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObjects;
  title: string;
  thumbnail: Thumbnail;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  digitalId: number;
  comics: Comics;
  stories: Stories;
  events: Events;
  series: Series;
  urls: Array<{
    type: string;
    url: string;
  }>;
};

export type Series = {
  resourceURI: string;
  name: string;
};

export type Events = {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<{
    resourceURI: string;
    name: string;
  }>;
};
export type Stories = {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<{
    resourceURI: string;
    name: string;
    type: string;
  }>;
};
export type Comics = {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<{
    resourceURI: string;
    name: string;
  }>;
};
export type Thumbnail = {
  path: string;
  extension: string;
};

