import React from 'react'
import './pantallaprincipal.css';
import pseudo from '../assets/pseudo.jpg'

const PantallaPrincial:React.FC = () => {
  return (
    <>
    <div className="pcontainer">
      <section className="ContEjercicios">
        <article className="inicio">
            <div className="texto text-center ">
                <h2 className="tituloP text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Algoritmos</h2>
                <p className="textoP mt-6 text-lg leading-8 text-gray-600">Aprender a programar no se trata solo de aprender un conjunto de lenguajes de programación o memorizar comandos. En el corazón de la programación se encuentra el concepto de los algoritmos. Los algoritmos son una secuencia ordenada de instrucciones que permiten resolver un problema o llevar a cabo una tarea específica. Son la base fundamental para el desarrollo de software y representan la esencia misma de la lógica de programación.</p>
            </div>
        </article>
      </section>
      <section className="acceso">
        <article>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div>
                  <img className="rounded-t-lg h-48" src={pseudo} alt="" />
              </div>
              <div className="p-5">
                  <p>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pseudocodigo</h5>
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Se utiliza para describir la lógica y los pasos de un algoritmo de una manera más clara y comprensible, sin estar ligado a un lenguaje de programación en particular.</p>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </div>
        </article>
      </section>
    </div>
    </>
  )
}

export default PantallaPrincial