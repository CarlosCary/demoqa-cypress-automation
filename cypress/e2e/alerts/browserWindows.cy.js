describe('Browser Windows', () => {

    beforeEach(() => {
        cy.on('window:before:load', (win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        cy.visit('/browser-windows');
    });

    it('Validate new tab and validates target URL', () => {

        cy.get('#tabButton').click();

        cy.get('@windowOpen').should('have.been.calledOnce');

        cy.get('@windowOpen').then((stub) => {
            const [url] = stub.getCall(0).args;
            expect(url).to.match(/\/sample$/);
        });

        // Content validation in the new tab
        cy.visit('/sample');
        cy.contains('This is a sample page').should('be.visible');
    });

    it('Validate new window and validates target URL', () => {
        cy.get('#windowButton').click();

        cy.get('@windowOpen').should('have.been.calledOnce');

        cy.get('@windowOpen').then((stub) => {
            const [url] = stub.getCall(0).args;
            expect(url).to.match(/\/sample$/);
        });

        // Content validation in the new tab
        cy.visit('/sample');
        cy.contains('This is a sample page').should('be.visible');
    });

    it('Validate new window message and validates target URL', () => {
        cy.get('#messageWindowButton').click();

        cy.get('@windowOpen').should('have.been.calledOnce');

        cy.get('@windowOpen').then((stub) => {
            const [url] = stub.getCall(0).args;
            expect(url).to.eq('');
        });
    });
});