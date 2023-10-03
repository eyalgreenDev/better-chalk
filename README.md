# betterchalk
`betterchalk` is a node.js package that allow you to create a styled text and customize your console , the package is based on ANSI escape codes,whice provide you with the ability to set text and background colors, as well as text styles.

---
# Usage
To use the `betterchalk` library, you need to install it and import it into your project. You can do this using the following commands:

```bash
npm install betterchalk
```
After installation, you can import the library in your code:
```bash
const betterchalk = require("betterchalk");
```
---
# Examples
Here are examples of how to use `betterchalk`:
```bash
console.log(betterchalk.red("Red text")); //Red text
console.log(betterchalk.hex("#FF0000")("Custom color text")); //set a custom color (hex format)
console.log(betterchalk.yellow("Yellow text with bold", true)); //adds bold style into the text
console.log(`${betterchalk.bghex("#ff88be", true)}`+("Hello world")); //set the color of the background of the text using hex format and set the color style to bold.
```
To Remove the bold style change the "true" to false.

---
# Features
# Colors
`betterchalk` provides a variety of colors, including standard console colors, and the ability to use custom colors with Hex codes. Each color is defined as a separate function.

# Backgrounds
You can change the background color of the text using functions that start with "bg." currntly support only bgHex

# Bold Text
You can add the "bold" style to text using the second argument in the function

---
# Installation
```bash
npm install betterchalk
```
---

# License
This project is licensed under the MIT License

---
# Credits
All rights reserved to eyalgreenDev(eyalgreen#0).