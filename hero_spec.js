var expect = require('chai').expect;

var Food = require('./food').food;

var hero = require('./hero').gary;
var cheese = require('./food').cheese;
var pasta = require('./food').pasta;
var henry = require('./rat').henry;
var iceCream = require('./food').iceCream;

describe('Hero', function(){
  it('should have a name, health, and favourite food', function(){
    expect(hero.name).to.equal('Gary', 10, 'pasta');
  });
  it('should be able to talk andd say their own name', function(){
    expect(hero.talk()).to.equal('My name is Gary.');
  });
  it('should be able to eat food, and health should go up by the energy value', function(){
    hero.eat(cheese);
    expect(hero.health).to.equal(60);
  });
  it('should have health replenished by 1.5 times if food eaten is favourite', function(){
    hero.eat(pasta);
    expect(hero.health).to.equal(90);
  });
  it('should lose health if they eat poisoned food', function(){
    henry.touch(iceCream);
    hero.eat(iceCream);
    expect(hero.health).to.equal(85);
  });
});

describe('Food', function(){
  it('should have a name and replenishment value', function(){
    expect(cheese.name).to.equal('cheese');
    expect(cheese.energy).to.equal(50);
  });
});

describe('Rat', function(){
  it('should have health and a name', function(){
      expect(henry.name).to.equal('Henry');
      expect(henry.health).to.equal(1000);
  });
  it('should be able to touch food and poison it, making it\'s energy negative', function(){
    henry.touch(iceCream);
    expect(iceCream.energy).to.equal(-5);
  });
  it('should be able to bite hero and turn him into a wererat', function(){
    henry.bite(hero);
    expect(hero.wererat).to.equal(true);
  });
  it('should be able to split into two, at the cost of half its health', function(){
    var steven = henry.split('Steven');
    expect(henry.health).to.equal(500);
    expect(henry.name).to.equal('Henry');
    expect(steven.name).to.equal('Steven');
  });
});