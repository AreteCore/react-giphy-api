
export default function Display(props) {
    console.log("display", props)
    if (props.gif) {
        return (
            <div>
                <img src={props.gif.data.images.original.url} onClick={props.handleClick}/>
                <p>(You can also click the image for a new GIF.)</p>
            </div>

        )
    }
    else return <h2>"Click the button for Bob's Burgers!"</h2>
}