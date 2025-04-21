const { isPalindrome } = require("../utils");

it("is case insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });
  
  it("returns false for empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });
  
  it("throws an error if input has non-alphabetic characters", () => {
    expect(() => isPalindrome("race-car")).toThrow("Input must contain only alphabetic characters.");
  });
  
  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string.");
  });
  