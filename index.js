function convertFahrToCelcius(para) {
  let result;
  let paraType;
  if (para.constructor == Array) {
    // If the parameter is a Array
    paraType = "array";
    result = `[${para}] is not a valid number but an ${paraType}.`;

    console.log(result);
    return result;
  } else if (para.constructor == Object) {
    // If the parameter is an Object
    paraType = "object";
    result = `${JSON.stringify(para)
      .split('"')
      .join("")} is not a valid number but an ${paraType}.`;

    console.log(result);
    return result;
  } else if (isNaN(parseInt(para))) {
    // If the parameter is a string and can't be converted to Number like special charaters or alphabets
    paraType = typeof para;
    result = `${para} is not a valid number but a ${paraType}.`;
    console.log(result);
    return result;
  } else {
    // If the parameter is a number or can be converted from string to number
    result = ((parseInt(para) - 32) * (5 / 9)).toFixed(4);
    console.log(result);
    return result;
  }
}
convertFahrToCelcius(0);
convertFahrToCelcius("0");
convertFahrToCelcius([1, 2, 3]);
convertFahrToCelcius({ number: 1 });
convertFahrToCelcius("temp5");

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
  } else {
    console.log(`Invalid parameter: ${n}`);
  }
}
checkYuGiOh(5);
checkYuGiOh("5");
checkYuGiOh("a1");
