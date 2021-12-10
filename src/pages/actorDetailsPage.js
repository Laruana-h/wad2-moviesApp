import React from "react";
import { withRouter } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";
// import useMovie from "../hooks/useMovie";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

import Box from '@material-ui/core/Box';


const ActorDetailsPage = (props) => {
  const { id } = props.match.params;
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                  m: 1,
                },
              }}
            >
             
            </Box>
           
          </PageTemplate>

        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default withRouter(ActorDetailsPage);