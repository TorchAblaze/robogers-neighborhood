// Business Logic
function outputMessage(value) {
  let messageList = [];
  if (value < 0) {
    value *= -1;
  }
  for (let i = 0; i <= value; i++) {
    let numString = i.toString();
    if (numString.includes(3)) {
      let newIndex = "Won't you be my neighbor?";
      messageList.push(newIndex);
    } else {
      messageList.push(i);
    }
  }
  return messageList;
}

// UI Logic
function userNumber(userInput) {
  numberRange = parseInt(userInput);
  if (Number.isNaN(numberRange)) {
    return userInput;
  } else {
    return userNumber;
  }
}

$(document).ready(function () {
  $("form#roboger").sumbit(function (event) {
    event.preventDefault();
    const userNum = $("#num-input").val();
  });
});
