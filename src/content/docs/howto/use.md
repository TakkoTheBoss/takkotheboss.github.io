---
title: Use Hachi
---

Make sure clang++ and make are installed.

```shell
git clone https://gitlab.com/hachi-lang/hachi
cd hachi
make
```

That's it. It's suggested that your Hachi executable be placed in your PATH somewhere. Additionally, set HACHI_LIB to the `lib` directory. There are plans in the future to manage this more efficiently by way of running install scripts. When importing modules, Hachi will look in the HACHI_LIB first, and if the module doesn't exist there then imports become relative paths.

![Hachi Help](/hachi-help-screen.png "Hachi Help Screen" )

After installing Hachi, you probably gonna want to run this puppy. So to start off, you can simply run `hachi -h` to see all commands you can run. Here we'll cover general commands to use.

# Compile

## -build
This builds the executable from a defined Hachi file.

*Syntax*:

```shell
hachi <filename>.8 -build <program-name>
```

*Example*:

```shell
# Build "skate"
hachi sk.8 -build skate
# Run "skate"
./skate
```

## -buildml
This builds the executable from a defined hachi file and checks for memory leaks.

This is intended mainly to use on hachi code which makes use of the `outerCPP` and `innerCPP` commands since any raw C++ code you may choose to embed can introduce unsafe contexts which are outside the coverage of hachi's own memory safety mechanisms. Essentially C++ code used in either of the aforementioned commands is not included in hachi's auto-free mechanism as it's an unsafe advanced mechanism, and the `-buildml` flag allows the you to see where you may have introduced unsafe code that you may choose to correct.

### NOTE:
Hachi's own `print` statements can be flagged under this mechanism if you're printing literals.  Best practice is just to use the `shout` function.

Another memory safety item to disclose here is that hachi dynamically assigns memory to objects. Currently running with `-buildml` flag will still flag areas where memory is being dynamically allocated. Hence it's recommended use is only for when you're code includes raw C++ code.

*Syntax*:

```shell
hachi <filename>.8 -buildml <filename>
```

*Example*:

```shell
hachi sk.8 -buildml skate
```

*Screenshot*:

![Hachi Memory Leak Test](/hachi_mem_leak.png "Hachi Debug" )

# Cross-Compilation

Hachi now supports cross-compilation between various architectures by specifying a target triple after the `-target` flag.

*Syntax*:

```shell
hachi <filename>.8 -build <program-name> -target <target-triple>
```

*Example*:

```shell
hachi sk.8 -build skate -target aarch64-unknown-linux-gnu
```

# More Commands

## -cpp
Translates Hachi file to a C++ file.

*Syntax*:

```shell
hachi <filename>.8 -cpp <filename>.cpp
```

*Example*:

```shell
hachi sk.8 -cpp skate.cpp
```

*Linux tested, other OS's will be soon.*

## -d/-debug
Runs Hachi command with a visual debug output including AST and AT.

*Syntax*:

```shell
hachi <filename>.8 -d <other-commands>
```

*Example*:

```shell
hachi debugTest.8 -d
```

*Screenshot*:

![Hachi Debug](/hachiDebugSample.png "Hachi Debug" )

## -cf
Compile Flags. Allows you to specify C++ compiler flags in your build.

*Syntax*:

```shell
hachi <filename>.8 -cf <flags> -build <program-name>
```

*Example*:

```shell
hachi coolProgram.8 -cf "-std=c++17 -ldl" -build coolProgram
```

## -cc
Compile C/C++ files as build tool. Allows you to specify C/C++ files and compiler flags in your build.

*Syntax*:

```shell
hachi <filename>.cpp -cc "<compiler-flags> <program-name"
```

*Example*:

```shell
hachi yoloSwag.cpp -cc "-std=c++17 -ldl -o yoloSwag"
```

## -c
Inline code execution support for Hachi code, similar to python's -c command. You can run one-liner code straight from the `hachi` command.

*Syntax*:

```shell
hachi -c <code>
```

*Example*:

```shell
hachi -c ">@ \"fmt/fmt\" shout: \"Hachi is awesome!\""
```

# Run
Hachi files can be ran instead of compiled, similar to how Go's `go run` command works. In short, it compiles the Hachi file and executes it.

## -g/-go
This is a one-liner Hachi command compiles and executes the program. When used with arguments, be sure to offset args by 3 in your code.

*Syntax*:

```shell
hachi <filename>.8 -go <arguments>
```

*Example*:

```shell
hachi cliArgs.8 -go These Are Arguments
```

*Screenshot*:

![Hachi Go Args](/hachi-go-args.png "Hachi Go with Args" )

