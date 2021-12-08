import AddMovieReviewPage from './pages/addMovieReviewPage'
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import NowplayingPage from './pages/nowplayingPage';
import SiteHeader from './components/siteHeader';
import TopRatedPage from "./pages/topRatedPage";
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import PopularMoviePage from "./pages/popularMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import playlistMoivePage from "./pages/playlistMoivePage"

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          {" "}
          <Switch>
            <Route exact path="/movies/popular" component={PopularMoviePage} />
            <Route exact path="/movies/topRated" component={TopRatedPage} />
            <Route exact path="/movies/nowplaying" component={NowplayingPage} />
            <Route exact path="/movies/playlist" component={playlistMoivePage} />
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route exact path="/" component={HomePage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
