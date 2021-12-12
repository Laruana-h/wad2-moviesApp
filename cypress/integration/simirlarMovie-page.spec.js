let movieId = 335983; // The movie Venom
let movie;
let similar;
let images;
describe("Similar Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((movieDetails) => {
        movie = movieDetails;
        return movieDetails.id;
      });
      cy.request(
        `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${Cypress.env(
          "TMDB_KEY"
        )}`
      ) 
      .its("body")
      .then((movieImages) => {
        images = movieImages;
        return movieImages.id;
      });
      cy.request(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${Cypress.env(
          "TMDB_KEY"
        )}`
      ) 
      .its("body")
      .then((similarMovies) => {
        similar = similarMovies;
        return similarMovies.id;
      });
  });
  beforeEach(() => {
    cy.visit(`/movies/${movie.id}`);
    cy.get("button[id='similar']").click();
  });


  describe("Base tests", () => {
    it("should display movie title in the page header", () => {
      cy.get("h3").contains(movie.title);
    });
    it("should display the movie's details", () => {
      cy.get("h3").contains("Overview");
      cy.get("h3").next().contains(movie.overview);
      cy.get("ul")
        .eq(1)
        .within(() => {
          const genreChips = movie.genres.map((g) => g.name);
          genreChips.unshift("Genres");
          cy.get("span").each(($card, index) => {
            cy.wrap($card).contains(genreChips[index]);
          });
        });
    });
    it("should display the movie's posters", () => {
      const imgsrc=images.posters.map((i) => i.file_path);
      cy.get("img").each(($img, index)=> {
      cy.wrap($img).should('have.attr','src','https://image.tmdb.org/t/p/w500/'+imgsrc[index]);
      
    });

    });
  });
  describe("Simiar table page", () => {
    it("should display an avatar at the top of the movie card and add it to the Favourite movies page", () => {
        cy.get("th").eq(0).contains("Name");
        cy.get("th").eq(1).contains("Overview");
        cy.get("th").eq(2).contains("More");
        // cy.get("button[id='hide']").click();
        // cy.url().should("not.include", `/similar`);
        // const genreChips = similar.overview.map((g) => g.name);
        // cy.get("td").each(($card, index) => {
        //   cy.wrap($card).contains(genreChips[index]);
        // });
        // cy.get('tr').find(`td:contains(${similar.overview})`);
    });
    it("should hide the similar information", () => {
      cy.get("button[id='hide']").click();
      cy.url().should("not.include", `/similar`);
        // cy.get("tr").eq(0).contains(`${similar[0].id}`);
        // cy.url().should("include", `/movies/${similar[0].id}`);

    });

})
});
