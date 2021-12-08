import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPopularMovies} from '../api/tmdb-api'
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';

const PopularMoviePage = (props) => {
const { data, error, isLoading, isError } = useQuery('popular', getPopularMovies)

if (isLoading) {
return <Spinner />
}

if (isError) {
return <h1>{error.message}</h1>
} 
const movies = data.results;

// // Redundant, but necessary to avoid app crashing.
// const favorites = movies.filter(m => m.favorite)
// localStorage.setItem('favorites', JSON.stringify(favorites))
// const addToFavorites = (movieId) => true 
const playlist = movies.filter(m => m.playlist)
localStorage.setItem('playlist', JSON.stringify(playlist))
// const addToPlaylist = (movieId) => true 

return (
<PageTemplate
title="Popular Movies"
movies={movies}
action={(movie) => {
return <PlaylistAddIcon movie={movie} />
}}
/>
);
};

export default PopularMoviePage;