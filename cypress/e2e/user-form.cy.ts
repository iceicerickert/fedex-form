
const fillForm = () => {
  cy.get('#firstName').type('Rick')
  cy.get('#surnamePreposition').type('de')
  cy.get('#lastName').type('Hoop')
  cy.get('#email').type('rick@spero.solutions')
  cy.get('#password').type('GoedWachtwoord')
};

describe('Form', () => {
  it('Fill the form', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'User form')
    cy.get('#submitBtn').should('be.disabled')
    fillForm();
    cy.get('#submitBtn').should('be.enabled')
  })
  it('firstName is required validation', () => {
    cy.visit('/');
    cy.get('#firstName').type('something').clear()
    cy.contains('First name is required').should('be.visible');
  })
  it('lastName is required validation', () => {
    cy.visit('/');
    cy.get('#lastName').type('something').clear()
    cy.contains('Surname is required').should('be.visible');
  })
  it('email is required validation', () => {
    cy.visit('/');
    cy.get('#email').type('something').clear()
    cy.contains('Email address is required').should('be.visible');
  })
  it('email is valid validation', () => {
    cy.visit('/');
    cy.get('#email').type('invalid@email,com')
    cy.contains('Email address is not valid (#email-validator)').should('be.visible');
  })
  it('password is required validation', () => {
    cy.visit('/');
    cy.get('#password').type('something').clear()
    cy.contains('Password is required').should('be.visible');
  })
  it('password min-length of 8 chars validation', () => {
    cy.visit('/');
    cy.get('#password').type('1234567')
    cy.contains('Password should consist out of 8 characters minimum').should('be.visible');
    cy.get('#password').type('12345678')
    cy.contains('Password should consist out of 8 characters minimum').should('not.exist');
  })
  it('password uppercase and lowercase chars validation', () => {
    cy.visit('/');
    cy.get('#password').type('lowercaseonly')
    cy.contains('Password should contain at least 1 uppercase and 1 lowercase character').should('be.visible');
    cy.get('#password').type('lowercaseUPPERCASE')
    cy.contains('Password should contain at least 1 uppercase and 1 lowercase character').should('not.exist');
  })
  it('password should not contain first nor last name validation', () => {
    cy.visit('/');
    cy.get('#firstName').type('Rick')
    cy.get('#surnamePreposition').type('de')
    cy.get('#lastName').type('Hoop')
    cy.get('#password').type('rick de hoop')
    cy.contains('Password should not contain the first name nor last name').should('be.visible');
    cy.get('#password').clear().type('nick de groot')
    cy.contains('Password should not contain the first name nor last name').should('not.exist');
  })
})

describe('API communication', () => {

  it('Check if request is built correct', () => {
    cy.intercept('POST', 'https://demo-api.now.sh/users', req => {
      req.reply({
        "_id": "1196741d-9c58-4e6f-aad2-270e09b548af",
        "email": "rick@spero.solutions",
        "firstName": "Rick",
        "lastName": "de Hoop"
      });
    }).as('new-user');

    cy.visit('/');
    fillForm();
    cy.get('#submitBtn').click()
    cy.get('@new-user') // yields the same interception object
      .its('request.body')
      .should(
        'deep.equal',
        {firstName: 'Rick', lastName: 'de Hoop', email: 'rick@spero.solutions'}
      )
  })

  it('Check results being shown correct on page', () => {
    cy.intercept('POST', 'https://demo-api.now.sh/users', req => {
      req.reply({
        "_id": "1196741d-9c58-4e6f-aad2-270e09b548af",
        "email": "rick@spero.solutions",
        "firstName": "Rick",
        "lastName": "de Hoop"
      });
    }).as('new-user');
    cy.visit('/');
    fillForm();
    cy.get('#submitBtn').click()
    cy.get('#submittedUserId').should('have.text', '1196741d-9c58-4e6f-aad2-270e09b548af')
    cy.get('#submittedUserFirstName').should('have.text', 'Rick')
    cy.get('#submittedUserLastName').should('have.text', 'de Hoop')
    cy.get('#submittedUserEmail').should('have.text', 'rick@spero.solutions')
  })

})
