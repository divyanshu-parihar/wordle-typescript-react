import { FormEvent, useEffect, useRef, useState } from 'react'
// import './App.css'


const WORDLE_SIZE = 5;
const FIXED_WORD = "PLANE";
function App() {
  const [words, setWords] = useState<Array<Array<string>>>(new Array(WORDLE_SIZE).fill(false).map((_, idx) => new Array(WORDLE_SIZE).fill(idx.toString())));
  const [counter, setCounter] = useState(0);
  const inputRef = useRef<any>()
  const [guess, setGuess] = useState<string[]>([])
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currGuess = inputRef.current.value
    if(currGuess == FIXED_WORD) {
      document.createElement('div').textContent = 'YOUUU WWWWWWW'
    }
    setGuess((prev)=>(
      [...prev,inputRef.current.value]
    ))
  console.log(guess)
  }

  return (
    <>
      <div className="container min-w-screen min-h-screen flex align-center justify-center">
        <div className="wordle-container">
          <div className="heading text-2xl text-center"> Wordle</div>
          <div className="heading text-2xl text-center"> {FIXED_WORD}</div>

          {/* <div className="grid grid-cols-5 space-x-0"> */}
            {/* {
            words.map((el,id)=>{
              return (
                <div className="row bg-sky-700" key={id}>
                  {
                    el.map((char,idx)=>{
                      return (<div className='container w-20 h-20 flex justify-center border-solid border-2 text-2xl items-center' key={idx}> 
                        {/* <input type='text' className='w-20 h-20'></input> */}
            {/* {char}
                       </div>)
                    })
                  }
                </div>
              )
            }) */}
            {/* } */}

            <div className='w-screen text-center'>
              <form onSubmit={(e) => handleSubmit(e)}>

                <input ref={inputRef} maxLength={WORDLE_SIZE} className='border-4 border-sky-200 rounded-md p-2' type='text' />
                <button type="submit" className=' text-white  px-2 py-1 bg-black rounded-md '>CHECK</button>
              </form>
            </div>


            {
              guess && guess.map((guess)=>{
                return <div className='text-center'>{guess}</div>
              })
            }
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default App
