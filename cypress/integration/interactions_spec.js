describe('Thermostat Interactions', function() {
    beforeEach(function() {
        cy.visit('./thermostat.html')
    })
    it('shows 20 on the page', function(){
        cy.contains(20)
    })

    it('shows 21 after up is pressed', function(){
        cy.get('#up').click()
        cy.contains(21)
    })

    it('shows 22 after up is pressed twice', function(){
        cy.get('#up').click()
        cy.get('#up').click()
        cy.contains(22)
    })

    it('shows 18 after down is pressed twice', function(){
        cy.get('#down').click()
        cy.get('#down').click()
        cy.contains(18)
    })

    it('shows 19 after down is pressed once', function(){
        cy.get('#down').click()
        cy.contains(19)
    })

    it('shows 20 after reset is pressed', function(){
        cy.get('#down').click()
        cy.get('#down').click()
        cy.get('#reset').click()
        cy.contains(20)
    })

    it('shows PSM as initially activated', function(){
        cy.contains('activated')
    })

    it('shows PSM as deactivated', function(){
        cy.get('#off').click()
        cy.contains('deactivated')
    })

    it('shows PSM as activated', function(){
        cy.get('#on').click()
        cy.contains('activated')
    })
})