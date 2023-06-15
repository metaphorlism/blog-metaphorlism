/// <reference types="cypress" />

describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Desktop", () => {
    beforeEach(() => {
      cy.viewport("macbook-16");
    });

    it("Navigation show", () => {
      cy.get("body > div:nth-child(1) > div").should("be.visible");
    });

    it("Mobile-navigation not show", () => {
      cy.get("body > div:nth-child(3)").should("not.be.visible");
    });
  });

  describe("Mobile", () => {
    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    it("Top navigation not show", () => {
      cy.get("body > div:nth-child(1) > div > div:nth-child(2)").should(
        "not.be.visible"
      );
    });

    it("Mobile-navigation show", () => {
      cy.get("body > div:nth-child(3)").should("be.visible");
    });
  });
});
