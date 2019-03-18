global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
require('../src/data/steam/steam')

describe('filterByField', () => {
  
  it('debería retornar 3 items al buscar "Valve" en author', () => {
    let result = window.filterByField(window.newsitems, 'author', 'Valve')
    assert.equal(result.length, 3);
  });

  it('debería retornar 8 items al buscar "Team" en title', () => {
    let result = window.filterByField(window.newsitems, 'title', 'Team')
    assert.equal(result.length, 8);
  });
})


describe('sortByField', () => {
  
  it('el primer item al ordenar la data de la A - Z por titulo debería ser "All of Halloween is happening in TF2 s Scream Fortress X"', () => {
    let result = window.sortByField(window.newsitems, 'title', 'az')
    assert.equal(result[0].title, 'All of Halloween is happening in TF2 s Scream Fortress X')
  });

  it('el primer item al ordenar la data de la Z-A por titulo debería ser "Team Fortress 2008 throwback mod Steam page removed (Updated)"', () => {
    let result = window.sortByField(window.newsitems, 'title', 'za')
    assert.equal(result[0].title, 'Team Fortress 2008 throwback mod Steam page removed (Updated)')
  });
})
