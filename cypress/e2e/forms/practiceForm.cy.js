describe("Practice Form", () => {
    beforeEach(() => {
        cy.visit("/automation-practice-form");
        cy.fixture("practiceForm").as("formData");
    });

    it("submits the form successfully (happy path)", function () {
        const {
            firstName,
            lastName,
            email,
            mobile,
            gender,
            birthYear,
            birthMonth,
            birthDay,
            subject,
            hobby,
            address,
            state,
            city,
            fixturesPath,
            pictureName,
        } = this.formData;

        // Personal information
        cy.get("#firstName").type(firstName).should("have.value", firstName);
        cy.get("#lastName").type(lastName).should("have.value", lastName);
        cy.get("#userEmail").type(email).should("have.value", email);

        // Gender selection
        cy.contains(gender).click();

        // Contact Details
        cy.get("#userNumber").type(mobile).should("have.value", mobile);

        // Date of birth
        cy.get("#dateOfBirthInput").click();
        cy.get(".react-datepicker__year-select").select(birthYear);
        cy.get(".react-datepicker__month-select").select(birthMonth);
        cy.get(".react-datepicker__day")
            .not(".react-datepicker__day--outside-month")
            .contains(birthDay)
            .click();

        // Subjects
        cy.get("#subjectsInput").type(`${subject}{enter}`);

        // Hobbies
        cy.contains(hobby).click();

        // Profile picture
        cy.get("#uploadPicture").selectFile(`${fixturesPath}/${pictureName}`);

        // Address
        cy.get("#currentAddress").type(address);

        // State and city
        cy.get("#state").click();
        cy.get("#react-select-3-input").type(`${state}{enter}`);

        cy.get("#city").click();
        cy.get("#react-select-4-input").type(`${city}{enter}`);

        cy.get("#submit").click();

        // Modal and assertions
        cy.get("#example-modal-sizes-title-lg").should("be.visible");

        cy.contains("td", "Student Name")
            .next()
            .should("contain", `${firstName} ${lastName}`);

        cy.contains("td", "Student Email").next().should("contain", email);

        cy.contains("td", "Gender").next().should("contain", gender);

        cy.contains("td", "Mobile").next().should("contain", mobile);

        cy.contains("td", "Date of Birth")
            .next()
            .should("contain", birthDay)
            .and("contain", birthMonth)
            .and("contain", birthYear);

        cy.contains("td", "Subjects").next().should("contain", subject);

        cy.contains("td", "Hobbies").next().should("contain", hobby);

        cy.contains("td", "Picture").next().should("contain", pictureName);

        cy.contains("td", "Address").next().should("contain", address);

        cy.contains("td", "State and City")
            .next()
            .should("contain", state)
            .and("contain", city);
    });
});
