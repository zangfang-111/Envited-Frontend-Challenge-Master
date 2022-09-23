describe('Event page e2e test', () => {
  it('should show the event page correctly', () => {
    cy.visit('/event');
    cy.get('.ev-layout__title').should('exist');
  });
});
