import type { Server, Socket } from 'socket.io';

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
  publicUserRole: PublicUserRole | null;
  isDj: boolean;
};

export type PublicUserRole = {
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
  commentsDisabled: boolean;
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
  isGeneral: boolean;
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

export interface ServerToClientEvents {
  connect(): void;

  nowPlayingV2(data: parsedNowPlayingInfo): void;
  songRequestsOpen(data: boolean): void;
  clockedInV2(data: Show): void;

  scheduleUpdate(data: null): void;
  bannersUpdate(data: null): void;
  blogUpdate(data: null): void;
  top20Update(data: null): void;
  vacaturesUpdate(data: null): void;
}

export interface ClientToServerEvents {
  connect(): void;

  ready(): void;
  enableLyrics(): void;
}

export interface InterServerEvents {
  // 
}

export interface SocketData {
  // 
}

export type ioType = Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
export type socketType = Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;