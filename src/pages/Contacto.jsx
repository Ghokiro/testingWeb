import {useEffect} from 'react'
import { Form, useActionData, } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'

export async function action({request}) {

  const formData = await request.formData()
  const datos = Object.fromEntries(formData)

  const { nombre, apellido, email, telefono} = datos
  const errores = []

  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios")
  }

  if (errores.length) {
    return errores
  }
  
  
}


function Contacto() {

  const errores = useActionData()

  return (
    <div>
      <h2 className='uppercase font-black text-4xl text-white text-center'
      >Contacto</h2>
      <p className='text-white text-center'>Llena el formulario para contactarme</p>

      <div className='border mt-10 rounded-xl max-w-lg mx-auto'
      >
        <Form 
          method='post'
          noValidate
          
        >
          {errores?.length && errores.map( (error, i) =>  <Error key={i}>{error}</Error> )}
          <Formulario/>

          <div className='text-center'>
            <input type='submit'
              className='text-white uppercase font-bold mx-auto border px-6 py-2 mb-5 rounded-md
                hover:bg-slate-700 hover:scale-110 transition-all cursor-pointer
              '
              value="Enviar Datos"

         
            />

          </div>
          
        </Form>

      </div>
    </div>
  )
}

export default Contacto