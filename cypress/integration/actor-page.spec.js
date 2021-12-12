let people;    // List of movies from TMDB

// Utility functions
const filterByTitle = (personList, string) =>
    personList.filter((m) => m.name.toLowerCase().search(string) !== -1);

describe("Popular person", () => {
    before(() => {
        // Get movies from TMDB and store in movies variable.
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")    // Take the body of HTTP response from TMDB
            .then((response) => {
                people = response.results
            })
    })
    beforeEach(() => {
        cy.visit("/actors")

    });

    describe("Base test", () => {
        it("displays page header", () => {
            cy.get("h3").contains("Discover Actors");
        });
    })
    describe("Filtering", () => {
        describe("By person name", () => {
            it("should display people with 'm ' in the name", () => {
                let searchString = "m";
                let matchingPeople = filterByTitle(people, searchString);
                cy.get("#filled-search").clear().type(searchString); // Enter m in text box
                cy.get(".MuiCardHeader-content").should(
                    "have.length",
                    matchingPeople.length
                );
                cy.get(".MuiCardHeader-content").each(($card, index) => {
                    cy.wrap($card).find("p").contains(matchingPeople[index].name);
                });
            })
            it("should display people with 'o' in the name", () => {
                const searchString = "o";
                const matchingPeople = filterByTitle(people, searchString);
                cy.get("#filled-search").clear().type(searchString); // Enter m in text box
                cy.get(".MuiCardHeader-content").should(
                    "have.length",
                    matchingPeople.length
                );
                cy.get(".MuiCardHeader-content").each(($card, index) => {
                    cy.wrap($card).find("p").contains(matchingPeople[index].name);
                });
            })
            it("should display movies with 'xyz' in the title", () => {
                const searchString = "xyz";
                cy.get("#filled-search").clear().type(searchString); // Enter xyz in text box
                cy.get(".MuiCardHeader-content").should(
                    "have.length",
                    0
                );
            })
        })

    });
    describe("Like Actors page", () => {

        it("should display an avatar at the top of the movie card and add it to the Favourite movies page", () => {
            cy.get("button[aria-label='add to liked']").eq(0).click();
            cy.get("button[aria-label='add to liked']").eq(1).click();
            cy.get(".MuiCardHeader-avatar");
            cy.get("header").find(".MuiToolbar-root").find("button").eq(1).click();
            cy.get("li").eq(6).click();
            cy.get(".MuiCardHeader-content").contains(people[0].name);
        });

    })

})
