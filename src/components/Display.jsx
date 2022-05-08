export default function Display(props) {
    console.log("display", props)
    if (props.gif) {
        return (
            <div>
                <img src={props.gif.data.images.original.url} />
            </div>

        )
    }
    else return "Click the button!"
}