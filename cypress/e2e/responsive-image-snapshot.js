const sizes = [
	['iphone-6', 'landscape'],
	'iphone-6',
	'ipad-2',
	['ipad-2', 'landscape'],
	[1920, 1080],
];

const pages = ['', 'computers', 'electronics', 'apparel', 'digital-downloads'];

describe('responsive image snapshot spec', () => {
	sizes.forEach(size => {
		pages.forEach(page => {
			it(`Should match previous screenshot '${page} Page' When '${size}' resolution`, () => {
				cy.setResolution(size);
				cy.visit(Cypress.env('APPURL') + `/${page}`);
				cy.matchImageSnapshot();
			});
		});
	});
});
