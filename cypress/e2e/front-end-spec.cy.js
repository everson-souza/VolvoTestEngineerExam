let login, product, information

// Configure values
before(() => {
  cy.fixture('user').its('standard').then((data) => {
    login = data;
  })
  
  cy.fixture('products').its('sauceLabsBackpack').then((data) => {
    product = data;
  })

  cy.fixture('information').its('standard').then((data) => {
    information = data;
  })
})

describe('Front-end Test', () => {

  it('Add item to cart and finish purchase', () => {
    
    cy.visit('https://www.saucedemo.com/')    

    // Login
    cy.get('[data-test="username"]').type(login.username)
    cy.get('[data-test="password"]').type(login.password)
    cy.get('[data-test="login-button"]').click()

    //Add to Cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
    
    // Go to Cart page
    cy.get('#shopping_cart_container').click()

    // Assert correct item in cart
    cy.get('.inventory_item_name').should('have.text', product.name)
    cy.get('.inventory_item_desc').should('have.text', product.description)
    cy.get('.inventory_item_price').should('have.text', product.price)

    cy.get('[data-test="checkout"]').click()

    // Fill Checkout: Your Information
    cy.get('[data-test="firstName"]').type(information.firstName)
    cy.get('[data-test="lastName"]').type(information.lastName)
    cy.get('[data-test="postalCode"]').type(information.postalCode)

    cy.get('[data-test="continue"]').click()

    // Finish
    cy.get('[data-test="finish"]').click()

    // Verify URL
    cy.url().should('contain', 'checkout-complete')
  })
})