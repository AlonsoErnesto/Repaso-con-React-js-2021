import React,{useState,useEffect} from 'react'
import Formulario from './Components/Formulario.jsx'
import Cita from './Components/Cita.jsx'


export default function App() {
  
  let CitasLocalStorage = JSON.parse(localStorage.getItem('citas'));
  const [citas, setCitas] = useState(CitasLocalStorage)

  //function delete Cita ID
  const deleteCita = (id) => {
    const nuevaCita = citas.filter(cita => cita.id !== id )
    setCitas(nuevaCita)
  }

  const CrearCita = (cita) => {
    setCitas([...citas,cita])
  }


  useEffect(()=>{
  
      if(CitasLocalStorage)
      {
        localStorage.setItem('citas',JSON.stringify(citas))
      }else{
        localStorage.setItem('citas',JSON.stringify([]))
      }

  },[citas,setCitas])



  const titulo = citas.length === 0 ? "No hay citas" : `Tiene ${citas.length} citas`

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
          <div className="row">
              <div className="one-half column"> 
                  <Formulario CrearCita={CrearCita}/>
              </div>
              <div className="one-half column">
                <h2>{titulo}</h2> 
                  {citas.map(cita =>{
                    return <Cita
                        key={cita.id}
                        cita={cita}
                        deleteCita={deleteCita}
                    />
                  })}
              </div>
          </div>
      </div>
    </>
  )
}

