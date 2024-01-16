import { WebSocketServer, Server } from "ws";
import { UserManager } from "./UserManager";


const userManager:UserManager = new UserManager()
export class IOManager{
    private static io: Server;
    
    constructor(){
        this.initHandler(); 
    }
    private initHandler(){
        // Makes sure these is always an instance before handlers
        if(!IOManager.io) IOManager.getInstance();
        IOManager.io.once('listening',()=>{
            console.log("SERVER STARTED")
        })
    }
    public static getInstance(){
        if(!IOManager.io){
            IOManager.io = new WebSocketServer({
                port: 8080,
                perMessageDeflate: {
                  zlibDeflateOptions: {
                    // See zlib defaults.
                    chunkSize: 1024,
                    memLevel: 7,
                    level: 3
                  },
                  zlibInflateOptions: {
                    chunkSize: 10 * 1024
                  },
                  // Other options settable:
                  clientNoContextTakeover: true, // Defaults to negotiated value.
                  serverNoContextTakeover: true, // Defaults to negotiated value.
                  serverMaxWindowBits: 10, // Defaults to negotiated value.
                  // Below options specified as default values.
                  concurrencyLimit: 10, // Limits zlib concurrency for perf.
                  threshold: 1024 // Size (in bytes) below which messages
                  // should not be compressed if context takeover is disabled.
                }
              });
        }
        return IOManager.io;
    }
}
