---
title: Version 0.2.2 Release - Import Resolution & Redundancy Fixes
description: Hachi version 0.2.2 updates.
published: 2025-03-24
---

This release fixes two issues with Hachi's import capability, and increased convenience.


## 1. **The Import Duplication Dilemma and Our Clean Fix**

In earlier versions of Hachi, our transpiler would sometimes add the same header or import statement over and over again. This meant that if multiple parts of your Hachi code required the same dependency, the transpiler would attempt to include it several times, which caused breaking underlying namespace issues and definition errors.

**So, What Was the Issue?**

Every time a dependency was needed, our transpiler was simply outputting its import statement—without checking if it had already been added earlier.

**How Did We Fix It?**

We introduced a simple yet effective solution:

- Tracking Imports: We added a mechanism to keep track of every header or import that has already been added. Think of it as maintaining a checklist.

- Conditional Emission: Before emitting a new import, the transpiler now checks this checklist. If the header is already there, it skips adding it again.

## 2. **The Import Redundancy Challenge and Our Streamlined Fix**

In earlier versions, importing a standard library file required you to specify both the folder and file name (for example, "fmt/fmt"). This was redundant since the folder and file shared the same name. We wanted to simplify your import statements so that you could simply write "fmt" and let Hachi figure out the rest.

**What Was the Issue?**

Hachi’s import logic was set up to look for a folder (like "fmt") and then for a file inside that folder starting with the same name. This meant that you had to repeat "fmt" twice. While functional, it was unnecessarily verbose.

**How Did We Fix It?**

We updated the import resolution process to detect when an import string contains no forward slash. If you import "fmt", Hachi now automatically constructs candidate paths by assuming the file resides in a folder named "fmt" and is named "fmt" with the appropriate extension (e.g., .8, .hachi, or .🐺). If a match is found, the import succeeds—otherwise, the old relative path resolution kicks in.

This change lets you write cleaner, more concise import statements without sacrificing functionality.

## Additional Changes

- **Shorten the `-build` flag with a `-b` alternative option.**
- **Add the `__release__` language function to release memory when needed. Auto-release works fine in most cases, but this is available if required. Differs from `__destroy__` in intent, as `__release__` is meant to be used in Hachi code itself.**
- **Introduced a `-c` flag to pass in a program as a string. (E.g., `hachi -c "print: 1+2"`)**
- **Added the "fmt/color" submodule to create color-output in terminal**

-Mike
