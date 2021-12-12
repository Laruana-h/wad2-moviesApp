let movies;    // List of movies from TMDB

Cypress.Commands.add('errorType', (message) => {
    cy.get("#content").clear().type(message); 
    cy.get("button[type='submit']").eq(0).click();
    cy.get("p").contains("Review is too short");
  })
  Cypress.Commands.add('errorNameType', (message) => {
    cy.get("#author").clear().type(message); 
    cy.get("button[type='submit']").eq(0).click();
    cy.get("p").contains("Name is too long");
  })

describe("Playlist Page ", () => {
    before(() => {
        // Get movies from TMDB and store in movies variable.
        cy.request(
            `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
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
        cy.get("button[aria-label='add to playlist']").eq(0).click();
        cy.get("button[aria-label='add to playlist']").eq(1).click();
        cy.get("header").find(".MuiToolbar-root").find("button").eq(4).click();
        // cy.get("header").find(".MuiToolbar-root").find("button").eq(1).click();
        // cy.get("li").eq(6).click();

    });
    describe("Base test", () => {
        it("displays page header", () => {
            cy.get("header").find(".MuiToolbar-root").find("button").eq(4).click();
            cy.get("h3").contains("Must Watch Movies");
            cy.get("h1").contains("Filter the movies");
        });
    });
    describe("Remove from playlist", () => {
        it("should remove movies the Playlist movies page", () => {
            cy.get("button[aria-label='remove from playlist']").eq(0).click();
            cy.get("button[aria-label='remove from playlist']").eq(0).click();
            cy.get(".MuiCardHeader-content").should(
                "have.length", 0);
        });
    });
    describe("Write reviews", () => {
        it("should appears a prompt if you did not enter the author ", () => {
            cy.get("button[aria-label='write review']").eq(0).click();
            cy.url().should("include", `/reviews/form`);
            cy.get("#author").clear();
            cy.get("button[type='submit']").eq(0).click();
            cy.get("p").contains("Author name required");

        });
        it("should appears a prompt if you did enter the author name longer than 10 characters", () => {
            cy.get("button[aria-label='write review']").eq(0).click();
            cy.url().should("include", `/reviews/form`);
            // let searchString = "m";
            // cy.get("#author").clear().type(searchString); // Enter m in text box
            cy.errorNameType("rrrr777777777") 
        });
        it("should appears a prompt if you did enter the review less than 10 characters", () => {
            cy.get("button[aria-label='write review']").eq(0).click();
            cy.url().should("include", `/reviews/form`);
            let searchString = "m";
            cy.get("#author").clear().type(searchString); // Enter m in text box
            cy.errorType("rrrr") 
        });
        it("should enter author and contents which is longer than 10 character", () => {
            cy.get("button[aria-label='write review']").eq(0).click();
            cy.url().should("include", `/reviews/form`);
            let searchString = "m";
            let searchString1 = "The movie is very good";
            cy.get("#author").clear().type(searchString); // Enter m in text box
            cy.get("#content").clear().type(searchString1);
            cy.get("button[type='submit']").eq(0).click();
            cy.get("h4").contains("Thank you for submitting a review")
        });

    });
});