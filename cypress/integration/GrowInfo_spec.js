describe('CropDetails', () => {
    const baseUrl = 'http://localhost:3000';

    beforeEach(() => {
        cy
        .visit(baseUrl)
        cy
        .get('.header-button').click()
    });

    it.only('should navigate to a grow info component when the top right button is clicked', () => {
      cy
      .get('.grow-info-heading').contains('Gardening on the Front Range')
    })

    it.only('should contain a paragraph section with general grow info', () => {
      cy
      .get('.colorado-grow-info').contains('Gardening in Colorado can be challenging')
    })
});
