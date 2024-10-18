---
title: Control Flow
---

In any of the below control flow operations, parenthesization is optional as long as the body contains only a single statement.

# Iterators
Hachi has *for* and *while* loops like other languages, where the `@` character is the loop operator.

## While Loops
This is a sample infinite loop which will continue as long as the *power level* is OVER 9000!!!!

    power-level: 9001

    power-level > 9000 @
    (
        print: "ITS OVER 9000!!!!"
    )

## For Loops
C style *range-based* for loops are used. The header of this loop consists of 3 expressions which are separated with `|`:
- Initialize the index variable `i` at `0`, which is the start of the loop.
    
        i:0
- Set the condition for the loop to continue running. As long as `i` is less than `10`, the loop will keep executing

        i<10

- Set up an incrementer to which the value of `i` is incremented by `1`.

        i: i+1

- Full Example.

        i: 0 | i<10 | i: i+1 @
        (
            print: "Hello there."
        )

# Conditionals
If/then/else operations are initiated with the `?` operator. This is handled similarly to ternary operations in C or C++.

This example shows just the *if* and the *else*, without *else if*.

        a: tru

        a ? # or "a = tru"
        (
            print: "a is True."
        )
        |
        (
            print: "a is False."
        )

This next example shows *if*, *else if*, and *else*.

        a: tru
        b: fls

        a = tru && b = tru ? # Starting "if"
        (
            print: "a and b are True."
        )
        | a = tru && b = fls ? # "if else"
        (
            print: "a is True and b is False."
        )
        | # "else" if left empty.
        (
            print: "Stuff is just like whatever man."
        )