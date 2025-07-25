export type Show = {
  id: string;
  start: string;
  end: string;

  displayName: string | null;
  description: string | null;
  shortDescription: string | null;
  clockedIn: boolean;
  icon: string | null;
  banner: string | null;
  hasStreamKey: boolean;

  users: User[];
};

export type User = {
  id: string;
  name: string;
  displayName: string | null;
  description: string | null;
  pfp: string;
  banner: string | null;
  publicUserRole: publicUserRole | null;
};

export type publicUserRole = {
  id: string;
  name: string;
  displayName: string | null;
};

export type Banner = {
  id: string;
  displayName: string;
  url: string;
  clickUrl: string | null;
};

export type transformedSong = {
  id: number;
  title: string;
  artists: {
    name: string;
    art: string;
  }[];
  art: string;
  preview: string;
  duration: number;
  isrc: string | null;
  rank: number;
};

export type BlogItem = {
  id: string;
  title: string;
  description: string | null;
  createdAt: string;
  category: {
    id: string;
    name: string;
    displayName: string;
  };
  content: string;
  user: User | null;
  file: string;
};

export type TopSong = {
  id: string;
  place: number;
  weeksInTop: number | null;
  placeIncrease: number | null;
  song: transformedSong;
};

export type parsedNowPlayingInfo = {
  id: string;
  startedAt: number;
  song: parsedNowPlaying;
};

export type parsedNowPlaying = {
  id: string;
  title: string;
  artists: string[];
  art: string;
  duration: null | number;
  lyrics: null | {
    synced: false;
    text: {
      content: string;
    }[];
  } | {
    synced: true;
    text: {
      start: null | number;
      content: string;
    }[];
  };
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