describe('CropDetails', () => {
    const baseUrl = 'http://localhost:3000';

    beforeEach(() => {
        cy
        .visit(baseUrl);
    });

    it('should be able to navigate to the crop details view by clicking on a crop', () => {
      cy
      .get('a[id=5]').click()
      cy
      .get('button[class=back-button]').click()
      cy
      .get('a[id=25]').click()
    })

    it('CropDetails should contain a heading with the crop name', () => {
      cy
      .get('a[id=5]').click()
      cy
      .get('h1[class=crop-details-name]').contains('Carrots')
    })

    it('CropDetails component should have a description', () => {
      cy
      .get('a[id=25]').click()
      cy
      .get('p[class=crop-details-description]').contains('Radishes are fast-growing')
      cy
      .get('button[class=back-button]').click()
      cy
      .get('a[id=17]').click()
      cy
      .get('p[class=crop-details-description]').contains('Strawberries are a hybrid species')
    })

    it('CropDetails component should have a sun requirement', () => {
      cy
      .get('a[id=15]').click()
      cy
      .get('p[class=crop-sun-requirements]').contains('Full Sun')
      cy
      .get('button[class=back-button]').click()
      cy
      .get('a[id=19]').click()
      cy
      .get('p[class=crop-sun-requirements]').contains('Full Sun')
    })

    it.only('CropDetails component should have a sowing method', () => {
      cy
      .get('a[id=19]').click()
      cy
      .get('p[class=sowing-method]').contains('Transplant bare-root plant')
    })
    // it.only('CropDetails component should have a sun requirement', () => {
    //
    // })
    // it.only('CropDetails component should have a sun requirement', () => {
    //
    // })
    // it.only('CropDetails component should have a sun requirement', () => {
    //
    // })
});
