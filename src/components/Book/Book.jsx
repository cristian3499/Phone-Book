export const Book = ({ id, name, phoneNumer, date, important }) => {

    const isImportant = important ? 'Contacto IMPORTANTE' : 'Contacto no IMPORTANTE'

    return (
        <>
            <div>
                <h2>Contacto - {id} </h2>
                <div>
                    <p>Nombre del contacto: <strong>{name}</strong> </p>
                    <p>Número del contacto: <strong>{phoneNumer}</strong></p>
                    <small> <strong> {date} </strong> </small>
                </div>
                <div>
                    <strong> {isImportant} </strong>
                </div>
            </div>
        </>
    )
}