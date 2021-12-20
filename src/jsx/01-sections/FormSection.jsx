import { useState } from "react"
import { useDispatch } from 'react-redux'
import { MOVIES_FETCH_ACTION } from "../../redux/actions"

const FormSection = () => {
	const dispatch = useDispatch()
    const [movie, setMovie] = useState('')

    const sendForm = (e) => {
        e.preventDefault()
        movie.length > 3 && dispatch(MOVIES_FETCH_ACTION(movie))
    }

    return(
        <form className="form" onSubmit={(e)=>sendForm(e)}>
            <input
                className="form__input" 
                type="text" 
                placeholder="Search a movie"
                value={movie} 
                onChange={ (e)=>setMovie(e.target.value) }
                minLength={3}
            />
            <button className="form__submit" type="submit">
                <svg className="form__icon" viewBox="0 0 20 20">
                    <path d="M12.323,2.398c-0.741-0.312-1.523-0.472-2.319-0.472c-2.394,0-4.544,1.423-5.476,3.625C3.907,7.013,3.896,8.629,4.49,10.102c0.528,1.304,1.494,2.333,2.72,2.99L5.467,17.33c-0.113,0.273,0.018,0.59,0.292,0.703c0.068,0.027,0.137,0.041,0.206,0.041c0.211,0,0.412-0.127,0.498-0.334l1.74-4.23c0.583,0.186,1.18,0.309,1.795,0.309c2.394,0,4.544-1.424,5.478-3.629C16.755,7.173,15.342,3.68,12.323,2.398z M14.488,9.77c-0.769,1.807-2.529,2.975-4.49,2.975c-0.651,0-1.291-0.131-1.897-0.387c-0.002-0.004-0.002-0.004-0.002-0.004c-0.003,0-0.003,0-0.003,0s0,0,0,0c-1.195-0.508-2.121-1.452-2.607-2.656c-0.489-1.205-0.477-2.53,0.03-3.727c0.764-1.805,2.525-2.969,4.487-2.969c0.651,0,1.292,0.129,1.898,0.386C14.374,4.438,15.533,7.3,14.488,9.77z"/>
                </svg>
            </button>
        </form>
    )
}

export { FormSection }