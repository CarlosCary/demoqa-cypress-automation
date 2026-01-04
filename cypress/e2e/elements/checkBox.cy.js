describe('Check Boxes', () => {

    beforeEach(() => {
        cy.visit('/checkbox');
    });

    it('selects Home checkbox and validates key selections', () => {
        // Expand all nodes
        cy.get('button[title="Expand all"]').click();

        // Select Home
        cy.contains('label', 'Home').click();

        // Validate result contains key expected items
        cy.get('#result')
            .should('be.visible')
            .and('contain', 'home')
            .and('contain', 'desktop')
            .and('contain', 'documents')
            .and('contain', 'downloads');
    });

    it('selects a nested checkbox and validates partial selection', () => {
        // Expand all nodes
        cy.get('button[title="Expand all"]').click();

        // Select notes 
        cy.contains('label', 'Notes').click();

        // Validate Notes is selected and Commands is not selected
        cy.get('#result')
            .should('be.visible')
            .and('contain', 'notes')
            .and('not.contain', 'commands');
    });
});