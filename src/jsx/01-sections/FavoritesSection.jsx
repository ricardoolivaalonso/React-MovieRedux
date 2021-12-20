import { useDispatch, useSelector  } from 'react-redux'
import { UNLIKE_MOVIE_ACTION } from "../../redux/actions"
import { MainTitle } from '../02-elements/MainTitle'

const FavoritesSection = () => {
	const dispatch = useDispatch()
    const favorites = useSelector(state => state.movieReducer.liked)
    
    return(
        <>
            {  
                favorites.length > 0 ?
                <div className='movies__list'>
                    {
                        favorites.map( m => 
                            <article className='movie__item' key={m.id} >
                                <div className='movie__bg'>
                                    <img className='movie__image' src={m.image}/>
                                </div>
                                <div className='movie__info'>
                                    <span className='movie__title'>{m.title}</span>
                                    {/* <p className='movie__description'>{m.description}</p> */}
                                </div>
                                <button 
                                    className='movie__button'
                                    onClick={()=>dispatch( UNLIKE_MOVIE_ACTION(m.id))}
                                >-</button>
                            </article>	
                        )
                    }
                </div>
                :
                <MainTitle>Add your favorites movies</MainTitle>
            }
        </>
	
    )
}

export { FavoritesSection}