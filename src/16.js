function getRandomJsCode() {
  let result = '';
  const types = ['string', 'number', 'boolean'];
  const operators = ['+', '-', '*', '/', '%', '==', '!=', '<', '>', '<=', '>=', '&&', '||'];
  for (let i = 0; i < 10; i++) {
    result += `${types[Math.floor(Math.random() * types.length)]} ${operators[Math.floor(Math.random() * operators.length)]}`;
  }
  return result;
}
