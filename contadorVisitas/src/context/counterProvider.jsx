import { createContext, useState, useEffect } from 'react'

const CounterContext = createContext()

const CounterProvider = ({ children }) => {
  let peliculas = [
    {
      id: 1,
      titulo: 'El Origen de Gru',
      poster:
        'https://cinecalidad.dev/wp-content/uploads/2022/08/zBk0guZ6NI2aHclb4sbrQdrrnOC-400x600.jpg',
      publicacion: '06/09/2022',
      likes: 0
    },
    {
      id: 2,
      titulo: 'Lo primeros Pasos de Groot',
      poster: 'https://image.tmdb.org/t/p/w780/14dIvYV9d54bekA8EX9o7mtXQ9i.jpg',
      publicacion: '06/09/2022',
      likes: 0,
    },
    {
      id: 3,
      titulo: 'Dragon Ball Super Super Hero',
      poster:
        'https://cinecalidad.dev/wp-content/uploads/2022/08/apL0srqe9emB7DpmFRtR6UrEXwZ-400x600.jpg',
      publicacion: '06/09/2022',
      likes: 0,
    },
    {
      id: 4,
      titulo: 'El monstruo marino',
      poster:
        'https://cinecalidad.dev/wp-content/uploads/2022/07/wEdvvT8js6qhdVvxGkeYqr6gayP-400x592.jpg',
      publicacion: '06/09/2022',
      likes: 0
    },
    {
      id: 5,
      titulo: 'Cliffor, el gran perro Rojo',
      poster:
        'https://cinecalidad.dev/wp-content/uploads/2021/12/5rWT1jJD5NJmbt0bJXDb3vKOQsh-400x600.jpg',
      publicacion: '06/09/2022',
      likes: 0
    },
    {
      id: 6,
      titulo: 'Raya y el ultimo dragon',
      poster:
        'https://cinecalidad.dev/wp-content/uploads/2021/12/hbjOtofNpvFvhzBUUoZGAjkjjsl-400x600.jpg',
      publicacion: '06/09/2022',
      likes: 0
    }
  ]
  const [peli, setPeliculas] = useState(peliculas)

  const [visitas, setVisitas] = useState(0)

  const loadPeliculas = () =>{
     setPeliculas(peliculas);
  }
  const moreLikes = (peliculad) =>{
      peli.forEach(pelicula => {
          if (pelicula.id == peliculad.id) {
               pelicula.likes++;
               setPeliculas([...peli],pelicula );
          }
     });
  }
  return (
    <CounterContext.Provider
      value={{
        peli,
        visitas,
        setVisitas,
        moreLikes,
        loadPeliculas
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}
export { CounterProvider }
export default CounterContext
