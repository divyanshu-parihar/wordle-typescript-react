import { useEffect, useState } from 'react';
import Button from './components/Button';
import { socket } from './lib/sockets/socket';
import { Link } from 'react-router-dom';
function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const handleStart = ()=>{
    console.log(socket)
    socket.emit('GET_WORD','')
    console.log('done')

  }
  useEffect(() => {
    function onConnect() {
      console.log(socket)
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function receiveWord(value: any) {
      console.log(value)
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    // socket.on('foo', onFooEvent);
    socket.on('RECEIVE_WORD',(args:any)=>{
      console.log(args)
    })
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('RECEIVE_WORD', receiveWord);
    };
  }, []); 
  return (
    <>
      <div className="StartGame w-screen h-screen flex items-center justify-center">
        <Link to='/game'><Button type='button' name='Start' cb={handleStart}/> </Link>
        <p>State: { '' + isConnected }</p>;
      </div>      
    </>
  )
}

export default App
