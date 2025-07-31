---
title: Version 0.2.3 Release - Error Tracing & A Mascot!
description: Hachi version 0.2.3 updates.
published: 2025-07-31
---

This release brings two big updates to Hachi: an optional build mode for advanced error tracing, and the introduction of Hachi's official mascot – Hachiko!

## 1. **Error Tracing with Backward-cpp**

Debugging low-level issues like segmentation faults can be a nightmare without proper stack traces. In this release, I’ve added an **optional build mode** to make these kinds of errors easier to diagnose.

**What Was the Issue?**

When Hachi's C++ executable crashed due to runtime issues (like a segfault), you’d only get a vague message—no clear indication of which file or line caused the issue. This made deep debugging painful.

**How Did We Fix It?**

I integrated the [Backward-cpp](https://github.com/bombela/backward-cpp) library into Hachi’s build system.  
Backward-cpp provides rich stack traces that tell you **exactly which file and line number** caused a runtime error.

**How Do You Use It?**

- Simply build Hachi using:

  ```bash
  make ERRTRACE=1
  ```

- Make sure you have `libunwind-dev` installed.

- Once built, any crash (like a segfault) will provide a detailed error trace, making debugging far easier.

**Why Isn’t This Default?**

I deliberately kept this optional because I want the default build to **require zero extra dependencies**. This way, anyone can build Hachi out-of-the-box without needing to install anything special.

## 2. **Meet Hachiko – Hachi’s Official Mascot!**

<p align="center">
  <img src="/hachi_mascot.png" alt="Hachiko — The Hachi Mascot" title="Hachiko — The Hachi Mascot" width="49%">
</p>

It’s finally time to put a face to the name.  
**Hachiko**, our very own husky dog (yes, the real-life pup who inspired Hachi’s name!), is now officially the mascot of the Hachi language.  

He’s named after the legendary loyal Akita dog “Hachikō,” and just like both namesakes, our Hachiko embodies **loyalty, reliability, and dedication**—values I want Hachi to represent as a language.

You’ll start seeing Hachiko (the husky!) in future documentation, blog posts, and maybe even some fun CLI Easter eggs 👀

---

-Mike
