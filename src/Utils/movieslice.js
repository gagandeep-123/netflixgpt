import { asyncThunkCreator, createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name: 'movies',
    initialState: {
        nowplayingmovies: null,
        movieTrailer: null,
        popularmovies: null,
        topratedmovies: null,
        upcomingmovies: null

    },
    reducers: {
        addnowplayingmovies: (state, action) => {
            state.nowplayingmovies = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        },
        addPopularmovies: (state, action) => {
            state.popularmovies = action.payload
    
        },
        addtopratedmovies: (state, action) => {
            state.topratedmovies = action.payload
        },
        addUpcomingmovies: (state, action) => {
            state.upcomingmovies = action.payload
        }
    }

}
    
)
export default movieslice.reducer
export const {addnowplayingmovies , addMovieTrailer, addPopularmovies, addtopratedmovies , addUpcomingmovies} = movieslice.actions 