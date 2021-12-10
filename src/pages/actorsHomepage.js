import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPopularActor} from '../api/tmdb-api'
import AddToLikedIcon from '../components/cardIcons/addToLiked'

const ActorsHomePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('actors', getPopularActor)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
//   const liked = actors.filter(m => m.liked)
//   localStorage.setItem('liked', JSON.stringify(liked))
//   const addToLiked = (movieId) => true 

  return (
    <PageTemplate
      title="Discover Actors"
      actors={actors}
      action={(actor) => {
        return <AddToLikedIcon actor={actor} />
      }}
    />
);
};

export default ActorsHomePage;