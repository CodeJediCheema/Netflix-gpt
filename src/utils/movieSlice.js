import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        PopularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        TvShows: null,
        TopPicks: null
    },
    reducers:{
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;

        },
        
        addPopularMovies : (state, action) =>{
            state.PopularMovies = action.payload;

        },
        addTopRatedMovies : (state, action) =>{
            state.topRatedMovies = action.payload;

        },

        addTrailerVideo : (state, action) =>{
            state.trailerVideo = action.payload;
        },
        addUpComingMovies : (state, action) =>{
            state.upComingMovies = action.payload;
        },
        addTvShows : (state,action) =>{
            state.TvShows = action.payload;
        },
        addTopPicks :(state, action) =>{
            state.TopPicks = action.payload;
        }
    },
});



export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpComingMovies, addTvShows, addTopPicks} = moviesSlice.actions;
export default moviesSlice.reducer;