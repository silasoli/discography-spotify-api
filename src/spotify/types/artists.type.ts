export type ExternalUrls = {
  spotify: string;
};

export type Followers = {
  href: null;
  total: number;
};

export type Image = {
  height: number;
  url: string;
  width: number;
};

export type Artist = {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};
