var minRemoveToMakeValid = function (s) {
  const stack = [];
  result = "";

  for (const char of s.split("")) {
    if (char === "(") {
      stack.push(result.length);
    }

    if (char === ")") {
      if (stack.length !== 0) {
        stack.pop();
      } else {
        continue;
      }
    }

    result += char;
  }

  for (const removePosition of stack.reverse()) {
    result =
      result.slice(0, removePosition) +
      result.slice(removePosition + 1, result.length);
  }

  return result;
};

console.log(
  minRemoveToMakeValid("aasl(fjha slk (faslfh() alsf a( asdfjhalshf ))")
);
