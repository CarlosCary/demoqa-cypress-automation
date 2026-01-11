# QA Automation Challenge – Summary Report
## Approach & Framework Selection

The goal of this challenge was to design and execute a clear and maintainable automated test suite for the DemoQA application. Cypress was selected due to its strong support for end-to-end testing of modern web applications, built in assertions, and deterministic execution model.

The test suite focuses on validating core user interactions using readable assertions and Cypress supported techniques, avoiding unsupported workarounds in order to maintain stability and reliability.
 
## Execution & Analysis
The automated test suite was executed against the DemoQA application covering the following areas:
- Practice Form
- Radio Buttons
- Check Boxes
- Alerts (simple, timed, confirm, cancel, prompt)
- Browser Windows (new tab, new window, new window message)
## Execution summary:
- Total test cases: 14
- Passed: 14
- Failed: 0
- Execution time: ~53 seconds

All tests executed successfully. Results were captured using Mochawesome, generating an HTML report that provides visibility into execution status and timing.
Browser window scenarios were validated by intercepting window.open calls and validating target behavior when applicable, following Cypress supported patterns and avoiding multi-window handling limitations.

## Defect Reporting
No blocking defects were identified during execution.

A sample defect report is included to demonstrate defect documentation and analysis:

### Title:
Practice Form allows submission with missing mandatory user information

### Environment:
- URL: https://demoqa.com/automation-practice-form
- Browser: Google Chrome

### Steps to Reproduce:
1.	Navigate to https://demoqa.com/automation-practice-form.
2.	Leave the First Name field empty.
3.	Leave the Last Name field empty.
4.	Do not select any option for Gender.
5.	Click on the Submit button.

### Expected Result:
The form submission should be blocked and validation messages should be displayed for First Name, Last Name, and Gender, indicating that these fields are mandatory.

### Actual Result:
The form allows submission without enforcing validation for mandatory fields.

### Severity:
High

### Justification:
This issue allows incomplete and invalid user data to be submitted, compromising data integrity and potentially affecting downstream systems, reporting, and user management processes.
 
## Recommendations for Improvement
- Integrate the test suite into a CI pipeline for automated execution and reporting.
- Consider refactoring selectors into POM (or a dedicated locator layer) as the test suite grows: 
  Given the current limited scope of the project, defining selectors directly within spec files is a reasonable and pragmatic choice. Introducing a Page Object Model at this stage could add unnecessary abstraction. However, as the number of test cases and shared UI interactions increases, migrating selectors and reusable actions into page object modules would improve maintainability, reduce duplication, and support long term scalability.
- Add test categorization (e.g., smoke vs. regression) to optimize execution time.
- Expand coverage with negative and edge-case scenarios.
- Some browser window scenarios (such as the New Window Message feature) are not fully testable using Cypress due to the absence of a dedicated URL or accessible DOM content. Use standard anchor elements (href) for navigation instead of relying on window.open.

