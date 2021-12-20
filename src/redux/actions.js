import {
    MOVIES_REQUEST,
    MOVIES_SUCCESS,
    MOVIES_FAILURE,
    COMING_REQUEST,
    COMING_SUCCESS,
    COMING_FAILURE,
    LIKE_MOVIE,
    UNLIKE_MOVIE
} from './types'

const MOVIES_REQUEST_ACTION = () => ({
    type: MOVIES_REQUEST
})
const MOVIES_SUCCESS_ACTION = (movies) => ({
    type: MOVIES_SUCCESS,
    payload: movies
})
const MOVIES_FAILURE_ACTION = (error) => ({
    type: MOVIES_FAILURE,
    payload: error
})
const MOVIES_FETCH_ACTION = (movie) => {
    return (dispatch) => {
        dispatch( MOVIES_REQUEST_ACTION() )
        fetch(`https://imdb-api.com/en/API/SearchMovie/k_97cvnuh9/${movie}`)
            .then( response => response.json())
            .then( data => dispatch( MOVIES_SUCCESS_ACTION(data.results)) )
            .catch( error => {
                console.log("Error =>" + error)
                dispatch( MOVIES_FAILURE_ACTION('Intente de nuevo: '+ error))
            } )
    }
}
// ============================
const COMING_REQUEST_ACTION = () => ({
    type: COMING_REQUEST
})
const COMING_SUCCESS_ACTION = (movies) => ({
    type: COMING_SUCCESS,
    payload: movies
})
const COMING_FAILURE_ACTION = (error) => ({
    type: COMING_FAILURE,
    payload: error
})
const COMING_FETCH_ACTION = (movie) => {
    return (dispatch) => {
        dispatch( COMING_REQUEST_ACTION() )
        fetch('https://imdb-api.com/en/API/MostPopularMovies/k_97cvnuh9')
            .then( response => response.json())
            .then( data => {
                const random = Math.floor(Math.random() * data.items.length)
                dispatch( COMING_SUCCESS_ACTION(data.items[random]))
            })
            .catch( error => {
                console.log("Error =>" + error)
                dispatch( COMING_FAILURE_ACTION('Intente de nuevo: '+ error))
            } )
    }
}
// ============================
const LIKE_MOVIE_ACTION = (movie) => ({
    type: LIKE_MOVIE,
    payload: movie
}) 
const UNLIKE_MOVIE_ACTION = (movie) => ({
    type: UNLIKE_MOVIE,
    payload: movie
}) 


export{
    MOVIES_FETCH_ACTION,
    COMING_FETCH_ACTION,
    LIKE_MOVIE_ACTION,
    UNLIKE_MOVIE_ACTION
}
