describe('API Endpoint Tests', () => {
    it('should return Hello Home Page', () => {
      cy.request('/').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.equal({ success: true, data: { message: "Hello Home Page" } });
      });
    });
  
    it('should return Hello About Us Page', () => {
      cy.request('/about').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.equal({ success: true, data: { message: "Hello About Us Page" } });
      });
    });
  });
  