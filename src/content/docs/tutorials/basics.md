---
title: The Basics
---

This tutorial provides a brief introduction to Hachi. Here you'll learn how to:
- Install Hachi
- Create a simple "Goodbye World" program
- Use hachi to run and/or compile code
- Import internal and external modules, and call their functions

# Prerequisites
- ***Some* Programming Experience**: The code in this tutorial is simple. All you need to bring is a basic understanding of control flow and generally common types common among other languages.
- **An IDE**: or other text editor. 
- **Terminal**: to run the hachi code.

# Build Hachi

Run these commmands to install Hachi.

```shell
git clone https://gitlab.com/hachi-lang/hachi
cd hachi
make
```

Be sure to set the `HACHI_LIB` environment variable to the `lib` directory. This is where Hachi will look for modules.

*Note: You can place the lib directory anywhere you'd like. Just be sure to set your `HACHI_LIB` environment variable after you move it, or update the previously set path.*

Run the `hachi -init` command to initialize a folder with a main.hachi file and an hMods folder to hold any custom mods you may make.

# Write some code!

Here we'll create our first hachi program.

```php
print: "Goodbye World!"
```

That's it, that's all it takes for a first program.

You can either build this with:

```shell
hachi <filename>.hachi -build <program-name>
```

or run with:

```shell
hachi <filename>.hachi -go
```

Now let's see what else we can do. Here we'll go ahead and assign our print string to a variable.

```php
printString: "Goodbye World!"
print: printString
```

In this latest example we're declaring a variable called `printString` and assigning it to a string value. We're then printing `printString` using hachi's `print` command.

As you can see, setting a variable and calling a function with input is pretty similar.

Next up, we're going to import the *string operations* module from hachi's core library,  create a function which takes the input of "Goodbye World!", strips out the second word and prints a new greeting.

```php
>@ "so/so"

printString: "Goodbye World!"

newGreeting:: {greeting: String}->{String}: (
        inputGreeting: Ri.greeting
        subGreeting: inputGreeting.split: " ", 1
        "Hello " + subGreeting
)

print: newGreeting: printString
```

Let's go ahead and work in some integers and type conversion to wish Hachiko a happy birthday.

```php
name: "Hachiko"
age: 9
hbd:: {name: String, age: Int}->{String}:(
    hbdName: Ri.name
    hbdAge: Ri.age
    "Happy Birthday " + hbdName + "! You're now " + hbdAge.String + " years old!"
)

print: hbd: name, age
```

As we can see, type conversion is as easy as putting `.String` after the Integer, and same for converting to the `Int` type.

```php
carTires: 4
poppedtires: "1"
print: carTires - poppedtires.Int
```
