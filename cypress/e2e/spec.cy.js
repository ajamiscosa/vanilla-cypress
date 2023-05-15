describe('Basic', () => {
    it('login', () => {
        cy.visit('http://localhost:8180/pc/PolicyCenter.do');
        cy.get('#Login-LoginScreen-LoginDV-username').type('su');
        cy.get('#Login-LoginScreen-LoginDV-password').type('gw');
        cy.get('#Login-LoginScreen-LoginDV-submit').click();
    });

    it('create account', () => {
        cy.visit('http://localhost:8180/pc/PolicyCenter.do');

        cy.readFile('cypress/e2e/testdata/account.json').then((data) => {
            cy.get('#Login-LoginScreen-LoginDV-username').type('su');
            cy.get('#Login-LoginScreen-LoginDV-password').type('gw');
            cy.get('#Login-LoginScreen-LoginDV-submit').click();

            cy.get('#TabBar-AccountTab').click();
        // .find('.gw-action--expand-button')
        // .click();

        // cy.get('#TabBar-AccountTab-AccountTab_NewAccount').click();
        // cy.get('#NewAccount-NewAccountScreen-ttlBar').should('contain.text', 'Enter Account Information');

        // cy.findByLabelText("First name").type('John');
        // cy.findByLabelText("Last name").type('Smith');
        // cy.get('#NewAccount-NewAccountScreen-NewAccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search').click();

        //
        // cy.get('#NewAccount-NewAccountScreen-NewAccountButton')
        //     .click()
        //     .get('#NewAccount-NewAccountScreen-NewAccountButton-NewAccount_Person')
        //         .click();

        // cy.readFile('cypress/e2e/testdata/account.json').then((data) => {
        // cy.findByLabelText('Home Phone').type(data.homePhone);
        // cy.focused().tab();
        // cy.findByLabelText("Primary Email").type(data.primaryEmail);
        // cy.findByLabelText("Address 1").type(data.address1);
        // cy.findByLabelText("City").type(data.city);
        // cy.findByLabelText("State").find('select').select(data.state);
        // cy.findByLabelText("ZIP Code").type(data.zipCode);
        // cy.findByLabelText("Address Type").find('select').select(data.addressType);
        // cy.findByLabelText("Organization").type(data.organization);
        // cy.get('div[id$=-SelectOrganization').click();
        // cy.findByLabelText("Producer Code").find('select').select(data.producerCode);
        // cy.findByLabelText("Update").click();
        // });

            cy.get('[aria-label=Actions][role=button]').click();
            cy.get('div[id$=-AccountFileMenuActions_NewSubmission').click();

            cy.get('div[id$=-ProductSelectionLV]')
                .contains('td', 'Personal Auto')
                .siblings()
                .find('div[id$="-addSubmission"]')
                .click();

            cy.findByLabelText('Offering Selection').find('select').select('Standard Program');
            cy.findByLabelText("Next").click();
            cy.findByLabelText("Next").click();
            cy.findByLabelText("Next").click();
            cy.get('div[id$=-AddDriver]').click();
            cy.get('div[id$=-AddExistingContact] > [aria-haspopup="true"]').realHover('mouse');
            cy.get('div[id$=-AddExistingContact-0-UnassignedDriver]').click();

            cy.findByLabelText('Date of Birth').clear().type(data.dateOfBirth);
            cy.findByLabelText('License #').clear().type(data.licenseNo);
            cy.findByLabelText('License State').find('select').select(data.licenseState);

            cy.get('div[id$=-RolesCardTab]').click();
            cy.findByLabelText('Year First Licensed').clear().type(data.yearFirstLicensed);
            cy.get('div[id$=-PolicyDriverNumberOfAccidents]').find('select').select("0");
            cy.get('div[id$=-DriverNumberOfAccidents]').find('select').select("0");
            cy.get('div[id$=-PolicyDriverNumberOfViolations]').find('select').select("0");
            cy.get('div[id$=-DriverNumberOfViolations]').find('select').select("0");
            cy.findByLabelText("Next").click();

            // Vehicles

            for(let i=0;i<data.vehicle.length;i++) {
                cy.findByLabelText("Create Vehicle").click();
                cy.findByLabelText("VIN").type(data.vehicle[i].vin);
                cy.findByLabelText('License State').find('select').select(data.vehicle[i].licenseState);
                cy.findByLabelText("Cost New").find('input').type(data.vehicle[i].costNew);
                cy.get('div[id$=-AddDriver]').click();
                cy.get('div[id$=-Driver]').click();
            }
            cy.findByLabelText("Next").click();
            cy.findByLabelText("Next").click();
            cy.get('div[id$=-Quote]').click();
            cy.findByLabelText("Next").click();
            cy.findByLabelText("Next").click();
            cy.findByLabelText("Bind Options").click();
            cy.findByLabelText("Issue Policy").click();
            cy.get('div[id$=-ViewPolicy]').click();

            cy.get('div[id$=-StatusAndExpDate]').should('contain.text', 'In Force');
        });
    });
});
