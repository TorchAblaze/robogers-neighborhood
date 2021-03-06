// Business Logic
function outputMessage(value, name) {
  let messageList = [];
  if (value > 1000000) {
    if (!name) {
      name = "Help";
    }
    return `--[-_-]-- ${name}... You broke me, ${value} is too high! Shutting dooown...`;
  }
  if (!name) {
    name = "please";
  }
  for (let i = 0; i <= value; i++) {
    let numString = i.toString();
    if (numString.includes(3)) {
      let newIndex = `Won't you be my neighbor, ${name}?`;
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

function reverseMessage(message) {
  return message.split("").reverse().join("");
}

// UI Logic
function userNumber(userInput) {
  if (userInput === "") {
    userInput = "Nothing";
  }
  numberRange = parseInt(userInput);
  if (isNaN(numberRange)) {
    return `Does Not compute! **[0_o]** My wires are cross... "${userInput}" is not a number!`;
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
    const userName = $("#user-name").val();
    const isNum = outputMessage(userNum, userName);
    const reverse = $("input:radio[name=reverse]:checked").val();
    if (isNaN(userNum)) {
      $("#output").text(userNum);
      $("#broken").hide();
      $("#no-compute").show();
      $("#output").show();
    } else {
      if (reverse === "true") {
        console.log(isNum);
        $("#output").text(reverseMessage(isNum));
      } else if (userNum > 1000000) {
        $("#broken").show();
        $("#output").text(isNum);
      } else {
        $("#output").text(isNum);
        $("#broken").hide();
      }
      $("#no-compute").hide();
      $("#output").show();
    }
  });
});
