var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(5, calculator.runningTotal)
  })

  it('can subtract', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it('can multiply', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })

  it('can divide', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

  it('can concatenate multiple number clicks', function(){
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(2)
    calculator.numberClick(2)
    assert.equal(1222, calculator.runningTotal)
  })

  it('can chain multiple operations together', function(){
    calculator.previousTotal = 10
    calculator.add(10)
    calculator.operatorClick('=')
    calculator.add(10)
    calculator.operatorClick('=')
    calculator.multiply(2)
    calculator.operatorClick('=')
    calculator.divide(3)
    calculator.operatorClick('=')
    calculator.subtract(3)
    assert.equal(17,calculator.runningTotal)
  })

  it('can clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 10
    calculator.add(10)
    calculator.operatorClick('=')
    calculator.add(10)
    calculator.operatorClick('=')
    calculator.multiply(2)
    calculator.operatorClick('=')
    calculator.divide(3)
    calculator.operatorClick('=')
    calculator.subtract(3)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.equal(17,calculator.previousTotal)
    assert.equal(0, calculator.runningTotal)
  })

});
