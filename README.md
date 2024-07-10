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
 **LET, CONST & VAR.**

    ***LET***

    We us the *“**let**”* keyword to declare variables that will change later.( Mutating variable.) 

    ```jsx
    // variable declaration with "**let**"
    let age = 19;
    //Values in variables made with "let" can be changed/mutated
    age = 31;

    ```

    ***CONST***

    We use the “**const**’’ keyword to declare variables that will not change throughout the program. The values in a “**const**” variable are not supposed to be changed. When using “**const**”, we can not declare null or empty variables.

    ```jsx
    //Variables declared with "const" do not cha   n ge. (They are constant.)
    const birthYear = 2003;
    ```

    ***VAR***

    This is the oldest way of declaring variables in JavaScript. Like “**let**”, its also used to declare variables that will change later.

    ```jsx
    //Similar to "let"....NB: Not advisable to use this declaration method.
    var job = 'Programmer';
    job = 'Teacher';
    ```

    In JavaScript, when declaring a variable, syntactically we use the key word ***“let”.*** 

    <aside>
    💡 **************“let”************** *****is on*****

    </aside>

- **Scoping**
- **LET, CONST & VAR.**

    ***LET***

    We us the *“**let**”* keyword to declare variables that will change later.( Mutating variable.) 

    ```jsx
    // variable declaration with "**let**"
    let age = 19;
    //Values in variables made with "let" can be changed/mutated
    age = 31;

    ```

    ***CONST***

    We use the “**const**’’ keyword to declare variables that will not change throughout the program. The values in a “**const**” variable are not supposed to be changed. When using “**const**”, we can not declare null or empty variables.

    ```jsx
    //Variables declared with "const" do not cha   n ge. (They are constant.)
    const birthYear = 2003;
    ```

    ***VAR***

    This is the oldest way of declaring variables in JavaScript. Like “**let**”, its also used to declare variables that will change later.

    ```jsx
    //Similar to "let"....NB: Not advisable to use this declaration method.
    var job = 'Programmer';
    job = 'Teacher';
    ```

    In JavaScript, when declaring a variable, syntactically we use the key word ***“let”.*** 

    <aside>
    💡 **************“let”************** *****is on*****

    </aside>
 **Scoping**
**Scoping** : Scoping controls how variables in a program are organized and accessed in the JS engine. 

**Lexical scoping** : Is controlled by placement of functions and blocks in the code.

**Scope** : Environment in which a certain variable is declared. There is the **global** scope, **function** scope and the **block** scope.

**Scope of a variable** : Region of code where a certain variable can be accessed.

| Global Scope  | Function Scope | Block Scope |
| --- | --- | --- |
| Variables declared are accessible everywhere. | Variables are accessible only inside function {var} | Variables are accessible only inside block(block scoped) |
| Outside of any function or block  | Also called local scope  | Only applies to let and const variables |

**Global scope** 

Variables which are **defined outside** of a function block have *Global* scope

**Local scope / Function scope** 

Variables which are declared within a function, that means they  are accessible anywhere inside of the function they are defined.

**Block scope** 

The behavior of a variable to only be accessible inside the block it was defined.

**Variable Lookup in scope chain.**

This means variables (child elements) have access to all outer scopes or variables and functions declared before them.

<aside>
📌 Each function declaration creates a new scope.

</aside>


**Hoisting**

Is the process by which the JavaScript engine moves variable declarations to the top of their scope, allocating memory to them before reaching the line of code here they are declared.


- **IF Statement.**

    The **If statement checks the condition and executes the block of code if the the condition is true.**

    ```jsx
    const age = 19;
    if (age >= 18) { ("Sarah can start driving license 🚗🏎 ");
    ```
    
    **Condition:** Is any code that returns a true or a false value.
    
    <aside>
    🗣 Unlike the equality (==) operator, which attempts to convert both values being compared to a common type, the strict (===) equality operator does not perform a type conversion.
    
    </aside>
    
    **IF / Else Statement**
    
    ```jsx
    const age = 15;
    if (age >= 18) {
        console.log("Sarah can start driving license 🚗🏎 ");
    }
    else {
        const yearsLeft = 18 - age;
        console.log(`Sarah is too young to drive. Wait another ${yearsLeft} years :))`);
    }
    ```
    
    The **If statement** checks the condition and executes the block of code if the the condition is true. ****If the condition is false then **the else** block is executed instead.
    
    - ✅**The Switch Statement.**
        
        The switch element allows us to select one of many code blocks to be executed. The values in the expression is compared to all the cases and is executed if there is a match otherwise the default block is executed. (default)
        
        ```jsx
        switch(expression){
        case x:
        // code block
        break;
        case y:
        // code block
        break;
        // code block
        default:
        // default statement
        break;
        }
        ```
        
    
    > *We can also add multiple inputs with the same output.*
    > 
    
    ```jsx
    let result = "";
    switch (val) {
      case 1:
      case 2:
      case 3:
        result = "1, 2, or 3";
        break;
      case 4:
        result = "4 alone";
    }
    ```
    
    <aside>
    📌 🗣Better option to If else statements
    
    </aside>
**TRUTHY AND FALSY VALUES.**

🚫**FALSY VALUES: These are values that are not false but are turned into false values when they are converted into a boolean.** 

- undefined
- 0
- NaN
- null
- “ “

```jsx
Boolean(0); // Output(false)
Boolean(undefined); 
```

✅**TRUTHY VALUES: These are values that turn into true values when converted into a boolean. Truthy values include strings that are not empty strings.**

```jsx
📌**Conditional (ternary) operator:**

The ternary operator is an alternative to the if….else statement. 

It allows us to write the equivalent of the if…else statement all in one line of code.

**Syntax** 

```jsx
age >= 18 ? 'can drink wine' : 'I like to drink water'; 
condition ? if part : else part
```
Boolean('Jonathan'); /// Output(true)
```

We use **Boolean Logic** when solving complex logical problems in JS. We then use operators like: ‘’And’’, ‘’Or’’ and ‘’Not’’

- **Loops**
    
    Loops are lines of code in JavaScript that allow us to repeat or execute a block of code a number of times.
    
    ***While Loop***.
    
    The `while` loop loops through a block of code as long as a specified condition is true. The `while` loop is very important because it allows us to iterate over a block of code even if we do not have a counter.
    
    ```jsx
    //Iterate with JavaScript While Loops positive++
    let i = 0;
    while (i < 5) {
      ourArray.push(i);
      i++;
    }
    //Iterate with JavaScript While loop Negatively-- (descending)
    let i = 5;
    while (i > 0) {
      myArray.push(i);
      i--;
    ```
    
    ***For Loop.***
    
    The `for` loop checks if the condition is true then it runs the code. It stops once the condition is completed. 
    
    ```jsx
     //for (expression 1; expression 2(condition); expression 3) {
      // code block to be executed
    }
    
    for (let i = 0; i < years.length; i++) {
        ages.push(2037 - years[i]);
    }
    ```
    
    ```jsx
    // Looping arrays.
    const years = [1991, 2007, 1969, 2020];
    const ages = [];
    
    for (let i = 0; i < years.length; i++) {
        ages.push(2037 - years[i]);
    }
    console.log(ages);
    ```
    
    <aside>
    🗣 For loops don't have to iterate one at a time. By changing our `final-expression`, we can count by even numbers.
    
    </aside>
    
    **Do...While Loop**
    
    It is called a `do...while`loop because it will first `do`one pass of the code inside the loop no matter what, and then continue to run the loop `while`the specified condition evaluates to `true`.
    
    ```jsx
    const ourArray = [];
    let i = 0;
    
    do {
      ourArray.push(i);
      i++;
    } while (i < 5);
    ```
    
    <aside>
    🗣 Essentially, a `do...while` loop ensures that the code inside the loop will run at least once. Let's try getting a `do...while` loop to work by pushing values to an array.
    
    </aside>
**Recursion.**

Recursion is the concept that a function can be expressed in terms of itself.

```jsx
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
// Same solution with for loop
// function multiply(arr, n) {
  //   let product = 1;
  //   for (let i = 0; i < n; i++) {
  //     product *= arr[i];
  //   }
  //   return product;
  // }
```

[How to Understand Recursion in JavaScript](https://www.freecodecamp.org/news/understanding-recursion-in-javascript/)

**Count Backwards With a For Loop :** 

In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

We'll start at `i = 10` and loop while `i > 0`. We'll decrement `i` by 2 each loop with `i -= 2`.

```jsx
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

**Continue :** *Exits the current iteration of a loop and continuing to the next one*.

```jsx
// Only elements of the array that are 'strings' will be returned.
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}
```

**Break :** *Terminates the whole loop***.**

```jsx
// Only elements of the array that are 'numbers' will be returned.
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
```

**Nesting For Loops**

```jsx
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
// This outputs each sub-element in arr one at a time.
// The inner loop checks the .length of arr[i], since arr[i] is itself an array.
```

- **FUNCTIONS.**
    
    A function is a block of code that is designed to perform a specific task. ||  A function is a piece of program wrapped in a value.
    
     ***Functions are also defined as verbs or actions that instruct a computer on what to do.***
    
    <aside>
    📌 **After creating the function and inputing the code block, its necessary to call or invoke the function.**
    
    </aside>
    
    ```jsx
    function name(parameter1, parameter2, parameter3) {}
      // code to be executed
    // fuction reusableFunction(){
    //console.log("Hello, World");
    // Calling my reusableFunction 
    reusableFunction();
    ```
    
    ***Parameters: These are like variables that are specific only to this function.**  They are defined when the function is called or invoked.*
    
    **Returning a value.**
    
    We can pass values into a function with *arguments.* You can use a `return` statement to send a value back out of a function.
    
    **Function declaration :** Function declaration declares functions with a function keyword. The function declaration must contain the function name.
    
    <aside>
    💡 **Function that can be used before its declared in the code.**
    
    </aside>
    
    ```jsx
    function name(parameter1, parameter2, parameter3) {
      // code to be executed
    }
    ```
    
    **Function expression** : A function expression is similar to the function declaration but without the function name. \Function expressions are rather stored in variables.
    
    <aside>
    💡 **Essentially a function value that is stored in a variable.**
    
    </aside>
    
    ```jsx
    const variableName = function() {
    // code to be executed
    }
    ```
    
    **Arrow Functions :** An arrow function is a compact alternative to the traditional function expression. Its is shorter and much easier to write.
    
    <aside>
    💡 **Great for a quick one-line function.**
    
    </aside>
    
    ```jsx
    // In case of a single paremeter 
    const variableName = parameter => function             
    ```
    
    ```jsx
    // In case of two paremeters
    const variableName = (paremeter1, paremeter2) => function{
    // code to be executed
    ```
    
    <aside>
    📌 **The “return" statement immediately exits the function.**
    
    </aside>
