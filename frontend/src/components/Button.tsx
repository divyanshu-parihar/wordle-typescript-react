
interface props {
    name: string;
    cb? : ()=>void | null;
    type: "submit" | 'button';
}
function Button(props:props) {
  return (
    <button onClick={props.cb} type={props.type} className='mx-2 text-white  px-2 py-1 bg-black rounded-md '>{props.name}</button>
  )
}

export default Button