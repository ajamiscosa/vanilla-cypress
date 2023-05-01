describe('Basic', () => {
  it('login', () => {
    cy.visit('http://localhost:8180/pc/PolicyCenter.do');
    cy.get('#Login-LoginScreen-LoginDV-username').type('su');
    cy.get('#Login-LoginScreen-LoginDV-password').type('gw');
    cy.get('#Login-LoginScreen-LoginDV-submit').click();
  });

  it('create account', () => {
    cy.visit('http://localhost:8180/pc/PolicyCenter.do');
    cy.get('#Login-LoginScreen-LoginDV-username').type('su');
    cy.get('#Login-LoginScreen-LoginDV-password').type('gw');
    cy.get('#Login-LoginScreen-LoginDV-submit').click();
    
    cy.get('#TabBar-AccountTab').click();
    //   .find('.gw-action--expand-button')
    //   .click();

    // cy.get('#TabBar-AccountTab-AccountTab_NewAccount').click();
    // cy.get('#NewAccount-NewAccountScreen-ttlBar').should('contain.text', 'Enter Account Information');

    // cy.findByLabelText("First name").type('John');
    // cy.findByLabelText("Last name").type('Smith');
    // cy.get('#NewAccount-NewAccountScreen-NewAccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search').click();

    // cy.get('#NewAccount-NewAccountScreen-NewAccountButton').click().get('#NewAccount-NewAccountScreen-NewAccountButton-NewAccount_Person').click();

    // cy.readFile('cypress/e2e/testdata/account.json').then((json) => {
        // cy.findByLabelText('Home Phone').type(json.homePhone);
        // cy.focused().tab();
        // cy.findByLabelText("Primary Email").type(json.primaryEmail);
        // cy.findByLabelText("Address 1").type(json.address1);
        // cy.findByLabelText("City").type(json.city);
        // cy.findByLabelText("State").find('select').select(json.state);
        // cy.findByLabelText("ZIP Code").type(json.zipCode);
        // cy.findByLabelText("Address Type").find('select').select(json.addressType);
        // cy.findByLabelText("Organization").type(json.organization);
        // cy.get('div[id$=-SelectOrganization').click();
        // cy.findByLabelText("Producer Code").find('select').select(json.producerCode);
        // cy.findByLabelText("Update").click();
    // });

    cy.get('[aria-label=Actions][role=button]').click();
    cy.get('div[id$=-AccountFileMenuActions_NewSubmission').click();
  });
});