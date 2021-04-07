describe('Thermostat Interactions', function() {
    it('shows 20 on the page', function(){
        cy.visit('./thermostat.html')
        cy.contains(20)

    })
})