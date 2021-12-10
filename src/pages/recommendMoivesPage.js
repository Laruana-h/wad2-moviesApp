import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getRecommendations} from '../api/tmdb-api'
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';

const RecommendationPage = (props) => {
// const { data, error, isLoading, isError } = useQuery('recommendations', getRecommendations)

    const { id } = props.match.params;
    const { data:movies, error, isLoading, isError } = useQuery(
      ["recommendations", { id: id }],
      getRecommendations
    );
    
if (isLoading) {
return <Spinner />
}

if (isError) {
return <h1>{error.message}</h1>
} 
// const movies = data.results;

// // Redundant, but necessary to avoid app crashing.
// const favorites = movies.filter(m => m.favorite)
// localStorage.setItem('favorites', JSON.stringify(favorites))
// const addToFavorites = (movieId) => true 
// const playlist = movies.filter(m => m.playlist)
// localStorage.setItem('playlist', JSON.stringify(playlist))
// const addToPlaylist = (movieId) => true 

return (
<PageTemplate
title="Recommendation Movies"
movies={movies}
action={(movie) => {
return <PlaylistAddIcon movie={movie} />
}}
/>
);
};

export default RecommendationPage;