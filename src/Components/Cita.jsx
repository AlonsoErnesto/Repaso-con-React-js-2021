import React from 'react'
import PropTypes from 'prop-types';

 const  Cita = (props) => {

    const {cita,deleteCita} = props;
    const {mascota,propietario,hora,fecha,sintomas,id} = cita
    


    return(
       <div className="cita" style={{marginTop:20}}> 
       
            <p>Mascota: <span>{mascota}</span></p>
            <p>Propietario: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintamas: <span>{sintomas}</span></p>
            <button className="button eliminar u-full-width" onClick={()=>deleteCita(id)}>Eliminar &times;</button>

       </div>
    )
}

Cita.propTypes  = {
    cita:PropTypes.object.isRequired,
    deleteCita:PropTypes.func.isRequired
}


export default Cita;