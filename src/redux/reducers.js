import { initialFetch, initialMovie, initialComing } from "./initialState"
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

import { combineReducers } from 'redux'

const fetchReducer = ( state = initialFetch, action) => {
    switch (action.type) {
        case MOVIES_REQUEST:
            return{
                ...state,
                loading: true
            }

        case MOVIES_SUCCESS:
            return{
                ...state,
                loading: false,
                movies: action.payload
            }

        case MOVIES_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state
    }
}
const comingReducer = ( state = initialComing, action) => {
    switch (action.type) {
        case COMING_REQUEST:
            return{
                ...state,
                loading: true
            }

        case COMING_SUCCESS:
            return{
                ...state,
                loading: false,
                coming: action.payload
            }

        case COMING_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
                coming: {
                    id: "tt10872600",
                    title: "Spider-Man: No Way Home",
                    image: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_Ratio0.6716_AL_.jpg.jpg'
                }
            }

        default:
            return state
    }
}

const movieReducer = (state = initialMovie, action) => {
    switch (action.type) {
        case LIKE_MOVIE:

            const duplicate = state.liked.some( l => l.id === action.payload.id )

            if(!duplicate){
                return {
                    ...state,
                    liked: [...state.liked, action.payload]
                }
            }
           return state
         
        case UNLIKE_MOVIE:
            return {
                ...state,
                liked: [ ...state.liked.filter( l => l.id !== action.payload) ]
            }
        default:
            return state
    }
}


const rootReducers = combineReducers({
    fetchReducer,
    comingReducer,
    movieReducer
})

export { rootReducers }

