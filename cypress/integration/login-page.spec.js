describe("Login Page ", () => {

  beforeEach(() => {
    cy.visit("/login")

  });
  
    describe("login test", () => {
      it("displays login Success", () => {
        // cy.get("header").find(".MuiToolbar-root").find("button").eq(5).click();
        // cy.url().should("include", `/login`);
        let searchString = "Lauranaaaaa";
        let searchString1 = "hj730726";
            cy.get("#username").type(searchString); // Enter m in text box
            cy.get("#password").type(searchString1); // Enter m in text box
            cy.get("button").eq(6).click();

        
      });
      it("displays error", () => {
        // cy.get("header").find(".MuiToolbar-root").find("button").eq(5).click();
        // cy.url().should("include", `/login`);
        let searchString = "Lauranaaaaa1";
        let searchString1 = "hj730726";
            cy.get("#username").clear().type(searchString); // Enter m in text box
            cy.get("#password").clear().type(searchString1); // Enter m in text box
            cy.get("button").eq(6).click();

        // cy.get("header").find(".MuiToolbar-root").contains("login");
        // cy.get("header").find(".MuiToolbar-root").find("button");
      });
      
    })

    


});
