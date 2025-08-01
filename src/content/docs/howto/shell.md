---
title: Run Shell
---

Hachi has a built-in language shell to provide an interactive environment to explore tools and code directly in Hachi.

Starting the Hachi shell is as simple as running the `hachi` in the terminal.

# Operating within the shell

When interacting with the shell, you can simply input your hachi code and generate result output as needed.

```
$ hachi
Hachi 0.2.2
Type ".clear" to clear the screen, ".read" to read the program, or ".exit" to quit the shell.
🐺 >> >@"fmt"
s🐺 >>str1: "Hachi is"
🐺 >> yrs: 2
🐺 >> str2: "years old!"
🐺 >> func::{number:Int}->{String}:(
...     2+Ri.number
... )
🐺 >> //
... This is
... a
... multi-
... line
... comment!
... \\
🐺 >> # Here is a single-line comment
🐺 >> statement: str1 + " " + yrs.String + " " + str2
🐺 >> # Now let's print the statement!
🐺 >> shout: statement
Hachi is 2 years old!
```

## Shell Commands

### .clear
Clears the screen.

*Syntax*:

```shell
.clear
.clr # short syntax
```

### .read
Prints output of all your prior Hachi shell inputs.

*Syntax*:

```shell
.read
.r # short syntax
```

### .exit
Exits the Hachi shell.

*Syntax*:

```shell
.exit
.x # short syntax
```
