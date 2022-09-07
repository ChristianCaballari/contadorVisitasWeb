import React, { useEffect } from 'react'
import useCounter from '../hooks/useCounter';

export const ListaPeliculas = ({ pelicula }) => {

  const { poster, titulo, publicacion, id, likes } = pelicula;

  
  const {visitas, setVisitas, moreLikes, peli, loadPeliculas} = useCounter();

  useEffect(()=>{
     //loadPeliculas();
  },[]) 

  const moreLike = (idLike) =>{
     moreLikes(idLike);
  }
  return (
    <>
      <article className='entrada'>
        <img src={poster} alt='texto entrada' />
        <div className='contenido'>
          <h3>{titulo}</h3>
          <p>
            Publicado el: <span>{publicacion}</span>
          </p>
          <p>
            Por: <span>Christian Caballari</span>
          </p>
          <a onClick={() => moreLike(pelicula)} className='boton'>
            <span className="span">Puntuar {likes}</span>
          </a>
        </div>
      </article>
    </>
  )
}
