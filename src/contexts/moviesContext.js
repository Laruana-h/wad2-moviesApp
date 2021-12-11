import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [liked, setLiked] = useState( [] )
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [playlist, setPlaylist] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }else {
      newFavorites=favorites;
    }
    setFavorites(newFavorites)
  };
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)){
      newPlaylist = [...playlist, movie.id];
    }else {
      newPlaylist=playlist
    }
    setPlaylist(newPlaylist)
    console.log(newPlaylist)
  };
  const removeFromPlaylist = (movie) => {
    setPlaylist( playlist.filter(
      (mId) => mId !== movie.id
    ) )
    
  };
  
  const addToLiked = (actor) => {
    let newLiked = [];
    if (!liked.includes(actor.id)){
      newLiked = [...liked, actor.id];
    }else {
      newLiked=liked;
    }
    setLiked(newLiked)
  };
  // We will use this function in a later section
  const removeFromLiked = (actor) => {
    setLiked( liked.filter(
      (aId) => aId !== actor.id
    ) )
  };
  return (
    <MoviesContext.Provider
      value={{
        favorites,
        playlist,
        liked,
        addToLiked,
        removeFromLiked,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToPlaylist,
        removeFromPlaylist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;