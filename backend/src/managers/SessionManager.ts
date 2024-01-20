import { Socket } from "socket.io";
import { userId } from "./UserManager";

interface session{
    sessionId : string;
    word : string;
    type: 'single' | 'multiple';
    usersList: userId[]

}


export class SessionManager{


    private sessions : session[];
    constructor(){
        this.sessions = new Array<session>();
    }


    createSession(socket:Socket){
        let word = 'plane';
        this.sessions.push({
            sessionId: socket.id,
            word: 'Plane',
            type:'single',
            usersList: [socket.id]
        })
        return word;
    }
}