const number = () => {
  // random number 1-100
  return Math.floor(Math.random() * 1000) + 1;
};

const letter = () => {
  // random letter a-z
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

export default {
  number,
  letter,
};
