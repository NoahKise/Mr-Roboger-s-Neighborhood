# Mr Robogers' Neighborhood

#### By Noah Kise

#### A simple web application that takes a users number input and returns to them an approximation of a Mr. Rogers robot counting to that number.

## Technologies Used

* HTML
* CSS
* JavaScript
* GitHub

## Description

This web application will take a number input and return a string approximating a robot counting to that number.  It is lighthearted, with a focus on simple functionality and clean but fun styling. This project was completed to fulfill the third independent project code review at Epicodus.

### Business Logic Tests

## Describe roger()

* Test: "It should return an array of integers from 0 to the user's inputted integer".
Code: roger(5);
Expected Output: [0, 1, 2, 3, 4, 5]

* Test: "It should replace any numbers that contain a 1 with "beep".
Code: roger(2);
Expected Output: [0, "beep", 2]

* Test: "It should replace any numbers that contain a 2 with  "boop".
Code: roger(3);
Expected Output: [0, "beep", "boop", 3]

* Test: "It should replace any numbers that contain a 3 with "Won't you be my neighbor?".
Code: roger(4);
Expected Output: [0, "beep", "boop", "Won't you be my neighbor?", 4]

* Test: "It should recognize the 1 or 2 or 3 in a number regardless of which digit place it is in".
Code: roger(10);
Expected Output: [0, "beep", "boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "beep"]

* Test: "It should apply a hierarchy for numbers that contain different multiple target values (i.e. 1, 2, and 3) that prioritizes 3 over 2, and 2 over 1".
Code: roger(24);
Expected Output: [0, "beep", "boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "beep", "beep", "boop", "Won't you be my neighbor?", "beep", "beep", "beep", "beep", "beep", "beep", "boop", "boop", "boop", "Won't you be my neighbor?", "boop"]

* Test: "It should return some kind of error message if the input field on the form is left blank".
Code: roger();
Expected Output: ["error"];

## Setup/Installation Requirements

* To view on the web, open a web broswer and type https://noahkise.github.io/Mr-Robogers-Neighborhood/ into the navigation bar and press enter.
* To view github repository containing code, open a web browser and type https://github.com/NoahKise/Mr-Robogers-Neighborhood into the navigation bar and press enter.

## Known Bugs

* When viewing this webpage through VS Code's liveserver, it appears every element is slightly smaller than it appears on GitHub Pages. As a result, my scrollTo functionality doesn't work as ideally in GitHub Pages as it does in VS Code liveserver. 

## License

Code Licensed under GPL.

Any suggestions for ways I can improve this layout? Reach out to me at noah@kisefamily.com

Copyright (c) October 27 2023 Noah Kise