---
title: Keywords and Built-In Functions
---

Built-in functions and constructs in Hachi are very light, with the core library accommodating any functions you'd need. For example, Hachi has a built-in `print` function, and then also has a string split function (`strSplit`) which needs to be imported from "String Operations" (so) module in the core library. The latter will be covered in the "Libraries" section. But a list of language level functions and constructs are below.

# Functions
## print
Prints a given value.

*Syntax*:
        
    print: <value>
*Example*:

    print: 8

## sub
Returns a substring given a start & end range.

*Syntax*:

    <string>.sub: <start-index>,<end-index>
*Example*:

    aString: "Hello there"
    print: aString.sub: 0, 5

## at
Returns the ascii code for character present at a given index.

*Syntax*:

    <string>.at
*Example*:

    doggo: "Hachiko"
    print: doggo.at: 2

## len
Returns length of a given value or amount of elements in a given array.

*Syntax*:

    <value>.len
*Example*:

    doggo: "Hachiko"
    print: doggo.len

## toascii
Returns character of a give ascii code.

*Syntax*:

     <integer>.toascii
*Example*:

    code: 101
    print: code.toascii

## input
Expects string unput from user.

*Syntax*:

    <variable>: String.input
*Example*:

    myString: String.input

## inputInt
Expects integer input from user.

*Syntax*:

    <variable>: inputInt
*Example*:

    myInt: inputInt

## cont
Similar to the `continue` statement in Python, `cont` skips remaining statements in either the current iteration of a loop.

*Syntax*:

    cont

*Example*:

    1 > 2 ? 
        cont

## pass
Similar to the `pass` statement in Python, `pass` is a placeholder statement which literally does nothing but act as a "no-op" and allows the code to pass through without any action.

*Syntax*:

    pass

*Example*:

    1 > 2 ?
        pass

## exit
Terminates execution of entire program.

*Syntax*:

    exit

*Example*:

    2 + 2 = 5 ?
        exit

## sleep
Pauses execution by a determined number of seconds.

*Syntax*:

    sleep: <second-amount>

*Example*:

    sleep: 8

## hcmd
Hachi CMD - runs a given shell command on host operating system.

*Syntax*:

    hcmd: <command-to-execute>

*Example*:

    hcmd: "cat /etc/os-release"

## argLen
Returns count of arguments passed to Hachi program.

*Syntax*:

    argLen

*Example*:

    print: argLen

# Type Conversion
These are built-in functions to convert the type of a given value. Type value to be converted can be given as a right-side or left-side input.

## String
Convert value to string.

*Syntax*:

    # Left-side input.
    <value>.String
    # Right-side input.
    String: <value>
*Example*:

    hachi: 8
    # Left-side input.
    hachi.String
    # Right-side input.
    String: <value>
## Integer
Convert value to Integer.

*Syntax*:

    # Left-side input.
    <value>.Int
    # Right-side input.
    Int: <value>
*Example*:

    hachi: "8"
    # Left-side input.
    hachi.Int
    # Right-side input.
    Int: hachi
## Float
Convert value to Float.

*Syntax*:

    # Left-side input.
    <value>.Flt
    # Right-side input.
    Flt: <value>
*Example*:

    hachi: "8.0"
    # Left-side input.
    hachi.Flt
    # Right-side input.
    Flt: hachi
## Boolean
Convert value to Boolean.

*Syntax*:

    # Left-side input.
    <value>.Bool
    # Right-side input.
    Bool: <value>
*Example*:

    floof: "tru"
    # Left-side input.
    hachi.Bool
    # Right-side input.
    Bool: hachi
## Byte
Convert value to Byte.

*Syntax*:

    # Left-side input.
    <value>.Byte
    # Right-side input.
    Byte: <value>
*Example*:

    hachi: "eight"
    # Left-side input.
    hachi.Byte
    # Right-side input.
    Byte: hachi

# Arrays
Hachi has Integer and String Arrays. 

## Integer Array
A data structure used as a collection of integer values.

*Syntax*:

    IntArray: <size>
*Example*:

    IntArray: 69

### Get

*Syntax*:

    <variable>: IntArray.get: <index>
*Example*:

    myArray: IntArray.get: 5
    

### Set

*Syntax*:

    <variable>: IntArray.set: <index>, <integer>
*Example*:

    myArray: IntArray.set: 6, 9

## String Array
A data structure used as a collection of string values.

### Get

*Syntax*:

    <variable>: StringArray.get: <index>
*Example*:

    myArray: StringArray.get: 5
    

### Set

*Syntax*:

    <variable>: StringArray.set: <index>, <string>
*Example*:

    myArray: StringArray.set: 6, "Nine"

# Literals

## tru
`tru` is True.

*Syntax*:

    tru

*Example*:

    isDaytime: tru
    isDaytime ? # or isDaytime = tru?
    (
        print: "It is Daytime"
    )

## fls
`fls` is False.

*Syntax*:

    fls

*Example*:

    isDaytime: fls
    isDaytime = fls ?
    (
        print: "It is not Daytime"
    )

## arg
***WARNING: Arguments are handled in the `sys/arg` module, which simplifies use of the "arg" keyword across various use-cases. Where otherwise, any raw-dogging of the "arg" keywork outside of the aforementioned module will introduce hidden potholes and footguns related to parsing arguments manually.***

Involves the use or arguments in your code. 

*Syntax*:

    arg

*Example*:

    print: "there are " + argLen.String + " args."

    aLen: argLen 

    i: 0 | i < aLen | i: i + 1 @ (
        print: arg: i
    )

# Interoperability with C++
Using the `innerCPP` and `outerCPP` Hachi functions allow you to make use of C++ code inside of your Hachi scripts. Essentially, you can do use this to do whatever you'd want to do i C++, or supplement your code with Hachi Bindings.

## innerCPP
C++ code defined in `innerCPP` will be inside of the main function of the transpiled code.

*Syntax*:

    innerCPP: "<YOUR C++ CODE HERE>"

*Example*:

    innerCPP: "std::cout << \"Here is some C++ code!!\" << std::endl;"

## outerCPP
C++ code defined in `outerCPP` will be outside of the main function of the transpiled code.

*Syntax*:

    outerCPP: "<YOUR C++ CODE HERE>"

*Example*:

    outerCPP:"
    #include <fstream>
    #include <string>
    "

## Hachi Bindings
You can integrate C++ code into your code's functions as shown in the example below. 

*Example*:

    # This is a sample function from the fs module.
    file_Write:: {fName:String,fInput:String}: (
        filename: Ri.fName
        input: Ri.fInput
        innerCPP: "
            std::string input(reinterpret_cast<char const*>(input._data), input._size);
            std::ofstream outputFile(reinterpret_cast<char const*>(filename._data), filename._size);
            if (outputFile.is_open()) {
                outputFile << input;
                outputFile.close();
                return 0;
            } else {
                return 1;  // Error opening the file
            }
        "
    )

