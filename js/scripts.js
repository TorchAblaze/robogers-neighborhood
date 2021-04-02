// Business Logic
function outputMessage(value) {
  let newIndex;
  let messageList = [];
  for (let i = 0; i <= value; i++) {
    let numString = i.toString();
    if (numString.includes(3)) {
      newIndex = "Won't you be my neighbor?";
      messageList.push(newIndex);
    } else if (numString.includes(2)) {
      newIndex = "Boop";
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
    if (numberRange < 0) {
      numberRange *= -1;
    }
    return numberRange;
  }
}

$(document).ready(function () {
  $("form#roboger").sumbit(function (event) {
    event.preventDefault();
    const userNum = $("#num-input").val();
  });
});
