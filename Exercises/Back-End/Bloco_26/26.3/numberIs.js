function numberIs(number) {
  if (typeof number !== 'number') { return "o valor deve ser um número"; }

  if (number > 0) { return 'Positivo' }
  else if (number === 0) { return 'Neutro' }
  else { return 'Negativo' }
}

module.exports = numberIs