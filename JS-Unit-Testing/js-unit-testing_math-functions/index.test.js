import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("adds the numbers 2 and 3 correctly", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
});

test("returns a negative number if one of the arguments is a negative", () => {
    const result = add(1, -3);
    expect(result).toBeLessThan(0);
});

test("returns a value close to 0.3 when passing 0.1 and 0.2", () => {
    const result = add(0.2, 0.1);
    expect(result).toBeCloseTo(0.3);
});

test("subtracts 5 from 15 correctly", () => {
    const result = subtract(15, 5);
    expect(result).toBe(10);
});

test("returns a negative value if the second argument is greater than the first one", () => {
    const result = subtract(5, 10);
    expect(result).toBeLessThan(0);
});

test("multiplies the numbers 2 and 4 correctly", () => {
    const result = multiply(2, 4);
    expect(result).toBe(8);
});

test("returns a negative value if only the first argument is negative", () => {
    const result = multiply(-1, 8);
    expect(result).toBeLessThan(0);
});

test("returns a negative value if only the second argument is negative", () => {
    const result = multiply(1, -8);
    expect(result).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
    const result = multiply(-1, -8);
    expect(result).toBeGreaterThan(0);
});

test("divides 9 by 3 correctly", () => {
    const result = divide(9, 3);
    expect(result).toBe(3);
});

test("returns the string You should not do this! if called with 0 as second argument", () => {
    const result = divide(7, 0);
    expect(result).toBe("You should not do this!");
});