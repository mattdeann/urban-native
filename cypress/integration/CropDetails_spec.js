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

    it.only('CropDetails should contain a heading with the crop name', () => {
      cy
      .get('a[id=5]').click()
      cy
      .get('h1[class=crop-details-name]')
      .contains('Carrots')
    })

    
});
