---
title: Use Hachi
---

Make sure g++ and make are installed.

    git clone https://gitlab.com/hachi-lang/hachi
    cd hachi
    make

That's it. It's suggested that your Hachi executable be placed in your PATH somewhere. 

![Hachi Help](/hachi-help-screen.png "Hachi Help Screen" )

After installing Hachi, you probably gonna want to run this puppy. So to start off, you can simply run `hachi -h` to see all commands you can run. Here we'll cover general commands to use.

Currently Hachi has 2 modes of use, one being compiled and the other being interpreted. If you run the naked `hachi` command with a filename, hachi will attempt to run that program. This will only work if there is no dropped-in C++ code present in the file. For example, most core library modules contain C++ bindings, and cannot be ran via interpreted mode.

Hachi is a compiled language first, where the interpreter is used to more for either scripting or testing.

# Compiled

## -build
This builds the executable from a defined Hachi file.

*Syntax*:

    hachi <filename>.8 -build <program-name>

*Example*:

    # Build "skate"
    hachi sk.8 -build skate
    # Run "skate"
    ./skate

# Interpreted
Use the naked `hachi` command followed by the file.

*Syntax*:

    hachi <filename>.8

*Example*:

    hacho code.8


# More Commands

## -cpp
Translates Hachi file to a C++ file.

*Syntax*:

    hachi <filename>.8 -cpp <filename>.cpp

*Example*:

    hachi sk.8 -cpp skate.cpp

*Linux tested, other OS's will be soon.*

## -d/-debug
Runs Hachi command with a visual debug output including AST and AT.

*Syntax*:

    hachi <filename>.8 -d <other-commands>

*Example*:

    hachi debugTest.8 -d

*Screenshot*:

![Hachi Debug](/hachiDebugSample.png "Hachi Debug" )

# Passing In Arguments
Hachi programs can be passed arguments for use in CLI utilities, etc.

## -r/-run
Runs program with interpreter. Although interpreter is default use with naked `hachi` command, -r is necessary to pass in arguments. Currently the filename is considered an argument, so be sure to offset args by 1 in your code.

*Syntax*:

    hachi <filename>.8 -r <arguments>

*Example*:

    hachi cliArgs.8 -r These Are Arguments

*Screenshot*:

![Hachi Args](/hachiArgSample.png "Hachi Args" )
