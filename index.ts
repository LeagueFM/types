export type Show = {
  id: string;
  start: string;
  end: string;

  displayName: string | null;
  clockedIn: boolean;
  icon: string | null;
  banner: string | null;

  users: (User | null)[];

  hasStreamKey: boolean;
};

export type User = {
  id: string;
  name: string;
  displayName: string | null;
  description: string | null;
  pfp: string;
  banner: string | null;
  publicUserRole: {
    id: string;
    name: string;
    displayName: string | null;
  };
};

export type Banner = {
  id: string;
  displayName: string;
  url: string;
  clickUrl: string | null;
};

export type DeezerSong = {
  id: number;
  title: string;
  artist: {
    name: string;
    art: string;
  };
  art: string;
  preview: string;
  duration: number;
};

export type BlogArticle = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  category: {
    id: string;
    name: string;
    displayName: string;
  };
  user: {
    id: string;
    name: string;
    displayName: string;
    description: string;
    bannerFileName: string;
    pfp: string;
    banner: string;
  } | null;
  file: string;
};

export type Top20Item = {
  id: string;
  place: number;
  weeksInTop: number | null;
  songName: string;
  artist: string;
  art: string;
  deezerId: string;
  placeIncrease: number;
};
export type NowPlaying = {
  id: string;
  startedAt: number;
  song: {
    id: string;
    title: string;
    artists: string[];
    art: string;
    duration: null | number;
    lyrics: Lyrics;
  };

  requestsOpen?: boolean;
};

export type Lyrics =
  | null
  | {
    synced: false;
    text: {
      content: string;
      id?: string;
    }[];
  }
  | {
    synced: true;
    text: {
      start: null | number;
      content: string;
      id?: string;
    }[];
  };

export type Vacature = {
  id: string;
  createdAt: string;
  title: string;
  age: number;
  description: string;
  badgeNames: string[];
  badgeIcons: string[];
  voiceRequired: boolean;
  file: string;
};

export type FormError = {
  field: string;
  message: string;
};
