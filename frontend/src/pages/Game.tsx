import { FormEvent, useEffect, useRef, useState} from "react"
import Button from "../components/Button"
import { socket } from "../lib/sockets/socket"
export default function Game() {

const inputRef = useRef<any>() 
  const [word, setWord] = useState(undefined);

  const [guess, setGuess] = useState<string[]>([])
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currGuess:string = inputRef.current.value
    if(currGuess.toLowerCase() == FIXED_WORD.toLowerCase()) {
      console.log('you win')
      return;
    }
    setGuess((prev)=>(
      [...prev,inputRef.current.value]
    ))
  console.log(guess)
  }

  useEffect(()=>{
    socket.emit("GET_WORD",'',(response)=>{
      console.log(response)
    })
     
  },[])

  return (
    <div className="container min-w-screen min-h-screen flex align-center justify-center">
    <div className="wordle-container">
      <div className="heading text-2xl text-center"> Wordle</div>
      <div className="heading text-2xl text-center"> {FIXED_WORD}</div>
        <div className='w-screen text-center'>
          <form onSubmit={(e) => handleSubmit(e)}>

            <input ref={inputRef} maxLength={WORDLE_SIZE} className='border-4 border-sky-200 rounded-md p-2' type='text' />
            <Button type="submit" name = 'Submit'/>
          </form>
        </div>
        {
          guess && guess.map((guess)=>{
            return <div key={guess} className='text-center'>{guess}</div>
          })
        }
      {/* </div> */}
    </div>
  </div> 
  )
}
