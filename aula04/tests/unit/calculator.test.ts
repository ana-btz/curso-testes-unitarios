import calculator from "calculator";

describe("calculator tests", () => {
  it("should sum two numbers", async () => {
    const int = calculator.sum(2, 2);
    const intNeg = calculator.sum(-1, -2);
    const dec = calculator.sum(1.5, 0.9);
    const decNeg = calculator.sum(-2.1, -0.1);

    expect(int).toBe(4);
    expect(intNeg).toBe(-3);
    expect(dec).toBe(2.4);
    expect(decNeg).toBe(-2.2);
  });

  it("should subtratct two numbers", async () => {
    const result = calculator.sub(1, 2);
    expect(result).toBe(-1);
  });

  it("should divide two numbers", async () => {
    const result = calculator.div(1, 2);
    expect(result).toBe(0.5);
  });

  it("should multiply two numbers", async () => {
    const result = calculator.mul(1, 2);
    expect(result).toBe(2);
  });
})