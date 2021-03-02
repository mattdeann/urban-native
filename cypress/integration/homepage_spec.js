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
        .get('h1[class=app-name]').contains('Urban Native')
    })

    it('should display a heading that welcomes the user', () => {
        cy
        .get('p[class=welcome]').contains('Welcome')
    })

    it('should display a button for Colorado gardening information', () => {
        cy
        .get('button[class=header-button]').contains('REGIONAL GROWING INFO')
    })

    it('should display a section heading for My Garden', () => {
        cy
        .get('h2[class=my-garden-header]').contains('My Garden')
    })

    it(`should display a section heading for Farmer's Market`, () => {
        cy
        .get('h2[class=all-crops-heading]').contains(`Farmer's Market`)
    })

    it('should display a seed packet within the My Garden section', () => {
        cy
        .wait(500)
        .get('div[class=seed-packet]').should('be.visible')
        .get('a[id=10]').contains('Shishito Pepper')
    })

    it(`should display a 30 seed packets within Farmer's Market`, () => {
        cy
        .get('main').within(() => {
            cy
            .get('div')
            .should(($div) => {
                expect($div).to.have.length(30)
            })
        })
    })
});
