import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [liked, setLiked] = useState( [] )
//   const [myReviews, setMyReviews] = useState( {} ) 
//   const [playlist, setPlaylist] = useState( [] )

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
//   const addReview = (movie, review) => {
//     setMyReviews( {...myReviews, [movie.id]: review } )
//   };
//   const addToPlaylist = (movie) => {
//     let newPlaylist = [];
//     if (!playlist.includes(movie.id)){
//       newPlaylist = [...playlist, movie.id];
//     }else {
//       newPlaylist=playlist
//     }
//     setPlaylist(newPlaylist)
//     console.log(newPlaylist)
//   };
//   const removeFromPlaylist = (movie) => {
//     setPlaylist( playlist.filter(
//       (mId) => mId !== movie.id
//     ) )
//     console.log(playlist.filter(
//       (mId) => mId !== movie.id
//     ) )
//   };

  return (
    <ActorsContext.Provider
      value={{
        liked,
        addToLiked,
        removeFromLiked,
        
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;