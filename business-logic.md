# Thermostat: business logic

[Back to the Project Map](README.md)

Alrighty. Now that you've got the basics under your fingers, it's time for a new domain.

In this challenge, you will build the logic needed to model a simple thermostat.

### Learning Objectives covered
* Use `Cypress` to test-drive the development of a thermostat class

### Challenge setup

Specification:

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default but it can also be turned off
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, <= 25 is `medium-usage`, anything else is `high-usage`.
* (In the challenges where you add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)


### To complete this challenge, you will need to:
- [ ] Model the domain simply
- [ ] Use your domain to translate the first specification into a test
- [ ] Pass the test
- [ ] Translate the next specification
- [ ] Repeat until you've run out of tests

### Resources
- [Cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test#Write-a-real-test)
- [Strict Mode on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [Master the `this` keyword](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)

[back](README.md) | [next](interface.md)
