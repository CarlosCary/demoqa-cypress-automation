describe('Radio Buttons', () => {

    beforeEach(() => {
        cy.visit('/radio-button');
    });

    it('Selects Yes radio button', () => {
        // Action
        cy.contains('label', 'Yes').click();

        // Assertion
        cy.get('.text-success')
            .should('be.visible')
            .and('contain', 'Impressive');
    });

    it('Verifies No radio button is disabled', () => {
        // Assertion only
        cy.get('#noRadio').should('be.disabled');
    });
}); 