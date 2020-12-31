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
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  variants: Vaiants;
  collections: Array<any>;
  collectedIssues: any[];
  digitalId: number;
  dates: Dates;
  creators: Creators;
  characters: Characters;
  thumbnail: Thumbnail;
  images: Images;
  prices: Prices;
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

export type Variant = Array<{
  resourceURI: string;
  name: string;
}>;

export type Dates = Array<{
  type: string;
  date: string;
}>;

export type Prices = Array<{
  type: string;
  price: number;
}>;

export type Thumbnail = {
  path: string;
  extension: string;
};

export type Images = Array<{
  path: string;
  extension: string;
}>;
export type Item = Array<{
  resourceURI: string;
  name: string;
  role: string;
}>;
export type Creators = {
  available: number;
  collectionURI: string;
  items: Item;
  returned: number;
};

export type Characters = {
  available: number;
  collectionURI: string;
  items: Array<{ resourceURI: string; name: string }>;
  returned: number;
};
