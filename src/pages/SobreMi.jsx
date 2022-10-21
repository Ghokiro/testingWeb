import {useState} from 'react'
import facilitoImg from "./../images/facilitojpg.jpg"

function SobreMi() {
  const [ facilito, setFacilito ] = useState(false)

  return (
    <div className='mx-auto max-w-3xl mb-3'>
      <h2
        className='uppercase font-black text-4xl text-white text-center'
      >Sobre Mi</h2>

      <div
        className='text-white mt-10 mx-auto'
      >
        <h3
          className='text-2xl uppercase'
        >¿Quién soy?</h3>
        
        <ul
          className='list-disc px-7 mt-5 text-lg'
        >
          <li>Mi nombre es Brayan y soy estudiante del mundo de la programación.</li>
          <li>Actualmente estudio en la universidad y en la plataforma de UDEMY con el profesor Juan Pablo de la Torres.</li>

        </ul>
      </div>
      <div
        className='text-white mt-10 '
      >
        <h3 className='text-2xl uppercase'>¿Por qué estudio Programación?</h3>
        
        <div className='md:flex'>
          <ul className='mt-5 list-disc text-lg px-7'>
            <li>Porque soy apasionado de la creatividad y los lenguajes de programación ofrecen la libertad de explotarla..</li>
            <li>Porque existen muchas ofertas laborales, solo hay que tener el conocimiento de necesario y saber buscar.</li>
            <li><p>Porque todo es <span 
              className='font-bold text-violet-500 cursor-pointer hover:scale-150 hover:font-black'
              onClick={() => setFacilito(!facilito)}
            >facilito</span>.</p></li>

          </ul>

          <img src={facilitoImg} alt="facilito imagen" className={`overflow-hidden rounded-xl max-w-[15rem] mt-2 md:mt-0 mx-auto transition-opacity
            ${facilito ? "opacity-100" : "opacity-0"}
          `}/>

        </div>
      </div>
    </div>
  )
}

export default SobreMi