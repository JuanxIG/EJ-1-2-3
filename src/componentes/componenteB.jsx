import PropTypes from 'prop-types';


const ComponenteB = (props) => {

    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.last_name}</h3>
            <h5>{props.email}</h5>
            <h5>{props.conectado ? "Contacto En Línea" : "Contacto No Disponible"}</h5>
            <button onClick={props.cambiarStatus}>Cambiar Estado</button>
        </div>
    );
};


ComponenteB.propTypes = {
    name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
};


export default ComponenteB;
