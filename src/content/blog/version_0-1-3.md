---
title: Version 0.1.3 Release
description: Hacher version 0.1.3 updates.
published: 2024-03-04
---

Before getting into this iteration's Hachi update, there is a Hachiko update.

Hachiko got a haircut.

![Hachi Haircut](/hachi_groomed_2024-0201.jpeg "Hachi Got Haircut!")

Why is this important?
Well, Hachi is Hachiko's namesake, and without Hachiko there would be no Hachi. So deal with it.

Also, yes, those are dog poop bags in the picture, though not the contents belong to Hachiko himself, but also a whole gang of rabbits that use our yard as their toilet.

Why am I talking about this?
Because I do what I want when I want. This is the Hachi way. Get used to it. Oh, AND deal with it!

Below is a description of updates made to Hachi version 0.1.3

# Version 0.1.3 - March 1st, 2024

## Extend Hachi Core Library
Added the following modules to Hachi's core library:
- **data** - Data Structures
- **dt** - Date/Time
- **fs** - File System
- **sys** - System

# Memory-Leak Check Build-Mode
Implemented a way of compiling which checks for any memory leaks present in the hachi code using the `-mem` flag/switch.

Check out the [Hachi docs](https://takkotheboss.github.io/docs/howto/use/#-mem)

*Note: While Hachi is a memory-safe language with it's own auto-free built-in to the language itself, this feature is intended mainly for use when a developer includes any raw C++ code in the Hachi files, as they can present memory unsafe code which makes it through compilation.*


