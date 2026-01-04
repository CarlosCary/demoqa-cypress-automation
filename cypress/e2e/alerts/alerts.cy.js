describe('Alerts', () => {

    beforeEach(() => {
        cy.visit('/alerts');
    });

    it('Handles simple alert', () => {
        cy.on('window:alert', (text) => {
            expect(text).to.eq('You clicked a button');
        });

        cy.get('#alertButton').click();
    });

    it('Handles timed alert', () => {
        cy.on('window:alert', (text) => {
            expect(text).to.eq('This alert appeared after 5 seconds');
        });

        cy.get('#timerAlertButton').click();
    });

    it('Handles confirm alert', () => {
        cy.on('window:confirm', (text) => {
            expect(text).to.eq('Do you confirm action?');
            return true;
        });

        cy.get('#confirmButton').click();

        cy.get('#confirmResult')
            .should('be.visible')
            .and('contain', 'You selected Ok');
    });

    it('Handles cancel alert', () => {
        cy.on('window:confirm', (text) => {
            expect(text).to.eq('Do you confirm action?');
            return false;
        });

        cy.get('#confirmButton').click();

        cy.get('#confirmResult')
            .should('be.visible')
            .and('contain', 'You selected Cancel');
    });

    it('Handles prompt alert', () => {
        const inputText = 'Carlos';

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(inputText);
        });

        cy.get('#promtButton').click();

        cy.get('#promptResult')
            .should('be.visible')
            .and('contain', inputText);
    });
});