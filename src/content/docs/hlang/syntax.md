---
title: Syntax
---

# Comments
## Single Line Comments
Single line comments start with `#`, like Bash and many other scripting languages.

_Example:_

```
# This is a single-line comment
```

## Multi Line Comments

_Example:_

```
//
This is a
multi-line
comment
\\
```

# Primitive Types

## **Int** - Integer
Holds positive or negative whole numbers.

```
69
420
-86
```

## **Dub** - Double/Float
Stores positive or negative floating point numbers (numbers with decimals).

```
69.420
-867.5309
```

## **Bool** - Boolean
True and False. Represented in Hachi as `tru` and `fls`.

## **String**
Not quite a _primitive_ type, including anyways.

```
"This is a string"
This is a mistake
```

# Non-Primitive Syntax Design Philosophy
Writing code in Hachi is simple, as many things are intuitive and _deductive_. 

## Vars, Functions and Constants

### Accessing Vars and Calling Functions

Accessing variables and calling functions which take no input are the same.

```
...
# A var.
var1

# A function with no input.
func1
```

Setting a variable and calling a function with a single input are the same.

```
...
# This is how to set var.
var1: "This is my variable."

# This is how to call a function with a single input.
function1: <Input goes here>
```

Creating a tuple and calling a function which takes in multiple arguments are the same.

```
...
# This is how to create a tuple
varTuple: 69,-4.20,fls

# This is how to call a function with multiple inputs.
function1: input1,input2,input3
```

## Constants
Constants are values that are determined at compile time. The assignment operator is a double-colon `::`, and can be set before or after wherever they are used. I.e., you can set constants at the very bottom of a hachi file, and call them in whatever manner in a function or set in a var in the very beginning of the file if desired.

```
a :: 3
print: b
b :: a+c
c :: 2
```

### Data Structures
These are constants which contain type-set elements. They can be defined or undefined. For readabiity you may separate these with a comma, semi-colon, etc. You may even just utilize spaces between elements as well.

#### Defined
You can assign names to the elements in your data structures.

```
definedStructureExample :: {
    thing1: Int
    thing2: Bool
    thing3: String
}
```

#### Undefined
You may choose to leave undefined, which will work fine and each element will be assigned as `a`, `b`, `c`, etc.

```
undefineStructureExample :: {Int, Bool, String}
```


### Functions
Functions are declared the same as constants are. Function name + 2 colons `::` and then arguments (or lack thereof) within curl-brackets.

#### No Argument
When a function takes no actual arguments, only one empty set of curl-brackets followed by the the contents of the function are set inside a set of parentheses.

```
function :: {} (
    print: "Oh hey there!"
)
```

#### Single Argument

Takes an integer argument and adds 1 to it.
```
function :: {Int} (
    addSum: in+1
)
```


#### Multiple Arguments

Takes an integer argument and subtracts it by 2, and returns the integer output.
```
function :: {Int} -> {Int}:
(
	in-2
)
```

Takes two integer arguments and outputs the integer sum.
```
function :: {v1: Int, v2: Int} -> {Int}:
(
	in.v1+in.v2
)
```

This takes 2 arguments, one from the left side of the function call, and one by the right side, then returns the sum as integer.
```
function :: {Int}.{Int} -> {Int}:
(
	me+in
)
```

Called with: `2.function: 3`

#### Misc
Previously mentioned statements don't require any delimiters, indentation, etc. You may run an entire function, array, etc, on just one line.

One-liner function:
```
singleLineFunction:: {} (print: "Hello" print: "there!")
```