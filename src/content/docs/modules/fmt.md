---
title: Format
---

This module of the core library handles formatting I/O.

# Sub Modules

## fmt
This module handles formatting.

### Functions
#### *shout*
shout (shell+out) is a C binding for `cout`, which is a safer alternative for printing inside loops.

*Syntax*:

    # Shout a raw string.
    shout: "Hello World!"

    # Shout a string variable.
    stringVariable: "Goodbye World!"
    shout: stringVariable
