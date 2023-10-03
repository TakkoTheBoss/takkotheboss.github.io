---
title: Arguments
---

Hachi programs can be passed arguments for use in CLI utilities, etc. 

An important note is that arguments for CLI input start at index 3, so that'd be `arg: 3` in the Hachi code.

Currently, while variables can be initialized with an argument value, this needs to be proceeded by the `__copy__` function, however no `__destroy__` function is required, as the initialized variable is caught in Hachi's auto-free mechanism. Once you've initialized the argument value variable with the `__copy__` function, it then can be used as if it's just another variable. This will be made easier in future Hachi versions.

*Example*:

    argFunc:: {argument:String}:(
    argument: Ri.argument
    print: argument
    )

    param: __copy__: arg: 3
    argFunc: param

