describe("Practice Form", () => {

    beforeEach(() => {
        cy.visit('/automation-practice-form');
    });

    it("submits the form successfully (happy path)", () => {
        // Test data
        const firstName = "Carlos";
        const lastName = "Cary";
        const email = "carlos@test.com";
        const mobile = 1234567890;
        
        // Personal information
        cy.get("#firstName").type(firstName).should('have.value', firstName);
        cy.get("#lastName").type(lastName).should('have.value', lastName);
        cy.get("#userEmail").type(email).should('have.value', email);
        
        // Gender selection
        cy.contains("Male").click();
        
        // Contact Details
        cy.get("#userNumber").type(mobile).should('have.value', mobile);
        
        // Date of birth
        cy.get("#dateOfBirthInput").click();
        cy.get(".react-datepicker__year-select").select("1995");
        cy.get(".react-datepicker__month-select").select("June");
        cy.get(".react-datepicker__day").not('.react-datepicker__day--outside-month').contains("14").click();
        cy.get("#dateOfBirthInput").should('not.have.value', '');
    });

});
