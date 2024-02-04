export type Albums = {
  album_type: string;
  artists?: Artists[] | null;
  available_markets?: string[] | null;
  copyrights?: Copyrights[] | null;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  genres?: null[] | null;
  href: string;
  id: string;
  images?: Images[] | null;
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  tracks: Tracks;
  type: string;
  uri: string;
};

export type Artists = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type ExternalUrls = {
  spotify: string;
};

export type Copyrights = {
  text: string;
  type: string;
};

export type ExternalIds = {
  upc: string;
};
export type Images = {
  height: number;
  url: string;
  width: number;
};

export type Tracks = {
  href: string;
  items?: Items[] | null;
  limit: number;
  next?: null;
  offset: number;
  previous?: null;
  total: number;
};

export type Items = {
  artists?: Artists[] | null;
  available_markets?: string[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};
