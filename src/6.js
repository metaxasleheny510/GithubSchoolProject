const getRandomCode = () => {
  const code = Math.floor(Math.random() * 100000) + 1;
  return code;
};

console.log(getRandomCode());
