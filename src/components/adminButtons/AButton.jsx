
const AButton = (props) => {
  return (
    <div className={`flex items-center my-1 ${props.bg} text-white gap-1 px-2 py-1`}>
        <button onClick={() => props.fn(props.id)}>{props.text}</button>
        <props.icon size={20} />
    </div>
  )
}

export default AButton