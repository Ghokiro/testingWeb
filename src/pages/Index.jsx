import {useState} from 'react'
import ditto from "./../images/ditto-dancing.gif"
import zoroa from "./../images/pokemon-zoroa.gif"
import "../styles/animation.css"


function Index() {
  const [showContent, setShowContent] = useState(1);

  const clickEvent = (e) => {
    setShowContent(e)
  }

  return (
    <div 
      className='flex flex-col-reverse md:grid  w-screen md:grid-cols-3-1 '
    >
      {/* Contenido General */}
      <div
        className='mt-5 md:col-start-2 md:col-end-3 flex justify-center md:h-conf'
      >
        {/* Primer contenido */}
        <div 
          className={`flex items-center flex-col p-5 bg-gray-800 div-animation-in rounded-2xl 
           ${showContent != 1 && 'hidden'} 
          `}
        >
          <div className={`flex items-center flex-col div-in 
          
          `}>

          <p
            className='text-center uppercase text-white font-black text-4xl max-w-full'
            >Bienvenidos a esta web sin utilidad alguna</p>

          <img src={ditto} alt="ditto dancing"
            className='max-w-[15rem] w-full'
            /> 
          </div>
        </div>
        {/* --- Fin del primer contenido --- */}

        {/* Segundo contenido */}
        <div 
          className={`flex items-center flex-col md:p-5 bg-gray-800 div-animation-in rounded-2xl 
           ${showContent != 2 && 'hidden'} w-[90%] 
          `}
        >
          <div className={`flex items-center flex-col div-in`}>
            <h2 
              className='text-white uppercase font-black text-4xl'
            >Objetivos de esta web</h2>

            {/* Objetivos */}
            <div className='md:grid md:grid-cols-3 my-10  md:gap-5 space-y-5 md:space-y-0'>
              <div className='bg-slate-700 px-4 mx-3 md:mx-0  py-5 rounded-2xl transition-all hover:scale-105'>
                <p className='text-white text-xl text-center'>
                  Retroalimentar todo lo aprendido previamente.
                </p>
              </div>
              <div className='bg-slate-700 px-4 py-5 mx-3 md:mx-0 rounded-2xl transition-all hover:scale-105'>
                <p className='text-white text-xl text-center'>
                  Desarrollar nueva estética para las futuras páginas web.
                </p>
              </div>
              <div className='bg-slate-700 px-4 py-5 mx-3 md:mx-0 rounded-2xl transition-all hover:scale-105'>
                <p className='text-white text-xl text-center'>
                  Agilizar la codificación a través de la práctica, ya que la mísma hace al maestro.
                </p>
              </div>
            </div>
            {/* -- Fin Objetivos -- */}
          </div>

        </div>
        {/* --- Fin Segundo Contenido --- */}

        {/* Tercer Contenido */}
        <div
          className={`flex items-center flex-col p-5 bg-gray-800 div-animation-in rounded-2xl 
           ${showContent != 3 && 'hidden'} 
          `}
        >
          <div className={`flex items-center flex-col div-in transition-all`}>

            <h3
              className='text-white uppercase font-black text-4xl text-center'
            >Herramientas de práctica</h3>

            <div className='md:grid md:grid-cols-2 py-5 px-10 gap-10 space-y-5 md:space-y-0'>
              <div className='bg-slate-700 px-4 py-5 mx-3 md:mx-0 rounded-2xl transition-all hover:scale-105'>
                <p className='text-white text-xl text-center font-bold mb-5'>
                  Tecnologías / Librerias:
                </p>
                <ul
                  className='list-disc px-5'
                >
                  <li className='text-white text-xl mt-3'>React Js</li>
                  <li className='text-white text-xl mt-3'>Tailwindcss</li>
                  <li className='text-white text-xl mt-3'>React Router Dom</li>
                </ul>
              </div>
              <div className='bg-slate-700 px-4 py-5 mx-3 md:mx-0 rounded-2xl transition-all hover:scale-105'>
                <p className='text-white text-xl text-center font-bold mb-5'>
                  Aplicados a:
                </p>
                <ul className='list-disc px-5'>
                  <li className='text-white text-xl mt-3'>Diseño y animaciones</li>
                  <li className='text-white text-xl mt-3'>Formulario</li>
                  <li className='text-white text-xl mt-3'>Navegación</li>
                </ul>
              </div>
            </div>

          </div>
          {/* --- Fin Tercer Contenido --- */}
          </div>

        {/* Cuarto Contenido */}
        <div
         className={`flex items-center flex-col p-5 bg-gray-800 div-animation-in rounded-2xl 
          ${showContent != 4 && 'hidden'} 
         `}
        >
          <div className={`flex items-center flex-col div-in transition-all
           
          `}>
            <p
              className='text-white uppercase font-black text-4xl text-center'
            >Hasta aquí llegó la creatividad.</p>

            <img src={zoroa} alt="zoroa gif" />
            <p
              className='text-white uppercase font-black text-4xl'
            >Gracias por ver</p>

          </div>

        </div>

      </div>
        {/* --- Fin  Contenido General --- */}

      {/* Botones lado derecho */}
      <div className='mt-5 mx-5 gap-3 md:mx-5 flex justify-center flex-row md:flex-col'>

        {/* Primer boton */}
        <div
          className={`w-8 h-8 ${showContent === 1 ? 'bg-teal-600' : 'bg-gray-500'} hover:scale-105 transition-all rounded-full hover:cursor-pointer
            hover:bg-gray-700
          `}
          
          
          onClick={() => clickEvent(1)}
        ></div>
        
        {/* Segundo Boton */}
        <div
          className={`w-8 h-8 ${showContent === 2 ? 'bg-teal-600' : 'bg-gray-500'} hover:scale-105 transition-all rounded-full hover:cursor-pointer
            hover:bg-gray-700
          `}
          
          onClick={() => clickEvent(2)}
        ></div>

        {/* Tercer boton */}
        <div
          className={`w-8 h-8 ${showContent === 3 ? 'bg-teal-600' : 'bg-gray-500'} hover:scale-105 transition-all rounded-full hover:cursor-pointer
            hover:bg-gray-700
          `}
          
          onClick={() => clickEvent(3)}
        ></div>

        {/* Cuarto boton */}
        <div
          className={`w-8 h-8 ${showContent === 4 ? 'bg-teal-600' : 'bg-gray-500'} hover:scale-105 transition-all rounded-full hover:cursor-pointer
            hover:bg-gray-700
          `}
          
          onClick={() => clickEvent(4)}
        ></div>

      </div>
    </div>
  )
}

export default Index