it("e2e testing for checkout", () => {
    cy.visit("/");
    cy.findByText("Sign in").should("exist")
    cy.findByTestId("login-btn").click();
    cy.findByText("Product Gallery").should("exist")
    cy.findAllByText("Add to Cart").should("have.length", 13)
    cy.findByTestId("btn-apple").click();
    cy.findByTestId("btn-orange").click();
    cy.findByTestId("btn-apple").click();
    cy.findByText("Cart Items: 3").should("exist")
    cy.findByTestId("search-input").type("l{enter}");
    cy.findAllByText("Add to Cart").should("have.length", 2)
    cy.findByTestId("search-input").type("e{enter}");
    cy.findAllByText("Add to Cart").should("have.length", 1)
    cy.findAllByText("Add to Cart").click()
    cy.findByText("Cart Items: 4").should("exist")
    cy.findAllByText("View Cart").click()
    cy.url().should("contain", "cart");
    cy.findByText("apple").should("exist")
    cy.findByText("orange").should("exist")
    cy.findByText("lemon").should("exist")
    cy.findByTestId('apple-number').type('{downarrow}').trigger('change')
    cy.findByText("Cart Items: 3").should("exist")
    cy.findByTestId('orange-number').type('{uparrow}').trigger('change')
    cy.findByText("Cart Items: 4").should("exist")
    cy.findAllByText("Checkout").click()
    cy.url().should("contain", "checkout");
    cy.findByTestId("total-label").should("contain", 21.36)
    cy.findAllByText("Place Order").click()
    cy.findByText("Cart is Empty!").should("exist")
    cy.findAllByText("View Products").click()
    cy.findByText("Product Gallery").should("exist")
    cy.findAllByText("Logout").click()
    cy.findByText("Sign in").should("exist")
})