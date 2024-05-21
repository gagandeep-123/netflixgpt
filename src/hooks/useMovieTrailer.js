import { useDispatch } from "react-redux"
import { options } from "../Utils/constants"
import { addMovieTrailer } from "../Utils/movieslice"
import { useEffect } from "react"




const useMovieTrailer = (movieid) => {


    const dispatch = useDispatch()

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieid + "/videos?language=en-US", options)
        const json = await data.json()
    
        const trailer = json?.results?.filter((video) => video.type == "Trailer")
       

        dispatch(addMovieTrailer(trailer[0]))
    }

    useEffect(() => {
        getMovieVideos()
    }, [])
}
export default useMovieTrailer
