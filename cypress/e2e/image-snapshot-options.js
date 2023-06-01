describe('image snapshot spec', () => {
	it('take snapshot of a clip', () => {
		cy.visit('https://demo.nopcommerce.com/');
		cy.matchImageSnapshot({
			clip: {
				x: 95,
				y: 247,
				width: 511,
				height: 213, // crop off the bottom half of the snapshot
			},
		});
	});

	// it('take snapshot of an element', () => {
	// 	cy.visit('cypress/e2e/html/index.html');
	// 	cy.get('#DivBody').matchImageSnapshot();
	// });
});
