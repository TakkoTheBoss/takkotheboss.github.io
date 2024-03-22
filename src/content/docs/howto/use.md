---
title: Use Hachi
---

Make sure `clang++` and `make` are installed.

    git clone https://gitlab.com/hachi-lang/hachi
    cd hachi
    make

That's it. It's suggested that your Hachi executable be placed in your PATH somewhere. Additionally, set HACHI_PATH to the `lib` directory. There are plans in the future to manage this more efficiently by way of running install scripts. When importing modules, Hachi will look in the HACHI_PATH first, and if the module doesn't exist there then imports become relative paths.


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

## -buildml
This builds the executable from a defined hachi file and checks for memory leaks.

This is intended mainly to use on hachi code which makes use of the `outerCPP` and `innerCPP` commands since any raw C++ code you may use is outside the coverage of hachi's own memory safety mechanisms. Essentially C++ code used in either of the aforementioned commands is not included in hachi's auto-free mechanism as it's an unsafe advanced mechanism, and the `-buildml` flag allows the you to see where you may have introduced unsafe code that you may choose to correct.

### NOTE:
Hachi's own `print` statements can be flagged under this mechanism if you're printing literals.  Best practice is just to print from a variable whenever you can.

Another memory safety item to disclose here is that hachi dynamically assigns memory to objects. Currently running with `-buildml` flag will still flag areas where memory is being dynamically allocated. Hence it's recommended use is only for when you're code includes raw C++ code.

*Syntax*:

    hachi <filename>.8 -buildml <filename>

*Example*:

    hachi sk.8 -buildml skate

*Screenshot*:

![Hachi Memory Leak Test](/hachi_mem_leak.png "Hachi Debug" )

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

