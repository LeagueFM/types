import type { Server, Socket } from 'socket.io';

export interface ServerToClientEvents {
    connect: () => void;
}

export interface ClientToServerEvents {
    connect: () => void;
}

export interface InterServerEvents {
    // 
}

export interface SocketData {
    // 
}

export type ioType = Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
export type socketType = Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;