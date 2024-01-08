# Password Generator

## Project Summary:

This project is a simple web-based random password generator with a user-friendly interface. The main features include a password generation button, the display of two randomly generated passwords, and buttons to copy each password to the clipboard. 
The project also provides feedback messages for successful and failed copy attempts, enhancing the user experience.

## Key Concepts:

### HTML Structure:

The project is structured using HTML, with a main container containing a heading, informational text, password generation button, password displays, and feedback messages.

### CSS Styling:
Default styling is applied using CSS to create an aesthetically pleasing and responsive layout.

In the mobile layout, various style adjustments are implemented to enhance the user experience on smaller screens. 

## Javascript:

### 1. characters Array:
 
It contains a wide range of characters, including uppercase and lowercase letters, numbers, and special characters, forming the character set for password generation.

![image](https://github.com/ChrisserDev/Mini-JS-Projects-Password-Generator/assets/126911205/baa7d683-88bf-4055-9617-42fafcde04e2)

### 2. DOM Elements:
 
Various DOM elements are selected using document.querySelector and document.getElementById to interact with them in the JavaScript code.

![image](https://github.com/ChrisserDev/Mini-JS-Projects-Password-Generator/assets/126911205/0e1324c6-d920-404b-b489-13667ffd89d9)

### 3. generateRandomPassword Function:
 
This function generates a random password by iterating 16 times, each time selecting a random character from the characters array and appending it to the password string.

![image](https://github.com/ChrisserDev/Mini-JS-Projects-Password-Generator/assets/126911205/437ca370-dfff-4f4f-b02c-140ec2816361)

### 4. "Generate passwords" Button Event Listener:
 
An event listener is attached to the "Generate passwords" button, triggering the generation of two random passwords and displaying them on the webpage.

![image](https://github.com/ChrisserDev/Mini-JS-Projects-Password-Generator/assets/126911205/64ed66fa-4713-47b5-bcf5-923d4744c1e6)

### 5. "Copy to Clipboard" Event Listeners:
 
Event listeners are set up for both "Copy to Clipboard" buttons, which call the copyToClipboard function with the respective password to be copied.

![image](https://github.com/ChrisserDev/Mini-JS-Projects-Password-Generator/assets/126911205/cd031664-2cb8-4707-8e17-f861cdeaff0b)

### 6. copyToClipboard Function:
 
This function utilizes the Clipboard API to copy the provided text (textToCopy) to the clipboard. It also manages the display of success and failure messages and sets a timeout to hide them after 3 seconds, providing a smooth user experience.

![image](https://github.com/ChrisserDev/Mini-JS-Projects-Password-Generator/assets/126911205/ee7327c1-23bc-4bc3-9576-489a14c55a4a)

### 7. Success and Failure Messages:
Messages like "Content copied to clipboard!" and "Failed to copy" are displayed to the user for feedback on the copy operation.

This JavaScript code integrates various concepts, such as DOM manipulation, event handling, asynchronous Clipboard API usage, and timeout functions to create a functional and user-friendly password generator.
