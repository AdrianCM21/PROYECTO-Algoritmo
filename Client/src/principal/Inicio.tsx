import React from 'react'
const Inicio = () => {
  return (
    <div>
    <div className="bg-[#232e49] relative  dark:bg-gray-900">
    <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white tituloP">Algoritmos <br className="lg:block hidden"/> <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Predice ejercicios Online</span>.</h1>
        <div className="lg:flex">
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                <p className="sm:text-lg text-white dark:text-gray-300 lg:w-11/12 tituloP">
                 En el corazón de la programación se encuentra el concepto de los algoritmos. Los algoritmos son una secuencia ordenada de instrucciones que permiten resolver un problema o llevar a cabo una tarea específica. Son la base fundamental para el desarrollo de software y representan la esencia misma de la lógica de programación.
                </p>
                <span className="block font-semibold text-gray-500 dark:text-gray-400">Todos los algoritmos disponibles.</span>
                

                <article  className="cursos">
                    <div className="flex justify-center  bg-[#283046] imagen">
                    <div className="bg-grey shadow-[rgba(0,_0,_0,_0.54)_0px_3px_8px] rounded  xl:w-1/3 p-4 ">
                        <div className="flex">
                        <div className="w-2/3">
                            <h1 className="font-semibold text-white">
                            Algoritmos Basico
                            </h1>
                            <span className="block text-xs uppercase text-blue-400">PseudoCodigo</span>
                        </div>
                        <div className="w-1/3">
                            <span className="float-right text-xs bg-blue-900 rounded px-2 py-1 text-white">Active</span>
                        </div>
                        </div>
                        <div className="py-4 text-sm text-white">
                        Estos ejercicios estan diseñados para las personas que van empezando a programar para mejorar su comprencion de los algoritmos y como se tratan las varibles, bubles y condicionales.
                        Estos algoritmos estan expuestos en pseudocodigo para enfocarse principalmente en el pensamiento logico.
                        </div>
                        <div className="flex">
                        <div className="w-1/2 flex-col">
                            <span className="flex justify-center text-2xl font-semibold text-white">47</span>
                            <span className="flex justify-center text-white">Ejercicios</span>
                        </div>
            
                        </div>
                        <div className="flex">
                        <span className="text-xs font-semibold py-1 text-white">Procesos</span>
                        <span className="text-xs font-semibold py-1 ml-auto text-blue-600">75%</span>
                        </div>
                        <div className="flex">
                        <div className="w-3/4 h-2 rounded rounded-r-none bg-blue-400"></div>
                        <div className="w-1/4 h-2 rounded rounded-l-none bg-blue-100"></div>
                        </div>
                        
                    </div>
                    </div>
                    
                </article>
                
            </div>
            <div className="mt-12 md:mt-0  -right-10 lg:w-7/12">
                <div className="relative w-full">
                    <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div>
                    <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg" className="relative w-full imagen" alt="wath illustration" loading="lazy" width="320" height="280"/>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Inicio