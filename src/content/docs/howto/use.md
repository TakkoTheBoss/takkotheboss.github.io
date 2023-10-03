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

# Compile

## -build
This builds the executable from a defined Hachi file.

*Syntax*:

    hachi <filename>.8 -build <program-name>

*Example*:

    # Build "skate"
    hachi sk.8 -build skate
    # Run "skate"
    ./skate

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

# Run
Hachi files can be ran instead of compiled, similar to how Go's `go run` command works. In short, it compiles the Hachi file and executes it.

## -g/-go
This is a one-liner Hachi command compiles and executes the program. When used with arguments, be sure to offset args by 3 in your code.

*Syntax*:

    hachi <filename>.8 -go <arguments>

*Example*:

    hachi cliArgs.8 -go These Are Arguments

*Screenshot*:

![Hachi Go Args](/hachi-go-args.png "Hachi Go with Args" )
