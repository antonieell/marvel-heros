type Series = {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<{
    resourceURI: string;
    name: string;
  }>;
};

type Events = {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<{
    resourceURI: string;
    name: string;
  }>;
};
type Stories = {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<{
    resourceURI: string;
    name: string;
    type: string;
  }>;
};
type Comics = {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<{
    resourceURI: string;
    name: string;
  }>;
};
type Thumbnail = {
  path: string;
  extension: string;
};

export default interface ICharacter {
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
    results: Array<{
      id: number;
      name: string;
      description: string;
      modified: string;
      resourceURI: string;
      thumbnail: Thumbnail;
      comics: Comics;
      stories: Stories;
      events: Events;
      series: Series;
      urls: Array<{
        type: string;
        url: string;
      }>;
    }>;
  };
  etag: string;
}


