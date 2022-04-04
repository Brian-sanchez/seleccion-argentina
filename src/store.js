import { createStore } from 'redux';

const initialState = { //Creamos la constante de nuestro initialState y ahi almacenamos los datos que
    //queremos que se guarden en nuestro state y los datos con los cuales va a iniciar nuestro initialState
    jugadores: [
        {
            id: 1,
            /**/
            nombre: "Emiliano Martínez",
            foto: "https://www.aupaathletic.com/comun/jugadores_fotos/foto_jugador-15424.jpg"
        },
        {
            id: 2,
            /*"*/
            nombre: "Franco Armani",
            foto: "https://images.ole.com.ar/collections/avatares/149575.jpg"
        },
        {
            id: 3,
            /**/
            nombre: "Marcos Acuña",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mar/100/29710.jpg"
        },
        {
            id: 4,
            /**/
            nombre: "Renzo Saravia",
            foto: "https://images.ole.com.ar/collections/avatares/153394.jpg"
        },
        {
            id: 5,
            nombre: "Nicolás Otamendi",
            foto: "https://images.ole.com.ar/collections/avatares/57410.jpg"
        },
        {
            id: 6,
            /**/
            nombre: "Nicolás Tagliafico",
            foto: "https://images.ole.com.ar/collections/avatares/86479.jpg"
        },
        {
            id: 7,
            nombre: "Juan Foyth",
            foto: "https://images.ole.com.ar/collections/avatares/234908.jpg"
        },
        {
            id: 8,
            /**/
            nombre: "Pezzella",
            foto: "https://images.ole.com.ar/collections/avatares/121220.jpg"
        },
        {
            id: 9,
            nombre: "Leandro Paredes",
            foto: "https://images.ole.com.ar/collections/avatares/91080.jpg"
        },
        {
            id: 10,
            nombre: "Giovani Lo Celso",
            foto: "https://images.ole.com.ar/collections/avatares/200826.jpg"
        },
        {
            id: 11,
            nombre: "De Paul",
            foto: "https://images.ole.com.ar/collections/avatares/119141.jpg"
        },
        {
            id: 12,
            nombre: "Paulo Dybala",
            foto: "https://images.ole.com.ar/collections/avatares/120638.jpg"
        },
        {
            id: 13,
            nombre: "Di María",
            foto: "https://images.ole.com.ar/collections/avatares/46497.jpg"
        },
        {
            id: 14,
            nombre: "Agüero",
            foto: "https://images.ole.com.ar/collections/avatares/37572.jpg"
        },
        {
            id: 15,
            nombre: "Lautaro Martínez",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/l/lau/100/34156.jpg"
        },
        {
            id: 16,
            nombre: "Leonel Messi",
            foto: "https://images.ole.com.ar/collections/avatares/19054.jpg"
        }
     ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => { //Aca nombramos a esta constante como el reducer, osea
    //aqui definimos el reducer, pero al reducer lo podemos llamar de diferentes maneras, en este caso
    //reducerEntrenador y tambien podemos tener varios reducers, pero en este caso solo utilizaremos 1.
    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }   
    }

    // Si usasmos mas de 2 if, se recomienda usar switch 

    if (action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if (action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state;

}

export default createStore(reducerEntrenador)