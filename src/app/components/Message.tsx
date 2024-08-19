const Message = ({message}: {message: string}): JSX.Element => {
    return (
        <div className="message">{message}</div>
    )
}

export default Message