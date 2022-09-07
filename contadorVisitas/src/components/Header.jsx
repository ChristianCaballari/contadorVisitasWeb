import React, { useEffect } from 'react'
import useCounter from '../hooks/useCounter'
import { ListaPeliculas } from './ListaPeliculas'

export const Header = () => {
  const { peli, visitas, setVisitas } = useCounter()

  return (
    <>
      <div className='contenedor'>
        <div className='displayFlex'>
          <h1>Últimas Entradas {visitas}</h1>
          <p  onClick={() => setVisitas(visitas+1)} className='boton white'>
             Aumentar Registro Visitas
          </p>
        </div>
        <div className='contenido-principal'>
          {peli.map(pelicula => (
            <ListaPeliculas key={pelicula.id} pelicula={pelicula} />
          ))}
        </div>
      </div>
    </>
  )
}
