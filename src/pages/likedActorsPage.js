import React, { useContext } from "react";
import PageTemplate from "../components/templateActorListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromLiked from "../components/cardIcons/removeFromLiked";


const LikedActorsPage = () => {
  const {liked: actorIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const likedActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", { id: actorId }],
        queryFn: getActor,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = likedActorQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const actors = likedActorQueries.map((q) => q.data);

  return (
    <PageTemplate
      title="Liked Actors"
      actors={actors}
      action={(actor) => {
        return (
          <>
            <RemoveFromLiked actor={actor} />
            {/* <WriteReview actor={actor} /> */}
          </>
        );
      }}
    />
  );
};

export default LikedActorsPage;