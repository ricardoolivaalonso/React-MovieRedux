import { useEffect } from "react"
import { useDispatch, useSelector  } from 'react-redux'
import { MOVIES_FETCH_ACTION, LIKE_MOVIE_ACTION } from "../../redux/actions"
import { MainTitle } from '../02-elements/MainTitle'

const MoviesSection = () => {
	const dispatch = useDispatch()
    const best = useSelector(state => state.fetchReducer)

    return(
        <>
            <MainTitle>Searched Movies</MainTitle>
            {
                !best.loading ? 
                    <div className='movies__list'>
                        { 
                            best.movies.map( m => 
                                <article className='movie__item' key={m.id} >   
                                    <div className='movie__bg'>
                                        <img className='movie__image' src={m.image}/>
                                    </div>
                                    
                                    <div className='movie__info'>
                                        <span className='movie__title'>{m.title}</span>
                                    </div>
                                    <button 
                                        className='movie__button'
                                        onClick={ 
                                            () => dispatch( 
                                                LIKE_MOVIE_ACTION({
                                                    id: m.id,
                                                    image: m.image,
                                                    title: m.title,
                                                    description: m.description
                                                }) 
                                            )
                                        }
                                    >+</button>
                                </article>
                            )
                        }
                    </div>
                    :
                    <MainTitle>One moment...</MainTitle>
            }
        </>
       
    )
}

export { MoviesSection }