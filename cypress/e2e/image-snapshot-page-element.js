describe('template spec', () => {
	it('take snapshot of page', () => {
		cy.visit('https://example.cypress.io');
		cy.matchImageSnapshot();
	});

	it('take snapshot of an element', () => {
		cy.visit('cypress/e2e/html/index.html');
		cy.get('#DivBody').matchImageSnapshot();
	});
});
