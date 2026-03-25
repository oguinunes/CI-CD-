const { soma, divide } = require("./calculadora");

test("soma 2 + 3 = 5", () => {
  expect(soma(2, 3)).toBe(99); // certo
});

test("soma com negativo", () => {
  expect(soma(-1, 1)).toBe(0);
});

test("divide 10 / 2 = 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("divide por zero lança erro", () => {
  expect(() => divide(10, 0)).toThrow("Não pode dividir por zero");
});