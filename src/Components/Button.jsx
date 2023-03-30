const Button = ({message = "I'm the default message"}) => {
    const clicked = () => {
        console.log("you clicked me!")
    }

    return (
        <button className="button" onClick={clicked}>
            <h2 className='button__text'> 
            {message}
            </h2>
        </button>
    )
}

export default Button