describe('CropDetails', () => {
    const baseUrl = 'http://localhost:3000';

    beforeEach(() => {
        cy
        .visit(baseUrl);
    });

    it.only('should be able to navigate to the crop details view by clicking on a crop', () => {
      cy
      .get('a[id=5]').click()
      cy
      .get('button[class=back-button]').click()
      cy
      .get('a[id=25]').click()
    })

    
});
