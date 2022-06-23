// Ejemplo de componente en React----
const Mensaje = (props) => {
    return <h1 style={{color: props.color}}>
        {props.message}
        </h1>
}

export default Mensaje
