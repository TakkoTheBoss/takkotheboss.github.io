---
title: Introduction to Hachi
---

![Hachi Logo](/Hachi_Logo-Medium.png "Hachi Logo" )

# The Hachi Programming Language
**_Move Fast and Make Things_**

Hachi aims to feel like a more dynamic & high(er-ish)-level language while delivering the performance of a compiled one. It's a memory safe and statically typed compiled language. And it's pretty dope bro. Core features are functional and ready, it's just currently undergoing semi-rapid development of it's core library. It takes the "Bucket of Legos" approach, where language components are simple to use and easy to implement by means of just sorta sticking things together in whatever programming patterns you want to (Object-oriented, Procedural, Functional, etc for the most part). It's not very rigid, rather more of a free-spirited style of language.

Currently Hachi's development is driven by me and what my use cases dictate. I am rarely touching the internal C++ implementation code that much anymore, and moreso spending the majority of my time in Hachi creating modules for the core Hachi library to meet my own personal needs as they arise.

There is currently no package system, as it's simply just not priority at this time. Though such a system will likely be worked on after it seems the core library is in a good place. There are plenty of good tools out there for this, so it's just a matter of _when_.

For the record, I do in fact code in Hachi for serious things. I do not use it as just a toy language. 

![Hachi Logo](/hachi-help-screen.png "Hachi Help Screen" )

## Why?
I didn't find exactly what I was looking for while tackling unique use case, it's just that simple. I literally just wanted a way to smush some C and C++ code together for a very super duper niche random use case I needed to work on (a little more complicated than that). But coming from many years in Python, I wanted something easier than to have to type and write in than C or C++ all the time (I'm a big stupid doodoo-head that doesn't want to do a lot or type a lot). In my search for such a tool, I came across a neat language called Pinecone, and it was really cool, AND it seemed to help me with all of my weird needs almost perfectly. Unfortunately the language has since languished, almost lost in the ether, as the language has been defunct since early 2017. But I found it, I loved it and loved what the author seemed to be going for, and decided to take a lot of what I loved from Pinecone to make something new, and grow this language myself under the name "Hachi" to ultimately create the dream language which I PERSONALLY want it to be and PERSONALLY enjoy coding in. 

So yeah, Hachi aims to be that magical language I often imagined to make my work much easier. Instead of "Move Fast and Break Things", this language aims to help me "Move Fast and Make Things".

## Compatibility
The Hachi language itself requires zero external dependencies. As easy as installing `gcc` then `make` in the root dir of this repo. But you find some modules which may require additional dependencies.

*Note: Ensure `gcc` at least C++11  to build it.*

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
* Arrays of any type
* Pass-by-reference
* Various programming patterns
* Operator overloading
* File importing

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