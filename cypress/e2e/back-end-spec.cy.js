describe('Back-end Test', () => {
  
  it('API testing - /api/v1/activities', () => {
    cy.request({
			url: 'https://fakerestapi.azurewebsites.net/api/v1/activities',
			method: 'GET',
			failOnStatusCode: true,
		
    }).then((response) => {
			if (response.isOkStatusCode){              
        //Assert response status code
        expect(response.status).to.equal(200)
       
        // Assert id field values
        response.body.forEach(data => {
          expect(data.id).to.have.value
        })
      }
		})
  })

})