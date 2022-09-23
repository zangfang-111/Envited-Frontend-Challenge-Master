describe('Create event page e2e test', () => {
  it('should show create event page', () => {
    cy.visit('/create');
    cy.get('[data-testid="page-title"]').should('exist');
    cy.get('.create-event__state-fiels').should('exist');
    cy.get('.create-event__upload-fields').should('exist');
    cy.get('[data-testid="create-event"]').should('exist');
  });

  it('should show error status when click the butto without fill', () => {
    cy.get('[data-testid="create-event"]').click();
    cy.get('.create-event__state-fiels input:first-child.error').should('exist');

    cy.get('.create-event__cancel').click();
    cy.url().should('include', '/');
  });

  it('should show the cancel modal when click the cancel while progressing fill the form', () => {
    cy.visit('/create');

    cy.get('input[name=eventName]').type('Birthday Event');

    cy.get('.create-event__cancel').click();
    cy.get('.event-cancel-modal').should('exist');
    cy.get('.btn-secondary').click();
  });

  it('should redirect to event page when click the next button with filled form', () => {
    cy.get('input[name=eventName]').type('Test Event Name');
    cy.get('input[name=hostName]').type('Test Host Name');
    cy.get('input[name=startTime]').type('Test Start Date');
    cy.get('input[name=endTime]').type('Test End Date');
    cy.get('input[name=street]').type('Test Street');
    cy.get('input[name=suburb]').type('Test Suburb');
    cy.get('input[name=state]').type('Test State');
    cy.get('input[name=postcode]').type('Test Post Code');

    cy.get('[data-testid="create-event"]').click();
    cy.url().should('include', '/event');
  });
});
