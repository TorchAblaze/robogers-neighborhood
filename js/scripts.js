// Business Logic
function outputMessage(value) {
  let messageList = [];
  for (let i = 0; i <= value; i++) {
    let numString = i.toString();
    if (numString.includes(3)) {
      let newIndex = "Won't you be my neighbor?";
      messageList.push(newIndex);
    } else if (numString.includes(2)) {
      let newIndex = "Boop!";
      messageList.push(newIndex);
    } else if (numString.includes(1)) {
      let newIndex = "Beep!";
      messageList.push(newIndex);
    } else {
      messageList.push(i);
    }
  }
  let messageString = "";
  messageList.forEach(function (value, index) {
    if (typeof value === "string") {
      messageString += `${value} `;
    } else if (index === messageList.length - 1) {
      messageString += value;
    } else {
      messageString += `${value}, `;
    }
  });
  return messageString;
}

// UI Logic
function userNumber(userInput) {
  if (userInput === "") {
    userInput = "Nothing";
    return userInput;
  }
  numberRange = parseInt(userInput);
  if (isNaN(numberRange)) {
    return userInput;
  } else {
    if (numberRange < 0) {
      numberRange *= -1;
    }
    return numberRange;
  }
}

$(document).ready(function () {
  $("form#roboger").submit(function (event) {
    event.preventDefault();
    const userNum = userNumber($("#num-input").val());
    const notNum = `Does Not compute! **[0_o]** My wires are cross... "${userNum}" is not a number!`;
    const isNum = outputMessage(userNum);
    if (isNaN(userNum)) {
      $("#output").text(notNum);
    } else {
      $("#output").text(isNum);
    }
  });
});
