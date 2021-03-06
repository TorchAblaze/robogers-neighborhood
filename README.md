# Mr. Roboger's Neighborhood

#### _A website that will print a unique message when the user enters a number, 4/2/21_

#### By _**Tiffany Greathead**_

## Description

This website was created as part of an independent project at Epicodus. The user enters a number in the text box provided and clicks the "Receive Message" button, or presses enter on their keyboard. The application takes the number the user submitted and uses it in a `for` loop to generate a series of messages equal to that number inside an array. The array is then converted to a string and a special message from Mr. Roboger himself will appear below the text box on the webpage.

## Setup/Installation Requirements

Software Requirements

1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.

Open via Bash/GitBash:

1. Clone this repository onto your computer:
   `git clone https://github.com/TorchAblaze/robogers-neighborhood.git`
2. Navigate into the `robogers-neighborhood` directory, and open in Visual Studio Code or preferred text editor
3. Open index.html in Chrome or preferred browser

#### To see my live website go to https://TorchAblaze.github.io/robogers-neighborhood!

## Known Bugs

- Fix Reverse Function

## Support and contact details

_Please reach out through my GitHub account._

## Technologies Used

- HTML
- CSS
- JavaScript
- VSCode

### License

MIT License.

Image License Courtesy of **Joe Greathead**

Copyright (c) 2021 **_Tiffany Greathead_**

Describe: userNumber()

Test: "It should take input from a user and return a number"
Code: userNumber("5");
Expected Output: 5

Test: "If number is less than 0, multiply it by -1"
Code: outputMessage(-5)
Expected Output: 5

Test: "If the user doesn't enter a number, return the string"
Code: userNumber("Hello");
Expected Output: Hello

Test: "If a user's input is not a number, print an error message"
Code: userNumber("Hello")
Expected Output: "'Hello' is not a number"

Test: "If a user doesn't type anything, the value should not be considered a number"
Code: userNumber("");
Expected Output: Nothing

Describe: outputMessage()

Test: "It should return a list of numbers in a number range"
Code: outputMessaged(5)
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "If number contains a 3, change number to 'Won't you be my neighbor?'"
Code: outputMessage(5)
Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5]

Test: "If number contains a 2, change number to 'Boop!'"
Code: outputMessage(5);
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?", 4, 5]

Test: "If number contains a 1, change number to 'Beep!'"
Code: outputMessage(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

Test: "Return the list as a string"
Code: outputMessage([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]);
Expected Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5"

Test: "If a value in the list contains an ! or ?, don't inlcude a ,"
Code: outputMessage(5);
Expected Output: "0, Beep! Boop! Won't you be my neighbor? 4, 5"

Test: "If the user submits a number larger than 1000000, return an error message"
Code: outputMessage(24353446)
Expected Output: "That number is too high!"

Test: "Store the userName to personalize the message"
Code: outputMessage(5, Mr. Roboger);
Expected Output: "0, Beep! Boop! Won't you be my neighbor, Mr.Roboger? 4, 5"

Test: "If name input is left blank, don't leave an empty space"
Code: outputMessage(5, "");
Expected Output: "0, Beep! Boop! Won't you be my neighbor, Mr.Roboger? 4, 5"

Describe: reverseMessage()

Test: "If the user selects the "reverse message" option, print the message in reverse"
Code: reverseMessage("0, Beep! Boop! Won't you be my neighbor, Mr.Roboger? 4, 5")
Expected Output: "55 ,4 ?T ,robhgien ym eb uoy t'noW !pooB !peeB ,0"
