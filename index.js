function convertFahrToCelcius(para) {
  let result;
  let paraType;
  if (para.constructor == Array) {
    // If the parameter is a Array
    paraType = "array";
    result = `${JSON.stringify(
      para
    )} is not a valid number but an ${paraType}.`;

    console.log(result);
    return result;
  } else if (para.constructor == Object) {
    // If the parameter is an Object
    paraType = "object";
    result = `${JSON.stringify(
      para
    )} is not a valid number but an ${paraType}.`;

    console.log(result);
    return result;
  } else if (isNaN(parseInt(para))) {
    // If the parameter is a string and can't be converted to Number like special charaters or alphabets
    paraType = typeof para;
    result = `${JSON.stringify(para)} is not a valid number but a ${paraType}.`;
    console.log(result);
    return result;
  } else {
    // If the parameter is a number or can be converted from string to number
    result = (((Number(para) - 32) * 5) / 9).toFixed(4);
    console.log(Number(result));
    return Number(result);
  }
}

function checkYuGiOh(n) {
  let answer = [];
  if (!isNaN(parseInt(n))) {
    for (let i = 1; i <= parseInt(n); i++) {
      if (i % 2 == 0 && i % 3 > 0 && i % 5 > 0) {
        answer.push("yu");
      } else if (i % 2 > 0 && i % 3 == 0 && i % 5 > 0) {
        answer.push("gi");
      } else if (i % 2 > 0 && i % 3 > 0 && i % 5 == 0) {
        answer.push("oh");
      } else if (i % 2 == 0 && i % 3 == 0 && i % 5 > 0) {
        answer.push("yu-gi");
      } else if (i % 2 > 0 && i % 3 == 0 && i % 5 == 0) {
        answer.push("gi-oh");
      } else if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
        answer.push("yu-gi-oh");
      } else if (i % 2 == 0 && i % 3 > 0 && i % 5 == 0) {
        answer.push("yu-oh");
      } else {
        answer.push(i);
      }
    }
    console.log(answer);
    return answer;
  } else {
    console.log(`Invalid parameter: ${JSON.stringify(n)}`);
    return `Invalid parameter: ${JSON.stringify(n)}`;
  }
}
