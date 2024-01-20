import { Server, Socket } from "socket.io";
import { UserManager } from "./UserManager";
import getRandomId from "../utils/getRandomId";


const userManager:UserManager = new UserManager()
export class IOManager{
    private static io: Server;
    
    constructor(){
        IOManager.getInstance()
        this.initHandler(); 
    }
    private initHandler(){
        // Makes sure these is always an instance before handlers
        if(!IOManager.io) return;
       
        IOManager.io.on('connection',(socket)=>{
          console.log(socket.id)
          IOManager.socketOpen(socket)
          this.socketHandler(socket);
        })
        
    }
    private socketHandler(socket:Socket){
      socket.on('GET_WORD',(_)=>{
        socket.emit('RECEIVE_WORD','Plane')
      })
      socket.on('disconnect',(reason)=>{
        console.log(socket.id)
        IOManager.socketClose(socket);
      })
    }
    private static socketOpen(socket: Socket){
        userManager.addUser(socket.id,socket);
        console.log(userManager.getUsers()) 
    }
    private static socketClose(socket: Socket){
      userManager.removeUser(socket.id); 
      console.log(userManager.getUsers())
    }
    public static getInstance(){
        if(!IOManager.io){
            IOManager.io = new Server(8080,{
            cors:{
              origin:"*"
            }
            })
        }
        // IOManager.io.listen(8080)
        return IOManager.io;
    }
}
