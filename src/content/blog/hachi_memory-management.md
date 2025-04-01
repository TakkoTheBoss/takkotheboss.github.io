---
title: Hachi's Memory Management Strategy
description: A brief primer
published: 2025-04-01
---

## Static Lifetime Analysis by Static Scoping (SLASS) in Hachi

Hachi employs a unique memory management strategy known as **Static Lifetime Analysis by Static Scoping (SLASS)**. This approach is the backbone of Hachi’s "Auto-Release" feature, which automatically frees memory when variables go out of scope. It is similar in concept to the "Auto-Free" mechanism found in the V programming language but is implemented entirely at compile time.

---

## Overview

SLASS leverages Hachi's static (lexical) scoping rules to determine the lifetime of variables during compilation. The Hachi transpiler analyzes where variables are declared within the code’s block structure, determines when they will go out of scope, and automatically inserts explicit cleanup code (such as calls to `free()` or invocations of destructors) into the generated C++ output. This process eliminates the need for runtime garbage collection or reference counting.


![SLASS](/slass_flowchart.png "SLASS Flowchart")

---

## How SLASS Works

### 1. **Static Analysis of Code Scope**

- **Lexical Scoping:**  
  Hachi’s source code is organized into blocks defined by curly braces (`{ ... }`), functions, loops, and conditional statements. The transpiler uses these boundaries to establish variable scopes.
  
- **Symbol Table Construction:**  
  As the source code is parsed, the transpiler builds a symbol table that records variable declarations and associates them with their specific block or function scope.

### 2. **Lifetime Determination**

- **Variable Lifetime:**  
  By analyzing the static structure of the code, the transpiler determines the exact point where a variable is no longer accessible (i.e., when its block ends). For example, local variables in a function or within a loop are identified as going out of scope at the end of that block.
  
- **Dynamic Memory Considerations:**  
  For variables that allocate memory on the heap (such as strings or arrays), the transpiler tracks their lifetimes and ensures that cleanup code is generated for these allocations. This includes emitting calls to `free()` or incorporating destructors that handle resource deallocation.

### 3. **Automatic Cleanup Code Insertion (Auto-Release)**

- **Code Generation:**  
  At compile time, once the transpiler determines that a variable is about to go out of scope, it injects the necessary cleanup code into the generated C++ file. This code may be explicit calls to `free()` or the automatic invocation of a destructor following RAII principles.
  
- **No Runtime Overhead:**  
  Since the cleanup decisions are made at compile time, there is no runtime garbage collection or reference counting overhead. The final executable relies on statically determined cleanup actions.

---

## Implementation Details

- **Compile-Time Static Analysis:**  
  SLASS analyzes the program's structure using static scoping rules. Every variable’s lifetime is determined based on its block context, and the transpiler schedules deallocation at the end of that context.

- **Generated Cleanup Operations:**  
  For example, a dynamically allocated string might have cleanup code like `free(myString._data)` .

Injected at the end of the block where myString is defined. In some cases, types such as StringArray are defined with destructors that automatically free their internal buffers when the object is destroyed.

- RAII Integration: For certain types, Hachi leverages RAII by generating classes with destructors that automatically release resources when the object goes out of scope, further ensuring that memory is managed safely.

## Usage Considerations

- Benefits for Hachi Code: SLASS allows developers to write Hachi code without needing to manually free memory. The auto-release mechanism minimizes memory leaks and simplifies resource management for most Hachi programs.
- Embedded C++ Code Caveat: When embedding raw C++ code directly within Hachi files, the auto-release guarantees provided by SLASS may not apply. Embedded C++ segments execute verbatim in the generated output and might bypass Hachi’s memory management rules.
- User Responsibility: It is the responsibility of the user to ensure that any embedded C++ code handles memory safely. Developers should manually manage resource deallocation in these embedded contexts or avoid unsafe practices.

## Summary

Static Lifetime Analysis by Static Scoping (SLASS) in Hachi provides an efficient, compile-time memory management system that automatically frees heap-allocated resources when variables go out of scope. By analyzing the program’s static structure, Hachi inserts explicit cleanup code into the generated C++ output, eliminating the need for runtime garbage collection or reference counting. While SLASS works seamlessly for most Hachi code, developers must take extra care when embedding C++ code to ensure that memory is managed safely.

### Recap

- Hachi's auto-release mechanism is implemented by analyzing variable lifetimes at compile time.
- The transpiler uses static scoping rules to determine when a variable goes out of scope.
- Explicit cleanup code (e.g., calls to `free()` or RAII destructors) is generated for heap-allocated memory.
- There is no runtime garbage collection or reference counting involved.
- Special care must be taken when embedding C++ code directly, as such code bypasses Hachi's auto-release guarantees.

