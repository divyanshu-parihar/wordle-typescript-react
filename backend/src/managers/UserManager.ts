import { Socket } from "socket.io";

export type userId = string;
export interface User{
    id:userId;
    socket: Socket;
}

export class UserManager{
    private users: User[];

    constructor(){
        this.users = new Array<User>()
    }

    addUser(id:userId, socket: Socket){
        this.users.push({
           id,
           socket
        })
    }

    removeUser(id:userId){
        this.users = this.users.filter(x =>x.id != id);
    }


    getUsers(){
        return this.users;
    }
}