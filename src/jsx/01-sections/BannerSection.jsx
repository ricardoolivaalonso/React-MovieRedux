import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { COMING_FETCH_ACTION } from "../../redux/actions"
import { MainTitle } from "../02-elements/MainTitle"



const BannerSection = () => {
    const dispatch = useDispatch()
    const coming = useSelector(state => state.comingReducer)

    useEffect(()=>{
        // dispatch( COMING_FETCH_ACTION() )
	},[])
     
    
    return(
        <section className="banner">
            {
                coming.loading ?
                    <MainTitle mod="main-title__fixed">One moment...</MainTitle> :
                    <MainTitle mod="main-title__fixed">Recommended Movie</MainTitle>
            }
            <div className='banner__bg'>
                <img className='banner__image' src={coming.coming.image}/>
            </div>
            <div className="banner__info">
                <span className='banner__title'>{coming.coming.title}</span>
                <button className='banner__button' onClick={()=>dispatch( COMING_FETCH_ACTION() )}>Random Movie</button>
            </div>
        </section>
    )
}

export { BannerSection }