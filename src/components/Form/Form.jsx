export const Form = ({ handleSubmit, valueToSendName, valueInput, phoneValue, valueToSenPhone }) => {

    return (
        <div className="formDiv">
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="nameContact"> Nombre del contacto</label>
                    <input type="text" name="nameContact" onChange={valueInput} value={valueToSendName} />
                </p>
                <p>
                    <label htmlFor="phoneNumer"> Numero de telefono</label>
                    <input type="number" onChange={phoneValue} value={valueToSenPhone} />
                </p>
                <button> Agregar contacto </button>
            </form>
        </div>
    )

}