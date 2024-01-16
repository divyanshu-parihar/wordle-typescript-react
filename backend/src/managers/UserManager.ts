import { WebSocket } from "ws";

type userId = string;
interface User{
    id:userId;
    socket: WebSocket;
}

export class UserManager{
    private users: User[];

    constructor(){
        this.users = new Array<User>()
    }

    addUser(id:string, socket: WebSocket){
        this.users.push({
           id,
           socket
        })
    }
    
}