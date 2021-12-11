let actorId =504; // The movie Venom
let actor;

let images;
describe("Actor Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((actorDetails) => {
        actor = actorDetails;
        return actorDetails.id;
      });
      cy.request(
        `https://api.themoviedb.org/3/person/${actorId}/images?api_key=${Cypress.env(
          "TMDB_KEY"
        )}`
      ) 
      .its("body")
      .then((actorImages) => {
        images = actorImages;
        return actorImages.id;
      });
  });
  beforeEach(() => {
    cy.visit(`/actors/${actor.id}`);
  });


  describe("Base tests", () => {
    it("should display actor's name in the page header", () => {
      cy.get("h3").contains(actor.name);
    });

    it("should display the actor's details", () => {
      cy.get("h3").contains("Biography");
      cy.get("h3").next().contains(actor.biography);
      cy.get("ul")
        .eq(1).contains(actor.birthday)
        // .within(() => {
        //   const genreChips = movie.genres.map((g) => g.name);
        //   genreChips.unshift("Genres");
        //   cy.get("span").each(($card, index) => {
        //     cy.wrap($card).contains(genreChips[index]);
        //   });
        // });
    });
    it("should display the movie's posters", () => {
     
      
      const imgsrc=images.profiles.map((i) => i.file_path);
      cy.get("img").each(($img, index)=> {
      cy.wrap($img).should('have.attr','src','https://image.tmdb.org/t/p/w500/'+imgsrc[index]);
      
    });

    });
  });
});
