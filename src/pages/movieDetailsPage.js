import React from "react";
import { withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { Link, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
import MovieSimilar from "../components/movieSimilar";
import MovieRecommend from "../components/movieRecommend";
import MovieCast from "../components/movieCast"


const MovieDetailsPage = (props) => {
  const { id } = props.match.params;
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
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
              <ButtonGroup variant="contained" aria-label="outlined primary button group" backgroundColor="primary">
              
            {/* {!props.history.location.pathname.endsWith("/recommendations") ? (
              <Link to={`/movies/${id}/recommendations`}>
                <Button>
                Recommendations..
                </Button>
              </Link>
            ) : (
              <Link
                to={`/movies/${id}`}>
                <Button>Hide</Button>
              </Link>
            )} */}
            {!props.history.location.pathname.endsWith("/recommendations") ? (
              <Link to={`/movies/${id}/recommendations`}>
                <Button color="primary">
                  Recommendations
                </Button>
              </Link>
            ) : (
              <Link
                to={`/movies/${id}`}>
                <Button>Hide</Button>
              </Link>
            )}
            {!props.history.location.pathname.endsWith("/similar") ? (
              <Link to={`/movies/${id}/similar`}>
                <Button id="similar" color="primary">
                  Similar Movies
                </Button>
              </Link>
            ) : (
              <Link
                to={`/movies/${id}`}>
                <Button>Hide</Button>
              </Link>
            )}
            {!props.history.location.pathname.endsWith("/cast") ? (
              <Link to={`/movies/${id}/cast`}>
                <Button color="primary">
                  Show Cast
                </Button>
              </Link>
            ) : (
              <Link
                to={`/movies/${id}`}>
                <Button>Hide</Button>
              </Link>
            )}
              </ButtonGroup>
            </Box>
            <Route
              path={`/movies/:id/recommendations`}
              render={props => <MovieRecommend movie={movie} {...props} />}
            />
            <Route
              path={`/movies/:id/similar`}
              render={props => <MovieSimilar movie={movie} {...props} />}
            />

            <Route
            path={`/movies/:id/cast`}
            render={props => <MovieCast movie={movie} {...props} />}
          />
          </PageTemplate>

        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(MovieDetailsPage);