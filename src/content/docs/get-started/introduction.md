---
title: Introduction to Hachi
---

![Hachi Logo](/hachi_mascot.png "Hachiko!")

Because Programming Shouldn’t Be a Chore

****

Hachi is designed to feel dynamic and expressive like a higher-level language while delivering the performance of a compiled one. It is memory safe, statically typed, and compiled. The core features are fully functional, and the language is in active development as its standard library grows.

The philosophy behind Hachi is simple: it should feel like a bucket of bucket of Legos. Language components are straightforward, flexible, and can be combined in whatever style makes sense to you. Whether you prefer object-oriented, procedural, or functional patterns, Hachi avoids rigidity and encourages a free-form style of programming.

Hachi started as a personal experiment to simplify and abstract some messy C and C++ compilation work. Over time, it became clear that it could grow into something more than a one-off project. While it was originally built to suit my own needs, I decided to make it open source with the hope that others might find it useful as well.

The language is named after my dog, Hachiko, a free-spirited husky whose personality matches the language’s design philosophy. Hachi is meant to feel unencumbered, straightforward, and fun to use.

## Compatibility

Hachi requires no external dependencies. Installing `clang++` and running `make` in the repository root is enough to get started. Some optional modules may require additional dependencies.

Make sure you have `clang++` with at least C++11 support installed.

Hachi has been tested successfully on Linux.

## Features

### Standard Features

* Primitive data types: `Bool`, `Int`, `Dub`, `String`
* Standard operators: `+`, `-`, `*`, `/`, `%`, `&&`, `>`, `<`, `=>`, and others
* Single-line and multi-line comments
* Flow control: conditionals and loops
* Constants
* Data structs, tuples, and arrays (`IntArray`, `StringArray`)
* Hash maps
* Functions
* String operations and user input
* Running system commands
* `AnyT` type (similar to generics or templates)
* Pass-by-reference
* Operator overloading
* File importing
* Anonymous functions

### Unique Hachi Features

* Embed C++ code directly inside Hachi files
* Auto-Free memory management with automatic deallocation when values go out of scope
* Implicit variable creation with type inference
* Functions with no arguments are accessed like variables
* Assignments and function calls use a colon (`:`) instead of `=`
* Tuples, structs, and class-like objects share a unified syntax
* Arguments can be passed to functions from either side: `(inputLeft.function: inputRight)`
* Control flow uses operators instead of keywords:

  * `@` for loops
  * `?` for conditionals

Hachi aims to provide powerful features without unnecessary complexity, encouraging experimentation and flexibility while retaining the speed and safety of a compiled language.

