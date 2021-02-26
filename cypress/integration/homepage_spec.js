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
        .wait(500)
        .get('div[class=seed-packet]').should('be.visible')
        .get('div[class=seed-packet]:first').within(() => {
            cy
            .get('h3').contains('Shishito Pepper')
            .get('img').should('be.visible')
            // .get('img').should('have.attr', 'src', 'https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59f386eb33d94e000400000a.jpg?1509132007')
        })                                                                                                                                          
        
    })

    it('should display a number of seed packets within My Garden', () => {
        cy
        .get('.my-garden').within(() => {
            cy
            .get('div')
            .should(($div) => {
                expect($div).to.have.length(6)
            })

        })
        
    })
})


// Should test for the users changing and the difference of data being displayed
// Add intercept testing for the API fetch calls 