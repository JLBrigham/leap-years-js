// spec/fizzBuzzSpec.js

// describe('FizzBuzz', () => {

//     let fizzBuzz;

//     beforeEach(() => {
//       fizzBuzz = new FizzBuzz();
//     });

//     describe('multiples of 3', () => {
//       it('fizzes for 3', () => {
//         expect(fizzBuzz.play(3)).toEqual('Fizz');
//       });

describe("leapYear", function () {
  it("returns true if given year 400", function () {
    expect(leapYear(400)).toBe(true);
  });

  it("returns true if given the year 800", function () {
    expect(leapYear(800)).toBe(true);
  });

  it("returns true if given a year which is divisble by 4 but not by 100", function () {
    expect(leapYear(2004)).toBe(true);
  });

  it("returns false if given a year which is divisible by 100 but not by 400", function () {
    expect(leapYear(1700)).toBe(false);
  });
});
