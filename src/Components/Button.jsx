const Button = ({message = "I'm the default message", setShowPage, showPage}) => {
    return (
        <button className="button" onClick={()=>setShowPage(showPage)}>
            <h2 className='button__text'> 
            {message}
            </h2>
        </button>
    )
}

export default Button