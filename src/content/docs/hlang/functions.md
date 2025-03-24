---
title: Keywords and Built-In Functions
---

Built-in functions and constructs in Hachi are very light, with the core library accommodating any functions you'd need. For example, Hachi has a built-in `print` function, and then also has a string split function (`strSplit`) which needs to be imported from "String Operations" (so) module in the core library. The latter will be covered in the "Libraries" section. But a list of language level functions and constructs are below.

# Functions
## print
Prints an input.

*Syntax*:
        
```php
print: <value>
```

*Example*:

```php
print: 8
```

## shout
Also prints an input (suggested use for inside loops in place of `print`). 

*Syntax*:

```php
shout: <value>
```

*Example*:

```php
shout: "Halo 3 is the best!"
```

## sub
Returns a substring given a start & end range.

*Syntax*:

```php
<string>.sub: <start-index>,<end-index>
```

*Example*:

```php
aString: "Hello there"
print: aString.sub: 0, 5
```

## at
Returns the ascii code for character present at a given index.

*Syntax*:

```php
<string>.at
```

*Example*:

```php
doggo: "Hachiko"
print: doggo.at: 2
```

## len
Returns length of a given value or amount of elements in a given array.

*Syntax*:

```php
<value>.len
```

*Example*:

```php
doggo: "Hachiko"
print: doggo.len
```

## toascii
Returns character of a give ascii code.

*Syntax*:

```php
<integer>.toascii
```

*Example*:

```php
code: 101
print: code.toascii
```

## input
Expects string unput from user.

*Syntax*:

```php
<variable>: String.input
```

*Example*:

```php
myString: String.input
```

## inputInt

*Syntax*:

```php
# Left-side input.
<value>.Bool
# Right-side input.
Bool: <value>
```

*Example*:

```php
floof: "tru"
# Left-side input.
hachi.Bool
# Right-side input.
Bool: hachi
## Byte
Convert value to Byte.
```

*Syntax*:

```php
# Left-side input.
<value>.Byte
# Right-side input.
Byte: <value>
```

*Example*:

```php
hachi: "eight"
# Left-side input.
hachi.Byte
# Right-side input.
Byte: hachi
```

# Arrays
Hachi has Integer and String Arrays. 

## Integer Array
A data structure used as a collection of integer values.

### Initiate

*Syntax*:

```php
IntArray: <size>
```

*Example*:

```php
IntArray: 69
```

### Get

*Syntax*:

```php
<variable>: IntArray.get: <index>
```

*Example*:

```php
myArray: IntArray.get: 5
```

### Set

*Syntax*:

```php
<variable>: IntArray.set: <index>, <integer>
```

*Example*:

```php
myArray: IntArray.set: 6, 9
```

## String Array
A data structure used as a collection of string values.

### Initiate

*Syntax*:

```php
StringArray: <size>
```

*Example*:

```php
StringArray: 420
```

### Set

*Syntax*:

```php
StringArray.set: <index>, <string>
```

*Example*:

```php
StringArray.set: 69, "Four-Twenty"
```

### Get

*Syntax*:

```php
<variable>: StringArray.get: <index>
```

*Example*:

```php
myArray: StringArray.get: 5
```    

# Literals

## tru
`tru` is True.

*Syntax*:

```php
tru
```

*Example*:

```php
isDaytime: tru
isDaytime ? # or isDaytime = tru?
(
    print: "It is Daytime"
)
```

## fls
`fls` is False.

*Syntax*:

```php
fls
```

*Example*:

```php
isDaytime: fls
isDaytime = fls ?
(
    print: "It is not Daytime"
)
```

## arg
***WARNING: Arguments are handled in the `sys/arg` module, which simplifies use of the "arg" keyword across various use-cases. Where otherwise, any raw-dogging of the "arg" keywork outside of the aforementioned module will introduce hidden potholes and footguns related to parsing arguments manually.***

Involves the use or arguments in your code. 

*Syntax*:

```php
arg
```

*Example*:

```php
print: "there are " + argLen.String + " args."
aLen: argLen 
i: 0 | i < aLen | i: i + 1 @ (
    print: arg: i
)
```

# Interoperability with C++
Using the `innerCPP` and `outerCPP` Hachi functions allow you to make use of C++ code inside of your Hachi scripts. Essentially, you can do use this to do whatever you'd want to do in C++, or supplement your code with Hachi Bindings.

***WARNING:***
Hachi is built with memory safety in mind (auto-free). However using raw C++ in your program can introduce unsafe contexts. USE WITH CAUTION! You can test for memory leaks with the `-buildml` flag. After compiling the object code, run it and it will output detected potential memory leaks.

## innerCPP
C++ code defined in `innerCPP` will be inside of the main function of the transpiled code.

*Syntax*:

```php
innerCPP: "<YOUR C++ CODE HERE>"
```

*Example*:

```php
innerCPP: "std::cout << \"Here is some C++ code!!\" << std::endl;"
```

## outerCPP
C++ code defined in `outerCPP` will be outside of the main function of the transpiled code.

*Syntax*:

```php
outerCPP: "<YOUR C++ CODE HERE>"
```

*Example*:

```php
outerCPP:"
    #include <fstream>
    #include <string>
    "
```

## Hachi Bindings
You can integrate C++ code into your code's functions as shown in the example below. 

*Example*:

```php
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
```
