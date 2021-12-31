import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import PrivateRoute from "./route/privateRoute";
import AuthProvider from "./contexts/authContext";
// import HomePage from "./pages/homePage";
// import MoviePage from "./pages/movieDetailsPage";
// import ActorPage from "./pages/actorDetailsPage";
// import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
// import MovieReviewPage from "./pages/movieReviewPage";
// import NowplayingPage from "./pages/nowplayingPage";
// import SiteHeader from './components/siteHeader';
// import TopRatedPage from "./pages/topRatedPage";
// import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
// import PopularMoviePage from "./pages/popularMoviesPage";
// import playlistMoivePage from "./pages/playlistMoivePage";
// import ActorsHomePage from "./pages/actorsHomepage";
// import LikedActorsPage from "./pages/likedActorsPage";
// import Login from "./pages/loginPage";
// import TV from "./pages/searchTVpage";
// import AddMovieReviewPage from './pages/addMovieReviewPage'

import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase/firebaseConfig';
import { useFirebaseApp } from 'reactfire';

const HomePage           = lazy(() => import("./pages/homePage"));
const MoviePage          = lazy(() => import("./pages/movieDetailsPage"));
const ActorPage          = lazy(() => import("./pages/actorDetailsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoriteMoviesPage"));
const MovieReviewPage    = lazy(() => import("./pages/movieReviewPage"));
const NowplayingPage     = lazy(() => import("./pages/nowplayingPage"));
const SiteHeader         = lazy(() => import('./components/siteHeader'));
const TopRatedPage       = lazy(() => import("./pages/topRatedPage"));
const UpcomingMoviesPage = lazy(() => import("./pages/UpcomingMoviesPage"));
const PopularMoviePage   = lazy(() => import("./pages/popularMoviesPage"));
const playlistMoivePage  = lazy(() => import("./pages/playlistMoivePage"));
const ActorsHomePage     = lazy(() => import("./pages/actorsHomepage"));
const LikedActorsPage    = lazy(() => import("./pages/likedActorsPage"));
const Login              = lazy(() => import("./pages/loginPage"));
const TV                 = lazy(() => import("./pages/searchTVpage"));
const AddMovieReviewPage = lazy(() => import('./pages/addMovieReviewPage'));
const login              = lazy(() => import('./pages/login'));
const signup             = lazy(() => import('./pages/signup'));

// import Login from './firebase/Login';


const App = () => {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Suspense fallback={<h1> Loading component </h1>} >
      <AuthProvider>
      <SiteHeader />
        <MoviesContextProvider>
          {" "}
  
          <Switch>
            <Route exact path="/tv" component={TV} />
            <Route exact path="/movies/login" component={login} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/movies/popular" component={PopularMoviePage} />
            <Route exact path="/movies/topRated" component={TopRatedPage} />
            <PrivateRoute exact path="/movies/nowplaying" component={NowplayingPage} />
            <Route exact path="/movies/playlist" component={playlistMoivePage} />
            <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />

            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />

            <Route path="/movies/:id" component={MoviePage} />

            <Route exact path="/login" component={Login} />
            
            <Route exact path="/movies/login" component={login} />
            <Route exact path="/movies/signup" component={signup} />
            <PrivateRoute exact path="/actors/liked" component={LikedActorsPage} />
            <PrivateRoute exact path="/actors/:id" component={ActorPage} />
            <PrivateRoute exact path="/actors" component={ActorsHomePage} />

            <PrivateRoute exact path="/" component={HomePage} />
            
            <Redirect from="*" to="/" />
          </Switch>
         
        </MoviesContextProvider>
        </AuthProvider>
        </Suspense>
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


ReactDOM.render(<FirebaseAppProvider firebaseConfig={firebaseConfig}><App /></FirebaseAppProvider>, document.getElementById("root"));
