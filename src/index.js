module.exports = function check(str, bracketsConfig) {

  let brackets_array = str.trim('');
  let stack = [];

  //add all open brackets, '|', odd numbers and 7, 8 to stack
  for (let i = 0; i < brackets_array.length; i++) {
    if (brackets_array[i] == '('
      || brackets_array[i] == '['
      || brackets_array[i] == '{'
      || brackets_array[i] == '|'
      || brackets_array[i] == '1'
      || brackets_array[i] == '3'
      || brackets_array[i] == '5'
      || brackets_array[i] == '7'
      || brackets_array[i] == '8') {

      stack.push(brackets_array[i]);
    }

    //check open and close brackets, remove open from stack if true
    if (brackets_array[i] == ')') {
      if (stack.pop() != '(') { return false }
    }
    if (brackets_array[i] == ']') {
      if (stack.pop() != '[') { return false }
    }
    if (brackets_array[i] == '}') {
      if (stack.pop() != '{') { return false }
    }

    if (brackets_array[i] == '2') {
      if (stack.pop() != '1') { return false }
    }
    if (brackets_array[i] == '4') {
      if (stack.pop() != '3') { return false }
    }
    if (brackets_array[i] == '6') {
      if (stack.pop() != '5') { return false }
    }
    //for |, 7 and 8
    if (stack[stack.length - 1] == '|' && stack[stack.length - 2] == '|') {
      stack.pop();
      stack.pop();
    }

    if (stack[stack.length - 1] == '7' && stack[stack.length - 2] == '7') {
      stack.pop();
      stack.pop();
    }

    if (stack[stack.length - 1] == '8' && stack[stack.length - 2] == '8') {
      stack.pop();
      stack.pop();
    }
  }
  //check if stack is empty
  return (stack.length > 0) ? false : true;
}