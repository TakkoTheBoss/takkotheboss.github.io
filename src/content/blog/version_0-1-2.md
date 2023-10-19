---
title: Version 0.1.2 Release
description: A rollup of updates from Hachi version 0.1.1 and 0.1.2.
published: 2023-10-19
---

This is a rollup release of versions 0.1.1 and 0.1.2.

# Version 0.1.1 - September 4th, 2023

## Expand language standard library.
Added some additional functions to the Hachi language itself. (See ***Functions*** documentation for more details).

## Add Hachi Core Library
Added a core Hachi Library with simple modules. Some of the latest are:
- **so** - String Operations
- **calc** - Simple Math Stuff.
- **sys** - System
- **net** - Networking

## Implement String Arrays
Prior to version 0.1.1, only Integer Arrays were possible. But now you can set a String Array similar to how you'd do with an Integer array.

*Sample*

    StringArray: <Size>
    StringArray.set: <index>, <string>
    StringArray.get: <index>

# Version 0.1.2 - October 6th, 2023

## Project Initialization
Added a `hachi` command to initialize the current directory as a *hachi project*.

## Dynamic Imports
Hachi now checks for the existence of imported modules in the **HACHI_LIB** path, and if it doesn't exist then the import path becomes a relative file path.

## Hachi Utils
Started to add utilities to supplement Hachi use.

The first utility is the "bowl.8" utility located in the *$YOUR_HACHI_FILE-PATH/hUtils* directory, which handles the complexity of compiling C++ bindings which require links to dynamic C/C++ libraries.

*Sample*

    # Sample "hachi bowl.8" command.
    hachi bowl.8 <your hachi file> <compiled program name>

## Lambda & Anonymous Functions

Added support for Lambda & Anonymous Functions. 

*Lambda Function Sample*
Here we are passing a lambda function as an input parameter to function **testFunc**.

    testFunc:: {Int}: (
        print: Ri
    )

    testFunc: ({}->{Int}:(4-2))

This would print **2**.

*Anonymous Function Sample*
Here we are passing an anonymous function as an input parameter to function **testFunc**.

    testFunc:: {Int}: (
        print: Ri
    )

    testFunc: ({}->{Int}:(4-2))*6

This would print **12**.
