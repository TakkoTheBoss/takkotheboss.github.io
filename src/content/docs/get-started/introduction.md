---
title: Introduction to Hachi
---

![Hachi Logo](/Hachi_Logo-Medium.png "Hachi Logo" )

# The Hachi Programming Language
**_Move Fast and Make Things_**

Hachi aims to be a more dynamic-feeling & high(er-ish)-level language while delivering the performance of a compiled one. It's a memory safe and statically typed compiled language. And it's pretty dope bro. Core features are functional and operational, it's just currently undergoing semi-rapid development of it's core library. It takes what I call the "Bucket of Legos" approach, where language components are simple to use and easy to implement by means of just sorta sticking things together in whatever programming patterns you want to (Object-oriented, Procedural, Functional, etc for the most part). It's not very rigid, rather more of a free-spirited style of language.

Hachi exists to help me out personally with some work I was doing, and to be comfortable for me personally. I envisioned something between Python and Go, that was simple and didn't have too many rules or complexities which have plagued me with some other languages. My style and way of doing things may not suit most. And yes, hachi is something I **actually** use in my own work. It started off as an experiment in abstracting some C & C++ compilation frankenstein stuff I was attempting, and I realized that this could be so much more than a point-of-concept for a one-off use case. And since I don't do much development in public, this is my first real go at an open-source project. I'm honestly happy if I'm the only one who uses it, however I hope it someday helps someone else out (maybe just even 1 person).

Hachi is under rapid development, and I've done my best to yeet as many foot-guns possible at this time.

Hachi is named after my dog, Hachiko. That's it. He's a very free-spirited and unencumbered husky, and the Hachi language intends to be the same. Hence the husky mascot and my loosey-goosey way of doing things here.

![Hachi Logo](/hachi-help-screen.png "Hachi Help Screen" )

## Compatibility
The Hachi language itself requires zero external dependencies. As easy as installing `clang++` then running `make` in the root dir of this repo. Some modules you may choose to use can require additional dependencies.

*Note: Ensure `clang++` and at least C++11 is available to build it.*

Hachi has been successfully tested on Linux.

## Features
These are current features present in this implementation:

### Standard
* Your basic data types `Bool`, `Int`, `Dub`, `String`
* All the operators you'd expect (`+`, `-`, `&&`, `=>`, etc)
* Both single and multi-line comments
* Flow control (conditional, loops)
* Constants
* Data structs
* Tuples
* Int arrays
* String arrays
* Functions
* Strings and various String operations
* User input
* Running system commands
* AnyT type (equivalent to templates or generics in other languages)
* Pass-by-reference
* Various programming patterns
* Operator overloading
* File importing
* Lambda functions
* Anonymous functions

### Hachi Features
- Run C++ code inside of Hachi files.
- Creating Variables is implicit, set it and forget it.
- Variables have type inference.
- To call a function which doesn't take any arguments is identical to accessing a variable.
    - Calling function `function`
    - Accessing var `var1`
- To call a function which takes an argument is identical to creating a variable.
    - Calling function w/parameter:
        - `function1: param1`
    - Creating var:
        - `var1: lol`
- To call function with multiple parameters is identical to creating a tuple.
    - Calling function w/multiple parameters:
        - `function1: param1,param2,param3`
    - Creating tuple var:
        - `tupleVar: item1,item2,item3`
- Ignores most white space in code. You can run almost the entire file on one line, if that's your thing I guess (I'm not judging, you do you homie!!)
- No need to separate with semicolon.
- No double-equals `==`, using `=` for comparison.
- Hachi uses colon (`:`) for assignment.
- Tuples, structs and class objects are all handled similarly in the code.
- A function can be sent arguments from the either the left or right side, ***OR*** on both sides.
    - Left and right-side inputs:
        - (`inputLeft.function: inputRight`)
- Control is done via symbols & operators instead of keywords.
    - Examples:
        - `@` for **loop**
        - `?` for **if**
