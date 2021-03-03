describe('CropDetails', () => {
    const baseUrl = 'http://localhost:3000';

    beforeEach(() => {
        cy
        .visit(baseUrl);
    });

    it.only('should navigate to a grow info component when the top right button is clicked', () => {
      cy
      .get('.header-button').click()
      cy
      .get('.grow-info-heading').contains('Gardening on the Front Range')
    })
});
