import {Thermostat} from '../../src/thermostat';

describe('Thermostat tests', () => {
    
    it('Temperature starts at 20', () => {

      const thermostat = new Thermostat;

      expect(thermostat.temperature).to.equal(20)
    });

    it('Increase the temperature with up function', () => {

        const thermostat = new Thermostat;
  
        expect(thermostat.up()).to.equal(21)
      });
    
      it('Decrease the temperature with down function', () => {

        const thermostat = new Thermostat;
  
        expect(thermostat.down()).to.equal(19)
      });

      it('Minumum temperature is 10', () => {

        const thermostat = new Thermostat('on',12);
        thermostat.down()
        thermostat.down()
  
        expect(thermostat.down()).to.equal(10)
      });

      it('Max temp is 25 when PS on', () => {

        const thermostat = new Thermostat('on',23);
        thermostat.up()
        thermostat.up()
  
        expect(thermostat.up()).to.equal(25)
      });

      it('Max temp is 32 when PS off', () => {

        const thermostat = new Thermostat('off',30);
        thermostat.up()
        thermostat.up()
  
        expect(thermostat.up()).to.equal(32)
      });

      it('PS mode on by default', () => {

        const thermostat = new Thermostat();
  
        expect(thermostat.powerSaving).to.equal('on')
      });

      it('Reset the temperature to 20', () => {

        const thermostat = new Thermostat();
        thermostat.up()
        thermostat.up()
        thermostat.reset()
  
        expect(thermostat.temperature).to.equal(20)
      });

      it('Check returns low-usage', () => {

        const thermostat = new Thermostat();
        thermostat.down()
        thermostat.down()
        thermostat.down()
  
        expect(thermostat.usage()).to.equal('low')
      });

      it('Check returns medium-usage', () => {

        const thermostat = new Thermostat();
        thermostat.down()
  
        expect(thermostat.usage()).to.equal('medium')
      });

      it('Check returns high-usage', () => {

        const thermostat = new Thermostat('off', 24);
        thermostat.up()
        thermostat.up()
  
        expect(thermostat.usage()).to.equal('high')
      });

  });