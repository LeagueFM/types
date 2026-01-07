import type { Server, Socket } from 'socket.io';
import type { parsedNowPlayingInfo, Show } from './index';

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