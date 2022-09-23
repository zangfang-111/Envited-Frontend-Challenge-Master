describe('Landing Page e2e test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show the create event button', () => {
    cy.get('[data-testid="create-event"]').should('exist');
  });

  it('should redirect to create event page when click the button', () => {
    cy.get('[data-testid="create-event"]').click();
    cy.url().should('include', '/create');
  });
});
