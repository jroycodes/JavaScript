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

 **To change a number into a string, we use the “String” function.**

Type Coercion: Is when JavaScript automatically converts from one type to another behind the scenes. In JavaScript, the plus operator (+) triggers a Coercion of strings. (From numbers to strings). While the minus operator (-) triggers a Coercion of numbers.(From strings to numbers).

# Operators 
An operator basically allows us to transform values or combine multiple values. 

***Mathematical operators***

With mathematical operators, we can do all sorts of arithmetic operations like addition, subtraction, division and multiplication.

```jsx
// Addition (**+**)
40 + 50 + 100;
= 190.
```

***The addition operator or the plus operator (+) can also be used to add strings (text).***

```jsx
const firstName = 'Jonathan';
const lastName = 'Roy';
(firstName + lastName);
```

```jsx
//Subtraction (**-**)
100 - 50 - 40;
= 10.
// Subtraction
const ageJonas = 2037 - 1991;
= 46
```

```jsx
//Multiplication (*****)
const ageJonas = 19;
ageJonas * 2;
```

```jsx
//Division (**/**)
const ageJonas = 19;
ageJonas * 2;
```

**Remainder operato**r (%) Gives the remainder of the division of two numbers.

```css
314 % 100
// 14 (modulo)
```

- ***Assignment Operators***

    ***Equal sign. (=)*** Besides being a mathematical operator, the equal sign is alos an assignment operator. When used, it assigns the totall of the values on the right after it to the value on the left.

    ```jsx
    let x = 10 + 5;
    x = 15
    //the assignment operator assigned the total of the value on the right(15) into the value on the left....hence x = 15. 
    ```

    ***Plus Equal (+=).*** This one is used when for example the first value of x = 15 then the second value is 10 to add the two values in avariable. 

    ```jsx
    let x = 10 + 5; // 15
    x += 10; // x = x + 10 = 25
    ```

    ***Multiplication & Equal (*=).***  This means that when the initial value of x is 15 and the second value of x is 4 then you multiply them with each other.

    ***Plus Plus (++).*** With this operator, 1 is added to the initial value of X everytime ***(++)*** is used.

    ```jsx
    let x = 10 + 5;
    x += 10; // x = x + 10 = 25
    x *= 4; // x = x * 4
    x++; // x = x + 1 = 101
    ```

    ***Minus Minus (- -).*** With this operator, 1 is removed from the initial value of X everytime ***(- -)*** is used.

    ```jsx
    let x = 10 + 5;
    x += 10; // x = x + 10 = 25
    x *= 4; // x = x * 4
    x++; // x = x + 1 = 101
    x--: // x = x - 1 = 100
    ```

    ```jsx
    let x = 10 + 5; // 15
    x *= 4; // x = x * 4 = 60
    ```

- ***Comparison Operators:*** These are used to produce boolean values.


    **Strict Equality operator. ( ===).** *Operator used for comparing values**.***

    **The inequality operator** (`!=`) It means not equal and returns `false`where equality would return `true`and *vice versa.* 

    The strict inequality operator (`!==`)   is the logical opposite of the strict equality operator. It means "*Strictly Not Equal*" and returns `false`where strict equality would return `true`and *vice versa.*                                  

    **(>) Greater than.**

    **(<) Less than.**

    **(<=) Less than or Equal to** 

    **(>=) Greater than or Equal to** 


***Logical operators.***

We use **Boolean Logic** when solving complex logical problems in JS. We then use operators like: ‘’And’’, ‘’Or’’ and ‘’Not’’. 

**Syntax.**

- **And (&&)**
- **Or ( || )**
- **Not (!)**

**Unary Operators**

These take one value. 

- **typeof** operator : which produces a string value naming the type of the value you give it.

These take one value. 

- **typeof** operator : which produces a string value naming the type of the value you give it.

- **Strings**

    A string is a sequence of characters. When writing strings, we put them in quotes at the beginning and at the end of a string.

    ```jsx
    const firstName = "Jonathan";
    const secondName = "Roy";
    ```

    **Concatenating strings** 

    We can use the addition or plus (+) operator to add two strings together. We can also use the plus equal(+=) operator.

    ```jsx
    let myStr = "This is the start. " + "This is the end.";
    //or 
    let myStr ="This is the start. ";
    myStr += "This is the end."
    // Concatenating strings with variables 
    const nameOne = 'Jonathan';
    const nameTwo = 'Roy';
    const nameThree = 'Mugisha';
    const strFullName =
      ' I met a boy whose fullname was ' + nameOne + ' ' + nameTwo + ' ' + nameThree + '.';
    ```

    **Template Literals..( *Template string*)**

    *Template literals allow us insert variables directly into the string. It allows us to assemble multiple pierces into a single string*.

    ```jsx
    //We use back tick **(``)** when using template literals or strings.
    const jonathanNew = `I'm ${firstName} a ${year-birthYear} year old ${job};`
    ```

    ```jsx
    (` String
    multiple
    lines`);
    ```

           Template literals allows us to write multiple line strings. **Back ticks** ( **``** ) can also be used to write regular normal strings.

    ```jsx
    (`just a normal regular string!!!!`);
    ```

    ***Bracket notation*** is a way to find a character at a specific index within a string.

    ```jsx
    // First letter in charles
    const firstName = "Charles";
    const firstLetter = firstName[0];

    // Last letter...subtract 1 from the string's length
    const firstName = Charles;
    const lastLetterOfName = firstName[firstname.length - 1];

    // Nth-to-Last Character in a String
    const firstName = Charles;
    const lastLetterOfName = firstName[firstname.length - 3];
    ```

    <aside>
    ✏️ You can find the length of a `String`
     value by writing `.length`
     after the string variable or string literal.

    </aside>

    - **String Methods**

        **Reversing strings** 

        ```jsx
        function reverse(s){
            return s.split("").reverse().join("");
        }
        ```

        **Trim**

        The **`trim()`** method removes whitespace from both ends of this string.

        **Length**

        The **`length`** data property of a string value contains the length of the string.

        **Replace**

        The **`replace()`** method of string values returns a new string with one, some, or all matches of a `pattern` replaced by a `replacement`.

        ```jsx
        replace(pattern, replacement)
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
        ```

        ****ReplaceAll****

        The **`replaceAll()`** method of `[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)` values returns a new string with all matches of a `pattern` replaced by a `replacement`.

        ````````````````string.padStart````````````````

        `string.padEnd`

        ```jsx
        padStart / padEnd(targetLength, padString)
        ```

- **Variables and Scoping**
**A** **value**: Is a pierce of data. The most fundamental unit of information in programming. Values can the be stored into variables. 

```jsx
console.log("Jonathan");
//"Jonathan is the value in this line of code.
```

**A variable**: Is a container into which values of data are stored. Variables allow the user to reuse any saved values. 

- **Conventions of writing(naming) variables.**
    - Variable names do not start with numbers.

        ```jsx
        let 3years = 3;
        //Syntax error
        ```

        - Variable names can only contain numbers, letters, underscore and the dollar sign.
        - Variable names should not contain or fully be made of reserved words in JS eg: “function, name”.
        - Variable names should not begin with capitalized letters. This might be done when dealing with Object Oriented JavaScript.’
            - Variables that are all in upper case are reserved for constants that never change.
        - Variable names should be descriptive. This makes it easier to keep clean code and make it easier to understand.

        ```jsx
        //descriptive variable name 
        let myFirstJob = "Teacher";
        let myCurrentJob = "Programmer";
        ```


```jsx
let firstName = "Jonathan"
// "firstName" is the variable.
//let declares a variable in JavaScript.
```

Variables also allow makes it easy to change the values in a variable. Instead of changing the value one by one , it can be done in a single step by changing the value in the variable itself.

```jsx
let firstName = "Matilda"

console.log(firstName);
console.log(firstName);
console.log(firstName);
//Output:
Matilda
Matilda
Matilda
//So by changing the value in the variable, it applies the changes in all the places where the variable is mentioned.
```
