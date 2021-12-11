let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Upcoming Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/movies/upcoming")

  });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h3").contains("Upcoming Movies");
        cy.get("h1").contains("Filter the movies");
      });
    })
    describe("Filtering", () => {
        describe("By movie title", () => {
         it("should only display movies with m in the title", () => {
           let searchString = "m";
           let matchingMovies = filterByTitle(movies, searchString);
           cy.get("#filled-search").clear().type(searchString); // Enter m in text box
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingMovies.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingMovies[index].title);
           });
         })
         it("should only display movies with o in the title", () => {
           let searchString = "o";
           let matchingMovies = filterByTitle(movies, searchString);
           cy.get("#filled-search").clear().type(searchString); // Enter m in text box
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingMovies.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingMovies[index].title);
           });
         });
         it("should only display movies with xyz in the title and no match", () => {
            let searchString = "xyz";
            cy.get("#filled-search").clear().type(searchString); // Enter xyz in text box
            cy.get(".MuiCardHeader-content").should(
              "have.length",0);
        
          });
          
       })
       describe("By movie genre", () => {
        it("should display movies with the specified genre only", () => {
           const selectedGenreId = 35;
           const selectedGenreText = "Comedy";
           const matchingMovies = filterByGenre(movies, selectedGenreId);
           cy.get("#genre-select").click();
           cy.get("li").contains(selectedGenreText).click();
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingMovies.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingMovies[index].title);
           });
         });
       });
       describe("By movie title and genre", () => {
        it("should display movies with the specified genre and title", () => {
            let searchString = "f";
            let matchingTitleMovies = filterByTitle(movies, searchString);
            const selectedGenreId = 35;
           const selectedGenreText = "Comedy";
           const matchingMovies = filterByGenre(matchingTitleMovies, selectedGenreId);
           cy.get("#filled-search").clear().type(searchString);
           cy.get("#genre-select").click();
           cy.get("li").contains(selectedGenreText).click();
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingMovies.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingMovies[index].title);
           });
         });
     });
   });
   describe("Playlist page", () => {
    
        it("should add it to the Playlist movies page", ()  => {
          cy.get("button[aria-label='add to playlist']").eq(0).click();
          cy.get("button[aria-label='add to playlist']").eq(1).click();
          cy.get("header").find(".MuiToolbar-root").find("button").eq(1).click();
          cy.get("li").eq(1).click();
          cy.get(".MuiCardHeader-content").contains(movies[0].title);
        });

});
});
