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

Describe: outputMessage()

Test: "It should return a list of numbers in a number range"
Code: outputMessaged(5)
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "If number contains a 3, change number to 'Won't you be my neighbor?'"
Code: outputMessage(5)
Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5]

Test: "If number contains a 2, change number to 'Boop'"
Code: outputMessage(5);
Expected Output: [0, 1, "Boop", "Won't you be my neighbor", 4, 5]
