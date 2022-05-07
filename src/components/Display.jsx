export default function Display(props) {
    if (props.data) {
        return <img src={props.data.gif.data.images.original.url}/>
    } 
    else return "click the button"
}