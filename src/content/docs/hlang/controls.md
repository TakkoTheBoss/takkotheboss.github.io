---
title: Control Flow
---

# Loops
Hachi has *for* and *while* loops like other languages. A loop is initiated with the `@` character.

## For Loops

    i: 0 | i<10 | i: i+1 @
    (
        print: "Hello there."
    )

C style *range-based* for loops are used. The header of this loop consists of 3 steps:
1. Initialize the index variable `i` at `0`, which is the start of the loop.
    
        i:0
2. Set the condition for the loop to continue running. As long as `i` is less than `10`, the loop will keep executing

        i<10

3. Set up an incrementer to which the value of `i` is incremented by `1`.

        i: i+1


# Conditionals
