import React from 'react'
import './pantallaprincipal.css';
import Inicio from './Inicio.tsx'


const PantallaPrincial:React.FC = () => {
  return (
    <>
    <div className="pcontainer">
      
      <section className="ContEjercicios">
        <article className="inicio">
        <Inicio/>  
        </article>
      </section>
      <section className="acceso">
        
      </section>
    </div>
    </>
  )
}

export default PantallaPrincial