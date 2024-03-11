# JavaScript
Learn JavaScript with me 

**JavaScript** is a high level, object-oriented, multi-paradigm programming language.

JavaScript is a programming language that allows you to implement complex features on web pages. In other word it transforms a web page from a static display of information to an interactive more responsive web page. It works hand in hand with HTM - Hyper Text Markup Language and CSS to bring to life a web page.

JavaScript frameworks and libraries include: React, Angular and View. 

Therefore,

**HTML** - Is used to structure a web page and its contents(text, images and buttons on the web site.)

**CSS** - Is responsible for styling of the content on the web page.

**JavaScript** - Allows us to implement complex features and add dynamics to the web page.

**CSS** - Is responsible for styling of the contents on the web page.

**JavaScript** - Allows us to implement complex features on web pages and add dynamics to the web page.

# Data Types
In JavaScript, a value can either be an **Object** or a **Primitive.**

***Primitive Data Types***

- Numbers
- Strings
- Boolean
- Undefined
- Null
- Symbol
- Big Int.

*Number*: Floating point numbers. In JS, decimals and integers are all of the type Numbers.
```jsx
//The Number type covers both decimals and integers.(23 & 23.0)
let age = 23;
```

*Strings*: Sequence of characters. Strings are used for test. Strings should always be in quotes. (” ”, ‘ ‘)

```jsx
let firstName = 'Jonathan';
```

*Boolean*: These are questions with **Yes** or **No**, **True** or **False** answers. This logical type is used for making decisions.

```jsx
let fullAge = true;
```

*Undefined*: Value taken by a variable that is not yet defined. This is a variable that is defined but is not given a value.(”Empty value”)

```jsx
let children;
```

*Null*: Also means “empty value”.
*Symbol*: Defines a value that is unique and cannot be changed.

*Big Int*: For integers larger than the integers the Number type can hold.
**Dynamic Typing**: In JS, you do not have to manually define the data type of the value stored in a variable. 

In JavaScript, we can check for a data type by using the “typeof” operator.

```jsx
let javascriptIsFun = true;
(typeof javascriptIsFun);

let year;
(typeof year);

```

We can also change the data type of a variable that has already been defined.

```jsx
// We can then change the data type of the variable "javascriptIsFun" from a boolean to a string.
let javascriptIsFun = true;
javascriptIsFun = 'YES!';
//Therefore changing it into a string.

```

**Type Conversion:** Type conversion is when we manually convert from one type to another. To change a string into a number we use the “**Number**’’ function in JavaScript.

```jsx
//the **Number** function changes string into text for that particular block of code. In order to change the original block of code from a string into a number, we need to nest the string into the number function.
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
```

 **To change a number into a string, we use the “String” function.**

Type Coercion: Is when JavaScript automatically converts from one type to another behind the scenes. In JavaScript, the plus operator (+) triggers a Coercion of strings. (From numbers to strings). While the minus operator (-) triggers a Coercion of numbers.(From strings to numbers).
