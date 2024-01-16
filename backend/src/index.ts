import WebSocket, { WebSocketServer } from 'ws';
import { IOManager } from './managers/IOManager';


const ioManager = new IOManager();
IOManager.getInstance(); 