import React,{useState} from 'react'
import uuid from 'uuid/v4'
import PropTypes from 'prop-types';


export default function Formulario(props) {

    const {CrearCita} = props;
    const [error, setError] = useState(false)

    const [cita, setCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    const actualizarState = e =>{
        
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })

    }

    const { mascota,propietario,fecha,hora,sintomas } = cita;

    const submitCita = (e) => {
        e.preventDefault();
        
        // validaciones
        if(mascota.trim() === '' ||  propietario.trim() === '' 
            || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' )
        {

            setError(true);
            return ;
        }
        setError(false)


        //Asignar ID
        cita.id = uuid();
        
        
        //crerar Cita
        CrearCita(cita)


        //Reiniciar el Formuluario
        setCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })

    }


    return (
        <>
            <h3>Crear Cita</h3>
            {error ? <p className="alerta-error">Todos los campos son hobligatorios</p>  : null}
            <form onSubmit={submitCita}>
                <label>Nombre de Mascota</label>
                <input 
                    type="text"
                    name = "mascota"    
                    className="u-full-width"
                    placeholder="Nombre de Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre del Amigo</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del amigo"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha Propuesta</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"  
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora Propuesta</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea 
                    className="u-full-width"
                    name="sintomas"
                    value={sintomas}
                    onChange={actualizarState}
                />
                <button type="submit" className="u-full-width button-primary">Agregar</button>
            </form>
        </>
    )
}
Formulario.propTypes = {
    setCita:PropTypes.func.isRequired
}
