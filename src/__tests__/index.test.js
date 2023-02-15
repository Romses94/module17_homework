import {countDown} form "../index.js"

describe("test countDown", () => {
  it("Если число равно 5, начнётся отсчёт до нуля", () => {
    expect(countDown(5)).toBe('5 4 3 2 1');
  }),

  it("Если число равно 0, отсчёта не будет", () => {
    expect(countDown(0)).toBe('undefined');
  }),

  it("Если число отрицательное, отсчёта не будет", () => {
    expect(countDown(-1)).toBe('undefined');
  }),
});