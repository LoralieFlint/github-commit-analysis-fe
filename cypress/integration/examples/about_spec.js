describe('Cypress Test for About Page on Heroku', () => {
    it('tests the GitStats About Page is running on Heroku', () => {
        cy.visit('https://commit-analysis.herokuapp.com/about')
    });
    it('finds content Product Manager on the About Page', () => {
        cy.visit('https://commit-analysis.herokuapp.com/about')
        cy.contains('Product Manager')
    });
    it('finds content Engineering Manager on the About Page', () => {
        cy.visit('https://commit-analysis.herokuapp.com/about')
        cy.contains('Engineering Manager')
    });
    it('finds content Project Lead on the About Page', () => {
        cy.visit('https://commit-analysis.herokuapp.com/about')
        cy.contains('Project Lead')
    });
    it('finds content Lambda School Student on the About Page', () => {
        cy.visit('https://commit-analysis.herokuapp.com/about')
        cy.contains('Lambda School student')
    });
    it('tests the home link on the about page', () => {
        cy.visit('https://commit-analysis.herokuapp.com/about')
        cy.contains('Home').click()
    });
    it('tests the about link on the about page', () => {
        cy.visit('https://commit-analysis.herokuapp.com/about')
        cy.contains('About').click()
    });
    it('tests whether the Home link navigates to the Home Page and sees Objective Approach', async () => {
        cy.visit('https://commit-analysis.herokuapp.com/about')
        cy.contains('Home').click()
        await cy.url().should('include', 'Objective Approach')
    });
    it('tests the GitHub profile button on the about page', async () => {
        cy.visit('https://commit-analysis.herokuapp.com/about')
        await cy.get('[class^="fa fa-github cat"]').click({ multiple: true })
    });
    it('tests the linkedIn profile button on the about page', async () => {
        cy.visit('https://commit-analysis.herokuapp.com/about')
        await cy.get('[class^="fa fa-linkedin LI"]').click({ multiple: true })
    });
    it('tests the email profile button on the about page', async () => {
        cy.visit('https://commit-analysis.herokuapp.com/about')
        await cy.get('[class^="fa fa-envelope-square LI"]').click({ multiple: true })
    });
    it('tests the "Login with Github" button on the about page', async () => {
        cy.visit('https://commit-analysis.herokuapp.com/about')
        cy.contains('Login with GitHub').click()
        await cy.url('https://commit-analysis-be.herokuapp.com/auth/github/').should('include', 'Authorize')
    });
});