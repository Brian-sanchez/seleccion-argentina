import React, { useEffect, createRef} from 'react';
import { connect } from 'react-redux'

// Codigo que hice, en donde se ve por fila de forma vertical 

/*const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) => (
  <section>
    <h2>Jugadores</h2>
    <div className = "contenedor-jugadores">
      {jugadores.map((j) => (
        <article className = "jugador" key = {j.id}>
          <img src = {j.foto} alt = {j.nombre}></img>
          <h3> {j.nombre} </h3>
          <div>
            <button onClick = {() => agregarTitular(j)}>Titular</button>
            <button onClick = {() => agregarSuplente(j)}>Suplente</button>
          </div>
        </article>
      ))}
    </div>
  </section>
); */

// Y con esto queda mucho mejor, de manera horizontal y con una barrita para desplazarce

const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) => {
  
  const gridJugadores = createRef()

  useEffect(() => {
    setScrollContainer()
    document.addEventListener('click', setScrollContainer)
  }, []) 
  
  // Función que fija el tamaño del grid de los jugadores
  const setScrollContainer = (desktop = true) => {
    let container = gridJugadores.current
    if (container) {
      const generatedGrid = () => {
        let items = container.getElementsByClassName('jugador')
        let itemsLength = items.length
        let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1

        const getWidth = () => {
          let n = bp + (itemsLength > bp ? 0.3 : 0)
          return (itemsLength / n) * 100
        }
        return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `
      }
      let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
      container.setAttribute('style', styles)
    }
  }

  return (
    <section>
      <h2>Jugadores</h2>
      <div className="contenedor-jugadores">
        <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
          {
            jugadores.map(j => (
              <article className="jugador" key={j.id}>
                <img src={j.foto} alt={j.nombre} />
                <h3>{j.nombre}</h3>
                <div>
                  <button onClick={() => agregarTitular(j)}>Titular</button>
                  <button onClick={() => agregarSuplente(j)}>Suplente</button>
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}


const mapStateToProps = state => ({ //De esta manera creamos el mapStateToProps
    jugadores: state.jugadores //Y con jugadores ya convertidos en props, ahora lo puedo utilizar como props
    //en la const Jugadores. Y ahi podre hacer que por cada jugador suelte sus datos y sus fotos (j => {Dato de jugador})
    // Otra cosa, para hacer eso primero hay que recorrer el array de jugadores, y para hacerlo lo hacemos con .map, asi =
    //  jugadores.map( j => (datos))
});

const mapDispatchToProps = dispatch => ({
  agregarTitular(jugador) {
    dispatch({
      type: "AGREGAR_TITULAR",
      jugador
    })
  },
  agregarSuplente(jugador) {
    dispatch({
      type: "AGREGAR_SUPLENTE",
      jugador
    })
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Jugadores); //Asi se escribe el connect y con esto conectamos estos componentes
//Ahora la funcion connect recibe 2 funciones, la primera es el mapStateToProps (Es una funcion que mapea
//lo que tengo en el estado y lo comvierte en propiedades), la segunda es mapDispatchToProps (Es una funcion
//que mapea las funciones y las convierte en propiedades) 
//Ahora en caso de que no necesitemos alguna podemos remplazarla por un objeto vacio, esto   {}.