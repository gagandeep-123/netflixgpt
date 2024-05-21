import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name: 'movies',
    initialState: {
        nowplayingmovies: null,
        movieTrailer: null

    },
    reducers: {
        addnowplayingmovies: (state, action) => {
           state.nowplayingmovies = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        }
    }

}
    
)
export default movieslice.reducer
export const {addnowplayingmovies , addMovieTrailer} = movieslice.actions 