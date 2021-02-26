describe('Homepage', () => {
    const baseUrl = 'http://localhost:3000';

    it('should be able to visit the base url and see the homepage', () => {
        cy
        .visit(baseUrl)
        .location().should((loc) => {
            expect(loc.host).to.eq('localhost:3000')
            expect(loc.origin).to.eq(baseUrl)
        })
    });

    beforeEach(() => {
        cy
        .visit(baseUrl);
    });

    it('should display a heading with the name of the app', () => {
        cy
        .get('h1').contains('Urban Native')
    })

    it('should display a heading that welcomes the user', () => {
        cy
        .get('h2').contains('Welcome')
    })

    it('should display a heading that welcomes the user', () => {
        cy
        .get('h2').contains('Welcome')
    })

    it('should display a button within the header for Colorado gardening information', () => {
        cy
        .get('button[class=header-button]').contains('COLORADO INFO')
    })

    it('should display a section heading for My Garden', () => {
        cy
        .get('h1[class=my-garden-header]').contains('My Garden')
    })

    it('should display a seed packet within the My Garden section', () => {
        cy
        .get('div[class=seed-packet]').should('be.visible')
    })
})


// SHould test for the users changing and the difference of data being displayed