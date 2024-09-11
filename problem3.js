function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (const x of name) {
    if (!isNaN(Number(x))) {
      return true;
    }
  }

  return false;
}

const result = checkDigitsInName('!@#');
console.log(result);
