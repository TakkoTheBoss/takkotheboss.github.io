---
title: Version 0.2.0 Release
description: Hachi version 0.2.0 updates.
published: 2024-10-17
---

Below is a description of updates made to Hachi version 0.2.0

# Version 0.2.0 - October 17th, 2024

## fmt module with a loop-safe print function ("shout" - shell out).
Added module `fmt` to handle formatting I/O. Where the new `shout` function is suggested in place of `print` inside of loops.

## Support for '.hachi' and '.🐺' files.
Opting for more unique filetypes since `.8` is confused for manual-page files.

`.hachi` is a no-brainer in terms of it's uniqueness.

`.🐺` is just because I wanted to have an emoji filetype similar to .🐍 files in the Mojo programming language. It's just a fun little thing, no real use to it at all.

The import system accepts the new filetypes as well.

## Add clang++ compile flags to hachi shell -build commands (useful for linking).
I've added the ability to include C++ flags in the hachi shell -build commands. This is for the scenarios where you're including C++ code which requires some sort of linking, etc.

*Example:*

    hachi filename.hachi -cf "-std=c++17 -ldl" -build filename

# Mike's Thoughts
As I have been working more on and with Hachi, I'm heading in the directions of adding some more features of other languages I like. As it is right now, it's conglomeration of cool features from other languages. But I find myself looking toward the *Zig* language for some future functions relating to how it can just compile C/C++ files using the `zig` command, which is convenient and cool.

Additionally there is a feature of the [*Lobster* programming language](https://strlen.com/lobster/) I find quite useful, and that is to generate a C++ version of the Lobster code and include it with other C++ projects. So essentially you can write a Lobster file with functions that you want to use in other C++ projects, and just link it. I find this to be cool and useful. And I'd like to do something similar.

As time goes on, I continually look for more features that makes the languages more intuitive to use, run, and overall fun to use.

- Mike

