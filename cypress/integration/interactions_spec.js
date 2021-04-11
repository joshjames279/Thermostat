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
        cy.contains('on')
    })

    it('shows PSM as deactivated', function(){
        cy.get('#off').click()
        cy.contains('off')
    })

    it('shows PSM as activated', function(){
        cy.get('#on').click()
        cy.contains('on')
    })

    it('can only go up to 25 when PSM is activated', function(){
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.contains(25)
    })

    it('can only go up to 26 when PSM is deactivated', function(){
        cy.get('#off').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.contains(26)
    })

    it('can only go up to 25 when PSM is reactivated', function(){
        cy.get('#off').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#on').click()
        cy.get('#up').click()
        cy.contains(25)
    })

    it('can only go up to 25 when PSM is reactivated', function(){
        cy.get('#off').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#on').click()
        cy.get('#up').click()
        cy.contains(25)
    })

    it('temp should be in green for 17 degrees', () => {
        cy.get('#down').click()
        cy.get('#down').click()
        cy.get('#down').click()
        cy.get('#Temp').should('have.css', 'color', 'rgb(0, 128, 0)')
      })

    it('temp should be in red for 26 degrees', () => {
        cy.get('#off').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#Temp').should('have.css', 'color', 'rgb(255, 0, 0)')
      })

      it('temp should be in black for 25 degrees', () => {
        cy.get('#off').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#down').click()
        cy.get('#Temp').should('have.css', 'color', 'rgb(0, 0, 0)')
      })

      it('temp should be in black for 18 degrees', () => {
        cy.get('#down').click()
        cy.get('#down').click()
        cy.get('#down').click()
        cy.get('#up').click()
        cy.get('#Temp').should('have.css', 'color', 'rgb(0, 0, 0)')
      })

      it('temp should be in black after reset', function(){
        cy.get('#down').click()
        cy.get('#down').click()
        cy.get('#down').click()
        cy.get('#reset').click()
        cy.get('#Temp').should('have.css', 'color', 'rgb(0, 0, 0)')
    })

    it('temp should be in black after reset', function(){
        cy.get('#off').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#reset').click()
        cy.get('#Temp').should('have.css', 'color', 'rgb(0, 0, 0)')
    })

    it('temp should be in black after PSM reactivated', () => {
        cy.get('#off').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#up').click()
        cy.get('#on').click()
        cy.get('#Temp').should('have.css', 'color', 'rgb(0, 0, 0)')
      })

      it('temp should be in green after PSM reactivated', () => {
        cy.get('#off').click()
        cy.get('#down').click()
        cy.get('#down').click()
        cy.get('#down').click()
        cy.get('#on').click()
        cy.get('#Temp').should('have.css', 'color', 'rgb(0, 128, 0)')
      })

})

describe('Weather display', function() {
    beforeEach(function() {
        cy.intercept('http://api.openweathermap.org/data/2.5/weather*', { fixture: 'weather-data.json' })
        cy.visit('./thermostat.html')
    })
    it('shows temperature for London', function(){
        cy.get('#CityTemp').contains(8)
    })

    it('shows temperature range for London', function(){
        cy.get('#CityRange').contains(7)
        cy.get('#CityRange').contains(9)
    })

})