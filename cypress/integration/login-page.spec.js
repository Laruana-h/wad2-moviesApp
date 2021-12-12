let movies;    // List of movies from TMDB

// Utility functions
// const filterByTitle = (movieList, string) =>
//   movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

// const filterByGenre = (movieList, genreId) =>
//   movieList.filter((m) => m.genre_ids.includes(genreId));

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
    cy.visit("/login")

  });
  
    describe("Base test", () => {
      it("displays page header", () => {
        // cy.get("header").find(".MuiToolbar-root").find("button").eq(5).click();
        // cy.url().should("include", `/login`);
        cy.get("button").eq(6).click();
        // cy.get("header").find(".MuiToolbar-root").contains("login");
        // cy.get("header").find(".MuiToolbar-root").find("button");
      });
    })

    describe("Base test", () => {
      it("displays page header", () => {
        // cy.get("header").find(".MuiToolbar-root").find("button").eq(5).click();
        // cy.url().should("include", `/login`);
        let searchString = "Lauranaaaaa";
        let searchString1 = "hj730726";
            cy.get("#username").type(searchString); // Enter m in text box
            cy.get("#password").type(searchString); // Enter m in text box
      
        // cy.get("button").eq(6).click();
        // cy.get("header").find(".MuiToolbar-root").contains("login");
        // cy.get("header").find(".MuiToolbar-root").find("button");
      });
    })

    // describe("Login test", () => {
    //     it("displays page header", () => {
    //       cy.get("header").find(".MuiToolbar-root").find("button").eq(5).click();
    //       cy.url().should("include", `/login`);
    //       cy.get("button").eq(4);
      
    //     });
    //   })


});
