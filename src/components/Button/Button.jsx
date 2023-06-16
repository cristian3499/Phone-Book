export const Button = ({ textValue, handleEventClick }) => {
    return (
        <button onClick={handleEventClick}>
            {textValue}
        </button>
    )
}