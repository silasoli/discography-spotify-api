export type Tracks = {
  album: Album;
  artists?: Artists[] | null;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url?: string | null;
  track_number: number;
  type: string;
  uri: string;
};
export type Album = {
  album_type: string;
  artists?: Artists[] | null;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images?: Images[] | null;
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
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
export type Images = {
  height: number;
  url: string;
  width: number;
};
export type ExternalIds = {
  isrc: string;
};
