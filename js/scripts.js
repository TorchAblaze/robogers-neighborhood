// Business Logic
function outputMessage(value) {
  let messageList = [];
  for (let i = 0; i <= value; i++) {
    messageList.push(i);
  }
  return messageList;
}

// UI Logic
function userNumber(userInput) {
  numberRange = parseInt(userInput);
  if (Number.isNaN(numberRange)) {
    return userInput;
  } else {
    return numberRange;
  }
}

$(document).ready(function () {
  $("form#roboger").sumbit(function (event) {
    event.preventDefault();
    const userNum = $("#num-input").val();
  });
});
