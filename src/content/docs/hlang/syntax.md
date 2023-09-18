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

### Structures
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

    definedStructureExample :: {
        Int
        Bool
        String
    }

```
undefineStructureExample :: {Int, Bool, String}
```


### Functions

Functions are declared the same as constants are. Function name + 2 colons `::` and then the rest of function signature (input parameters and return values).

#### Function Signature

    <function-name> :: <input-parameters> -> <return-values> : (
        <function-body>
    )

Functions can create your function signature with:
- Some input
- No input
- Some return output
- No return output
- No input and no return output

Return values aren't declared, rather return values are whatever the last expression is. Where no return output is involved, this is technically considered a procedure. Additionally, where return output isn't factored into the function signature, there is no need to trail the signature with `->{}`.

*Sample Functions*:

Some input and some output.

    function:: {String}->{String}:(
        str: Ri.String
        str
    )

Some input and no output.

    function:: {String}:(
        str: Ri.String
    )

No input and some output.

    function:: {}->{String}:(
        6+9
    )

No input and No output.

    function:: {}:(
        hcmd: "cat /etc/os-release"
    )

The examples can go on to include both left-side and right-side input parameters as well.

#### Parameters

In the function signature, you can assign your input parameters and return values.

##### Input Parameters:

Input parameters can be either a type declaration, an named input element with an assigned type, or a struct which inherits the types of it's assigned elements.

Access right-side input parameters with `Ri`, and `Li` with left-side input parameters. If there are both left side and right-side input, they're separated with a `.` period character.

When using multiple input parameters, you can delimit the parameters with either a comma, a space, or a semi-colon.

    # Spaces as delimiters.
    function1:: {str1:String str2:String int1:Int}:(
        print: Ri.str1
        print: Ri.str2
        print: Ri.int1
    )

    function1: "Hello", "Hey there", 8

    # Commas as delimiters.
    function2:: {str1:String, str2:String, int1:Int}:(
        print: Ri.str1
        print: Ri.str2
        print: Ri.int1
    )

    function2: "Hello", "Hey there", 8

    # Semicolons as delimiters.
    function3:: {str1:String; str2:String; int1:Int}:(
        print: Ri.str1
        print: Ri.str2
        print: Ri.int1
    )

    function3: "Hello", "Hey there", 
    
    # Newlines as delimiters.
    function4:: {
        str1:String
        str2:String
        int1:Int
    }:
    (
        print: Ri.str1
        print: Ri.str2
        print: Ri.int1
    )

    function4: "Hello", "Hey there", 8

**Input Parameters as Types**:

*A single right-side input parameter*

    function: {String}:(
        print: Ri.a
    )

*A single left-side input parameter*

    function: {String}.{}:(
        print: Li.a
    )

*Both left-side and right-side input parameter*

    function: {String}.{String}:(
        print: Li.a
        print: Ri.a
    )

**Input Parameters as Type Assigned Elements**:

*A single right-side input parameter*

    function: {str:String}:(
        print: Ri.str
    )

*Multiple right-side and left-side input parameters*


    function: {leftstr1:String, leftstr2}:(
        print: Ri.str
    )

**Input Parameters as Elements from a Struct**:

*A struct as an input parameter*

    # Create Struct
    myStruct: {
        str1:String
        str2:String
        int1:Int
    }

    function: {myStruct}:(
        print: Ri.str1
        print: Ri.str2
        print: Ri.int1
    )

#### No Input

When a function takes no actual inputs, only one empty set of curl-brackets followed by the the contents of the function are set inside a set of parentheses.

    function :: {} (
        print: "Oh hey there!"
    )

#### Single Input

Takes an integer input and adds 1 to it.

    function :: {Int} (
        addSum: Ri+1
    )

#### Multiple Parameters

Takes an integer as an input parameter and subtracts it by 2, and returns the integer output.

    function :: {Int} -> {Int}:
    (
        Ri-2
    )

Takes two integers as input parameters and outputs the integer sum.

    function :: {v1: Int, v2: Int} -> {Int}:
    (
        Ri.v1+Ri.v2
    )

This takes 2 integer as input parameters, one from the left side of the function call, and one by the right side, then returns the sum as integer.

    function :: {Int}.{Int} -> {Int}:
    (
        Li+Ri
    )
    2.function: 3


#### Function Overloading

Hachi supports Function Overloading, where your program can have multiple functions of the same name but different function signatures. The sample below shows how you may create 3 functions of the same name.

    myFunc:: {str:String}->{String}:(
        str: Ri.str
        str
    )

    myFunc:: {str1:String,str2:String}->{String}:(
        str1: Ri.str1
        str2: Ri.str2
        cc: str1 + " " + str2
        cc
    )

    myFunc:: {str1:String,str2:String,age:Int}->{String}:(
        str1: Ri.str1
        str2: Ri.str2
        age: Ri.age
        cc: str1 + " is a " + str2 + " who is  " + age.String + " years old!"
        cc
    )

    test1: myFunc: "Hachiko"
    test2: myFunc: "Hachiko", "doggo"
    test3: myFunc: "Hachiko", "doggo", 8

    print: test1
    print: test2
    print: test3

#### Lambda Functions

Hachi has Lambda Functions. 

*Lambda Function Sample*
Here we are passing a lambda function as an input parameter to function **testFunc**.

    testFunc:: {Int}: (
        print: Ri
    )

    testFunc: ({}->{Int}:(4-2))

This would print **2**.

#### Misc
Previously mentioned statements don't require any delimiters, indentation, etc. You may run an entire function, array, etc, on just one line.

One-liner function:

    singleLineFunction:: {} (print: "Hello" print: "there!")
