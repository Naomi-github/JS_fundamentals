const searchCandies = require('./searchCandies');

describe('Candies array', () => {
  it('returns the full array of candies', () => {
    expect(searchCandies('', ).length).toBe(13)
  });

  it('returns all candies with that start with the first two letters Ma', () => {
    expect(searchCandies('Ma')).toEqual (['Mars', 'Maltesers'])
  });

  it('returns all candies with that start with the first two letters Ma and are price below 3', () => {
    expect(searchCandies('Ma', 3)).toEqual (['Mars'])
  });

  it('returns all candies with that start with the first two letters Ma and are price below 3', () => {
    expect(searchCandies('', 5)).toEqual (['Aero', 'Skitties', 'Mars', 'Maltesers', 'Skittles', 'Ricola', 'Pastila'])
  });

})





// > searchCandies('Ma', 10);
// [ 'Mars', 'Maltesers' ]

// > searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// > searchCandies('S', 10);
// [ 'Skitties', 'Skittles', 'Starburst' ]

// > searchCandies('S', 4);
// [ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4
