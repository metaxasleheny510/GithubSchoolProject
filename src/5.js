function getRandomCode() {
  const codes = ["let myVariable = 'Hello World';", "const myFunction = () => { console.log('I am a function!'); };"];
  return codes[Math.floor(Math.random() * codes.length)];
}
