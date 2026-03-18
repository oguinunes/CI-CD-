function soma(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Não pode dividir por zero");
  return a / b;
}

module.exports = { soma, divide };